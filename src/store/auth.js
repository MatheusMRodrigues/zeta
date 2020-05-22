import { LocalStorage, Loading,  QSpinnerHourglass } from 'quasar'
import { auth, db, storage } from 'boot/firebase'
import { firestoreAction } from 'vuexfire'
import { showErrorMessage } from 'src/functions/show-error-message'
import {uid} from "quasar"

const state ={
    
    loggedIn: false,

    uid: null,

    userData: {
    
    }

}

const mutations = {

    setLoggedIn(state, value) {
        state.loggedIn = value
    },
    
}

const actions = {

    handleAuthLoggedStateChange({ commit }){
        auth.onAuthStateChanged(user => {
            if (user) {
                commit('setLoggedIn', true)
                LocalStorage.set('loggedIn', true)
                LocalStorage.set('loggedUserName', auth.currentUser.displayName)
                LocalStorage.set('loggedUserID', auth.currentUser.uid)
                db.collection('users').where("userID", "==", auth.currentUser.uid).get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        let profile = doc.data().profile
                        if(profile == true){
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
        Loading.show({
            spinnerColor: 'red-5',
        })
        auth.createUserWithEmailAndPassword(payload.mail, payload.passwordCheck)
            .then(response => {
                response.user.updateProfile({
                    displayName: payload.user.toUpperCase()
                }).then(response => {
                    LocalStorage.set('loggedUserName', payload.user.toUpperCase())
                })
                db.collection('users').add({
                    userID: response.user.uid,
                    userName: payload.user.toUpperCase(),
                    avatar: '',
                    profile: false,
                    course: '',
                    role: '',
                    favorites: {}
                })
            })
            .catch(error => {
                // Handle Errors here.
                Loading.hide()
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

    updateUserFirstTime ({}, payload) {
        Loading.show({
            spinnerColor: 'red-5',
        })
        db.collection('users').where("userID", "==", auth.currentUser.uid).get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                let user = doc.id
                if(payload.avatarSrc == 'statics/avatar-placeholder.png'){
                    db.collection("users").doc(user).update({
                        userName: payload.username,
                        avatar: 'statics/avatar-placeholder.png',
                        role: payload.role,
                        course: payload.course,
                        profile: true
                    })
                    .then(response => {
                        auth.currentUser.updateProfile({
                            displayName: payload.username,
                            photoURL: 'statics/avatar-placeholder.png'
                        })
                        Loading.hide()
                        this.$router.replace('/today').catch(err => {})
                    })
                }
                else if(payload.avatarSrc.includes('firebasestorage')){
                    db.collection("users").doc(user).update({
                        userName: payload.username,
                        role: payload.role,
                        course: payload.course,
                        profile: true
                    })
                    .then(response => {
                        auth.currentUser.updateProfile({
                            displayName: payload.username,
                        })
                        Loading.hide()
                        this.$router.replace('/today').catch(err => {})
                    })
                }
                else{
                    const storageRef =  storage.ref().child('/avatars/'+uid()+'.jpeg').putString(payload.avatarSrc, 'data_url')
                    storageRef.on(
                        'state_changed',
                        snapshot => console.log(snapshot),
                        error => console.log(error),
                        () => {
                            storageRef.snapshot.ref.getDownloadURL().then(downloadURL => {
                                db.collection("users").doc(user).update({
                                    userName: payload.username,
                                    avatar: downloadURL,
                                    role: payload.role,
                                    course: payload.course,
                                    profile: true
                                })
                                .then(response => {
                                    auth.currentUser.updateProfile({
                                        displayName: payload.username,
                                        photoURL: downloadURL
                                    })
                                    Loading.hide()
                                    this.$router.replace('/today').catch(err => {})
                                })
                        })
                        }
                    )
                }
                })
            })
    },

    updateUser ({}, payload) {
        Loading.show({
            spinnerColor: 'red-5',
        })
        db.collection('users').where("userID", "==", auth.currentUser.uid).get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                let user = doc.id
                if(payload.avatarSrc == 'statics/avatar-placeholder.png'){
                    db.collection("users").doc(user).update({
                        userName: payload.username,
                        avatar: 'statics/avatar-placeholder.png',
                        role: payload.role,
                        course: payload.course,
                        profile: true
                    })
                    .then(response => {
                        auth.currentUser.updateProfile({
                            displayName: payload.username,
                            photoURL: 'statics/avatar-placeholder.png'
                        })
                        Loading.hide()
                    })
                }
                else if(payload.avatarSrc.includes('firebasestorage')){
                    db.collection("users").doc(user).update({
                        userName: payload.username,
                        role: payload.role,
                        course: payload.course,
                        profile: true
                    })
                    .then(response => {
                        auth.currentUser.updateProfile({
                            displayName: payload.username,
                        })
                        Loading.hide()
                    })
                }
                else{
                    const storageRef =  storage.ref().child('/avatars/'+uid()+'.jpeg').putString(payload.avatarSrc, 'data_url')
                    storageRef.on(
                        'state_changed',
                        snapshot => console.log(snapshot),
                        error => console.log(error),
                        () => {
                            storageRef.snapshot.ref.getDownloadURL().then(downloadURL => {
                                db.collection("users").doc(user).update({
                                    userName: payload.username,
                                    avatar: downloadURL,
                                    role: payload.role,
                                    course: payload.course,
                                    profile: true
                                })
                                .then(response => {
                                    auth.currentUser.updateProfile({
                                        displayName: payload.username,
                                        photoURL: downloadURL
                                    })
                                    Loading.hide()
                                })
                        })
                        }
                    )
                }
                })
            })
    },

    loginUser({}, payload){
        Loading.show({
            spinnerColor: 'red-5',
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
                else if(errorCode == 'auth/network-request-failed'){
                    errorMessage = '<div class="app-font-medium">Erro de conexão</div>'
                    showErrorMessage(errorMessage)
                }
                else{
                    showErrorMessage(errorMessage)
                    console.log(error +' '+ errorCode);
                }
            });
    },

    logoutUser(){
        auth.signOut()
    },

    bindUserData: firestoreAction(({ bindFirestoreRef }) => {
        // return the promise returned by `bindFirestoreRef`
        db.collection('users').where("userID", "==", LocalStorage.getItem('loggedUserID')).get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              let id = doc.id
              console.log(doc.id)
              return bindFirestoreRef('userData', db.collection('users').doc(id))
            })
        })
        .catch(error => {
            return error
        })
    }),

}

// let user = auth.currentUser

const getters = {
    userData: (state) => {
        return state.userData;
    },
}


export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}