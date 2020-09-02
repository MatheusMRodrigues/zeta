import Vue from "vue"
import moment from "moment"
import { firestoreAction } from 'vuexfire'
import { db, auth } from 'boot/firebase'
import * as firebase from 'firebase/app'
import {uid, LocalStorage} from "quasar"

const state ={

    user: {
        favorites: {
            
        }
    },
    menu:{
        breakfasts: {
            // 'BF1': {
            //     breakfastID: 'BF1',
            //     menuDate: '12/05/2020',
            //     items: {
            //         'IT1' : {
            //             itemID: 'IT1',
            //             totalRating: 2,
            //             ratingAvg: 2,
            //             userRating: {
            //                 '0001': {
            //                     rating: 4,
            //                     userID: '0001',
            //                 },
            //                 '0002': {
            //                     rating: 1,
            //                     userID: '0002',
            //                 },
            //             },
            //             dishID: "IwoCRItW5CRdR4tUAGIT",
            //         },
            //     }
            // }
            //         // 'IT2' : {
            //         //     itemID: 'IT2',
            //         //     totalRating: 3,
            //         //     userRating: {
            //         //         '0001': {
            //         //             rating: 4,
            //         //             userID: 'userId1',
            //         //         },
            //         //         '0002': {
            //         //             rating: 1,
            //         //             userID: 'userId2',
            //         //         },
            //         //     },
            //         //     dishID: 'ID2',
            //         // },
            //         // 'IT3' : {
            //         //     itemID: 'IT3',
            //         //     totalRating: 5,
            //         //     userRating: {
            //         //         '0001': {
            //         //             rating: 4,
            //         //             userID: 'userId1',
            //         //         },
            //         //         '0002': {
            //         //             rating: 1,
            //         //             userID: 'userId2',
            //         //         },
            //         //     },
            //         //     dishID: 'ID3',
            //         // },
            //     }
            // },
            // 'BF2': {
            //     breakfastID: 'BF2',
            //     menuDate: '06/05/2020',
            //     items: {
            //         'IT4' : {
            //             itemID: 'IT4',
            //             totalRating: 1,
            //             userRating: {
            //                 '0001': {
            //                     rating: 4,
            //                     userID: 'userId1',
            //                 },
            //                 '0002': {
            //                     rating: 1,
            //                     userID: 'userId2',
            //                 },
            //             },
            //             dishID: 'ID3',
            //         },
            //     }
            // }
        },
        lunchs: {
            // 'LC1': {
            //     lunchID: 'LC1',
            //     menuDate: '06/05/2020',
            //     items: {
            //         'IT5' : {
            //             itemID: 'IT5',
            //             totalRating: 2,
            //             userRating: {
            //                 'userId1': {
            //                     rating: 2,
            //                     userID: 'userId1',
            //                 },
            //                 user2: {
            //                     rating: 4,
            //                     userID: 'userId2',
            //                 },
            //             },
            //             dishID: 'ID4',
            //         },
            //         'IT6' : {
            //             itemID: 'IT6',
            //             totalRating: 2,
            //             userRating: {
            //                 'userId1': {
            //                     rating: 2,
            //                     userID: 'userId1',
            //                 },
            //                 user2: {
            //                     rating: 4,
            //                     userID: 'userId2',
            //                 },
            //             },
            //             dishID: 'ID5',
            //         },
            //         'IT7' : {
            //             itemID: 'IT7',
            //             totalRating: 2,
            //             userRating: {
            //                 'userId1': {
            //                     rating: 2,
            //                     userID: 'userId1',
            //                 },
            //                 user2: {
            //                     rating: 4,
            //                     userID: 'userId2',
            //                 },
            //             },
            //             dishID: 'ID6',
            //         },
            //     }
            // }
        },
        dinners: {
            // 'DN1': {
            //     dinnerID: 'DN1',
            //     menuDate: '06/05/2020',
            //     items: {
            //         'IT8' : {
            //             itemID: 'IT8',
            //             totalRating: 2,
            //             userRating: {
            //                 'userId1': {
            //                     rating: 2,
            //                     userID: 'userId1',
            //                 },
            //                 user2: {
            //                     rating: 4,
            //                     userID: 'userId2',
            //                 },
            //             },
            //             dishID: 'ID7',
            //         },
            //     }
            // }
        }
    },
    dishes: {
        // 'ID1' : {
        //     dishID: 'ID1',
        //     itemName: 'Café Preto',
        //     itemType: 'Bebida',
        //     itemCategory: 'Breakfast',
        //     itemImage: 'statics/cafe.jpg',
        //     itemDescription: 'Café preto com a adição de adoçantes',
        //     itemDate: '21/04/2020',
        //     itemHave: [
        //         'Água', 'Café', 'Açucar' 
        //     ],
        //     ratingAvg: 1,
        //     RatingNumber: '27',
        //     favoriteTotal: 0,
        //     favoriteIcon: 'lar la-heart'
        // },
        // 'ID2' : {
        //     dishID: 'ID2',
        //     itemName: 'Pão Francês',
        //     itemType: 'Principal',
        //     itemCategory: 'Breakfast',
        //     itemImage: 'statics/paoFrances.jpg',
        //     itemDescription: 'Pão francês com a adição de manteiga',
        //     itemDate: '21/04/2020',
        //     itemHave: [
        //         'Água', 'Leite', 'Farinha de trigo', 'Sal' 
        //     ],
        //     ratingAvg: 0,
        //     totalRating: '21',
        //     favoriteTotal: 0,
        //     favoriteIcon: 'lar la-heart'
        // },
        // 'ID3' : {
        //     dishID: 'ID3',
        //     itemName: 'Banana',
        //     itemType: 'Acompanhamento',
        //     itemCategory: 'Breakfast',
        //     itemImage: 'statics/banana.jpg',
        //     itemDescription: 'Fruta de acompanhamento',
        //     itemDate: '21/04/2020',
        //     itemHave: [
        //         'Água', 'Leite', 'Farinha de trigo', 'Sal' 
        //     ],
        //     ratingAvg: 0,
        //     totalRating: '12',
        //     favoriteTotal: 0,
        //     favoriteIcon: 'lar la-heart'
        // },
        // 'ID4' : {
        //     dishID: 'ID4',
        //     itemName: 'Feijoada',
        //     itemType: 'Principal',
        //     itemCategory: 'Lunch',
        //     itemImage: 'statics/feijoada.jpg',
        //     itemDescription: 'Fruta de acompanhamento',
        //     itemDate: '21/04/2020',
        //     itemHave: [
        //         'Água', 'Leite', 'Farinha de trigo', 'Sal' 
        //     ],
        //     ratingAvg: 0,
        //     totalRating: '12',
        //     favoriteTotal: 0,
        //     favoriteIcon: 'lar la-heart'
        // },
        // 'ID5' : {
        //     dishID: 'ID5',
        //     itemName: 'Arroz',
        //     itemType: 'Acompanhamento',
        //     itemCategory: 'Lunch',
        //     itemImage: 'statics/arroz.jpg',
        //     itemDescription: 'Fruta de acompanhamento',
        //     itemDate: '21/04/2020',
        //     itemHave: [
        //         'Água', 'Leite', 'Farinha de trigo', 'Sal' 
        //     ],
        //     ratingAvg: 0,
        //     totalRating: '12',
        //     favoriteTotal: 0,
        //     favoriteIcon: 'lar la-heart'
        // },
        // 'ID6' : {
        //     dishID: 'ID6',
        //     itemName: 'Salada',
        //     itemType: 'Acompanhamento',
        //     itemCategory: 'Lunch',
        //     itemImage: 'statics/salada.jpg',
        //     itemDescription: 'Fruta de acompanhamento',
        //     itemDate: '21/04/2020',
        //     itemHave: [
        //         'Água', 'Leite', 'Farinha de trigo', 'Sal' 
        //     ],
        //     ratingAvg: 0,
        //     totalRating: '12',
        //     favoriteTotal: 0,
        //     favoriteIcon: 'lar la-heart'
        // },
        // 'ID7' : {
        //     dishID: 'ID7',
        //     itemName: 'Macarrão',
        //     itemType: 'Principal',
        //     itemCategory: 'Dinner',
        //     itemImage: 'statics/macarrao.jpg',
        //     itemDescription: 'Fruta de acompanhamento',
        //     itemDate: '21/04/2020',
        //     itemHave: [
        //         'Água', 'Leite', 'Farinha de trigo', 'Sal' 
        //     ],
        //     ratingAvg: 0,
        //     totalRating: '12',
        //     favoriteTotal: 0,
        //     favoriteIcon: 'lar la-heart'
        // },
    }

}

/* 

    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap

    console.log("menu", state.menu)

    Object.values(state.menu.breakfasts).flatMap(e => Object.values(e.items)).flatMap(e => Object.values(e.userRating))

    Object.values(state.menu).flatMap(e => Object.values(e)).flatMap(e => Object.values(e.items))

    Object.values(temp1).flatMap(e => Object.values(e)).flatMap(e => Object.values(e.items)).flatMap(e => Object.values(e.userRating)).map(e => e.rating)
    
    
    var arrayID3 = Object.values(temp1)
        .flatMap(e => Object.values(e))
        .filter(e => e.menuDate == "03/05/2020")
        .flatMap(e => Object.values(e.items))
        // .filter(e => e.dishID == "ID3" && e.menuDate == "03/05/2020")
        .flatMap(e => Object.values(e.userRating))
        .map(e => e.rating)

    arrayID3.reduce((acc, e) => e + acc, 0) / arrayID3.length // calculou media

*/

const mutations = {

    addFavorite(state, dishID){
        // console.log(payload)
        Vue.set(state.user.favorites, uid(), {dishID: dishID})
    },

    updateFavorites(state){
        // console.log(payload)
        db.collection('users').where("userID", "==", LocalStorage.getItem('loggedUserID')).get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                let favorites = doc.data().favorites
                favorites.forEach(item => {
                    Vue.set(state.user.favorites, uid(), item)
                })
            })
        })
        .catch(error => {
            return error
        })
    },

    addRating(state, {menuSchedule, menuSchedulId, itemId}, userRatingId, rating, userID){
        // console.log(payload)
        Vue.set(state.menu[menuSchedule][menuScheduleId].items[itemId].userRating, userRatingId, 
            {
                rating: rating,
                userID: userID
            }
        )
    },
    removeFavorite(state, id){
        Vue.delete(state.user.favorites, id)
        console.log("id", id, state.user.favorites)
    },
    
}

// =============== CONVERT UTILS =================

const objToArray = obj => Object.values(obj);

const objToArrayWithKey = (obj) => Object.keys(obj).map(key => [key, obj[key]]);

// ===============================================

const actions = {

    // ================ DATABASE BINDS ==================

    bindBreakfast: firestoreAction(({ bindFirestoreRef }) => {
        // return the promise returned by `bindFirestoreRef`
        return bindFirestoreRef('menu.breakfasts', db.collection('menu').doc('breakfasts').collection('breakfast'))
    }),

    bindLunch: firestoreAction(({ bindFirestoreRef }) => {
        // return the promise returned by `bindFirestoreRef`
        return bindFirestoreRef('menu.lunchs', db.collection('menu').doc('lunchs').collection('lunch'))
    }),

    bindDinner: firestoreAction(({ bindFirestoreRef }) => {
        // return the promise returned by `bindFirestoreRef`
        return bindFirestoreRef('menu.dinners', db.collection('menu').doc('dinners').collection('dinner'))
    }),

    bindDishes: firestoreAction(({ bindFirestoreRef }) => {
        // return the promise returned by `bindFirestoreRef`
        return bindFirestoreRef('dishes', db.collection('dishes'))
    }),

    // ==================================================

    checkFavorite({ commit, state }, dishID){
        console.log('ta indo')
        let tempFavorites = objToArrayWithKey(state.user.favorites)

        let found = tempFavorites.find(e => e[1].dishID == dishID)

        const increment = firebase.firestore.FieldValue.increment(1);

        const decrement = firebase.firestore.FieldValue.increment(-1);

        if(!found)  {
            commit('addFavorite', dishID)
            db.collection('users').where("userID", "==", LocalStorage.getItem('loggedUserID')).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    console.log('aqui tbm3' + doc.id)
                    db.collection('users').doc(doc.id).update({
                        favorites: firebase.firestore.FieldValue.arrayUnion({dishID: dishID})
                    })
                    .then(response => {
                        db.collection('dishes').where("dishID", "==", dishID).get()
                        .then(querySnapshot => {
                            querySnapshot.forEach(doc => {
                                db.collection('dishes').doc(doc.id).update({
                                    favoriteTotal: increment
                                })
                                .then(response => {
                                    return response
                                })
                                .catch(error => {
                                    console.log(error)
                                    return error
                                })
                            })
                        })
                    })
                    .catch(error => {
                        console.log(error)
                        return error
                    })
                })
            })
            .catch(error => {
                return error
            })
            }
        else{
            // console.log(found[0])
            commit('removeFavorite', found[0])
            db.collection('users').where("userID", "==", LocalStorage.getItem('loggedUserID')).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    console.log('aqui tbm3' + doc.id)
                    db.collection('users').doc(doc.id).update({
                        favorites: firebase.firestore.FieldValue.arrayRemove({dishID: dishID})
                    })
                    .then(response => {
                        db.collection('dishes').where("dishID", "==", dishID).get()
                        .then(querySnapshot => {
                            querySnapshot.forEach(doc => {
                                db.collection('dishes').doc(doc.id).update({
                                    favoriteTotal: decrement
                                })
                                .then(response => {
                                    return response
                                })
                                .catch(error => {
                                    console.log(error)
                                    return error
                                })
                            })
                        })
                    })
                    .catch(error => {
                        console.log(error)
                        return error
                    })
                })
            })
            .catch(error => {
                return error
            })
        }
    },

    updateFavorites ({ commit, state }) {
        let executed = false
        if(!executed){
            executed = true
            commit('updateFavorites')
        }
        else{
            console.log("Tá sussa")
        }
    }
}

// ================ DATE UTILS ====================

let today = moment().format('DD/MM/YYYY');
// console.log(today);

let tomorrow = moment().add(1, 'days').format('DD/MM/YYYY');
// console.log(tomorrow);

// =================================================

// ================ GETTERS UTILS ==================

const userFavorites = (state) => {
    // return Object.values(state.user.favorites);
    return objToArray(state.user.favorites);
}

const userFavoritesIDs = (state) => {
    return objToArray(state.user.favorites).map(e => e.dishID);
}

const breakfast = (state) => {
    return state.menu.breakfasts
}
const breakfastToday = (state) => {
    return Object.values(state.menu.breakfasts || {}).filter(i => i.menuDate == today);
}
const breakfastTomorrow = (state) => {
    return Object.values(state.menu.breakfasts || {}).filter(i => i.menuDate == tomorrow);
}
const lunch = (state) => {
    return state.menu.lunchs
}
const lunchToday = (state) => {
    return Object.values(state.menu.lunchs || {}).filter(i => i.menuDate == today);
}
const lunchTomorrow = (state) => {
    return Object.values(state.menu.lunchs || {}).filter(i => i.menuDate == tomorrow);
}
const dinner = (state) => {
    return state.menu.dinners
}
const dinnerToday = (state) => {
    return Object.values(state.menu.dinners || {}).filter(i => i.menuDate == today);
}
const dinnerTomorrow = (state) => {
    return Object.values(state.menu.dinners || {}).filter(i => i.menuDate == tomorrow);
}
const favorites = (state) => {
    return Object.values(state.items || {}).filter(i => i.itemCategory == "Dinner" && i.itemDate == tomorrow);
}

const dishFinder = (state) => (id) => {
    return Object.values(state.dishes || {}).find(d => d.dishID == id)
}
const userRating = (state) => (menuSchedule, menuScheduleId, itemId, userRatingId) => {
    state.menu[menuSchedule][menuScheduleId].items[itemId].userRating[userRatingId] // ===  { rating: 4, userID: 'userId1'}
}

const userRatingBreakfast = (state) => (breakfastId, itemId, userRatingId) => {
    userRating(state)("breakfast", breakfastId, itemId, userRatingId)
}
const userRatingLunch = (state) => (lunchId, itemId, userRatingId) => {
    userRating(state)("lunch", lunchId, itemId, userRatingId)
}
const userRatingDinner = (state) => (dinnerId, itemId, userRatingId) => {
    userRating(state)("dinner", dinnerId, itemId, userRatingId)
}

// ================================================

const getters = {
    dishes: (state) => {
        return state.dishes;
    },
    userRating : userRating,
    dishFinder : dishFinder,
    userRatingBreakfast : userRatingBreakfast,
    userRatingLunch : userRatingLunch,
    userRatingDinner : userRatingDinner,
    breakfast : breakfast,
    breakfastToday : breakfastToday,
    breakfastTomorrow : breakfastTomorrow,
    lunch : lunch,
    lunchToday : lunchToday,
    lunchTomorrow :lunchTomorrow,
    dinner : dinner,
    dinnerToday : dinnerToday,
    dinnerTomorrow : dinnerTomorrow,
    userFavorites : userFavorites,
    userFavoritesIDs : userFavoritesIDs
}


export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}