import { LocalStorage, Loading,  QSpinnerHourglass } from 'quasar'
import { auth, db } from 'boot/firebase'
import { showErrorMessage } from 'src/functions/show-error-message'

const state ={
    
    loggedIn: false,

}

const mutations = {

    setLoggedIn(state, value) {
        state.loggedIn = value
    },

    setLoggedUserName(state, value){
        state.loggedUserName = value
    }
    
}

const actions = {

    handleAuthLoggedStateChange({ commit }){
        auth.onAuthStateChanged(user => {
            if (user) {
                commit('setLoggedIn', true)
                LocalStorage.set('loggedIn', true)
                LocalStorage.set('loggedUserName', auth.currentUser.displayName)
                db.collection('users').where("userID", "==", auth.currentUser.uid).get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        let user = doc.data().profile
                        if(user == true){
                            Loading.hide()
                            this.$router.replace('/today').catch(err => {})
                        }
                        else{
                            Loading.hide()
                            this.$router.replace('/profilefill').catch(err => {})
                        }
                    })
                })
                .catch(error => {
                    return error
                })
            }
            else{
                commit('setLoggedIn', false)
                LocalStorage.set('loggedIn', false)
                this.$router.replace('/signin').catch(err => {})
            }
        });
    },

    registerUser({}, payload){
        auth.createUserWithEmailAndPassword(payload.mail, payload.passwordCheck)
            .then(response => {
                response.user.updateProfile({
                    displayName: payload.user
                }).then(response => {
                    LocalStorage.set('loggedUserName', payload.user)
                })
                db.collection('users').add({
                    userID: response.user.uid,
                    userName: payload.user,
                    profile: false,
                    course: '',
                    role: '',
                    favorites: {}
                })
            })
            .catch(error => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if(errorCode == 'auth/email-already-in-use'){
                    console.log('foi')
                    errorMessage = '<div class="app-font-medium">Email informado já está em uso</div>'
                    showErrorMessage(errorMessage)
                }
                else{
                    showErrorMessage(errorMessage)
                    console.log(error +' '+ errorCode);
                }
            });
    },

    loginUser({}, payload){
        Loading.show({
            spinner: QSpinnerHourglass,
            spinnerColor: 'red',
            spinnerSize:'80',
            backgroundColor: 'white'
        })
        auth.signInWithEmailAndPassword(payload.mail, payload.password)
            .then(response => {
                
            })
            .catch(error => {
                // Handle Errors here.
                Loading.hide()
                var errorCode = error.code;
                var errorMessage = error.message;
                if(errorCode == 'auth/user-not-found'){
                    errorMessage = '<div class="app-font-medium">Usuário informado não existe</div>'
                    showErrorMessage(errorMessage)
                }
                else if(errorCode == 'auth/wrong-password'){
                    errorMessage = '<div class="app-font-medium">Senha incorreta</div>'
                    showErrorMessage(errorMessage)
                }
                else{
                    showErrorMessage(errorMessage)
                    console.log(error +' '+ errorCode);
                }
            });
    },

    async checkProfile () {
        console.log('ta entrando')
        db.collection('users').where("userID", "==", auth.currentUser.uid).get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                let user = doc.data().profile
                console.log("ta funcionando:" +" "+ user)
                LocalStorage.set('profileCompleted', user)
            })
        })
        .catch(error => {
            return error
        })
    },

    logoutUser(){
        auth.signOut()
    }

}

// let user = auth.currentUser

const getters = {
    
}


export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}