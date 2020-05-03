import moment from "moment"

const state ={
    user: {
        userId: '0001',
        favorites: {
            favorite1:{
                dihseID: 'ID1'
            },
            favorite2:{
                dihseID: 'ID2'
            }
        }
    },
    menu:{
        breakfasts: {
            'BF1': {
                breakfastID: 'BF1',
                menuDate: '02/05/2020',
                items: {
                    'IT1' : {
                        totalRating: 2,
                        userRating: {
                            '0001': {
                                rating: 4,
                                userID: 'userId1',
                            },
                            '0002': {
                                rating: 1,
                                userID: 'userId2',
                            },
                        },
                        dishID: 'ID1',
                    },
                    'IT2' : {
                        totalRating: 2,
                        userRating: {
                            '0001': {
                                rating: 4,
                                userID: 'userId1',
                            },
                            '0002': {
                                rating: 1,
                                userID: 'userId2',
                            },
                        },
                        dishID: 'ID2',
                    },
                    'IT3' : {
                        totalRating: 2,
                        userRating: {
                            '0001': {
                                rating: 4,
                                userID: 'userId1',
                            },
                            '0002': {
                                rating: 1,
                                userID: 'userId2',
                            },
                        },
                        dishID: 'ID3',
                    },
                }
            },
            'BF2': {
                breakfastID: 'BF2',
                menuDate: '03/05/2020',
                items: {
                    'IT4' : {
                        totalRating: 2,
                        userRating: {
                            '0001': {
                                rating: 4,
                                userID: 'userId1',
                            },
                            '0002': {
                                rating: 1,
                                userID: 'userId2',
                            },
                        },
                        dishID: 'ID3',
                    },
                }
            }
        },
        lunchs: {
            'LC1': {
                lunchID: 'LC1',
                menuDate: '02/05/2020',
                items: {
                    'IT5' : {
                        totalRating: 2,
                        userRating: {
                            'userId1': {
                                rating: 2,
                                userID: 'userId1',
                            },
                            user2: {
                                rating: 4,
                                userID: 'userId2',
                            },
                        },
                        dishID: 'ID4',
                    },
                    'IT6' : {
                        totalRating: 2,
                        userRating: {
                            'userId1': {
                                rating: 2,
                                userID: 'userId1',
                            },
                            user2: {
                                rating: 4,
                                userID: 'userId2',
                            },
                        },
                        dishID: 'ID5',
                    },
                    'IT7' : {
                        totalRating: 2,
                        userRating: {
                            'userId1': {
                                rating: 2,
                                userID: 'userId1',
                            },
                            user2: {
                                rating: 4,
                                userID: 'userId2',
                            },
                        },
                        dishID: 'ID6',
                    },
                }
            }
        },
        dinners: {
            'DN1': {
                dinnerID: 'DN1',
                menuDate: '02/05/2020',
                items: {
                    'IT8' : {
                        totalRating: 2,
                        userRating: {
                            'userId1': {
                                rating: 2,
                                userID: 'userId1',
                            },
                            user2: {
                                rating: 4,
                                userID: 'userId2',
                            },
                        },
                        dishID: 'ID7',
                    },
                }
            }
        }
    },
    dishes: {
        'ID1' : {
            dishID: 'ID1',
            itemName: 'Café Preto',
            itemType: 'Bebida',
            itemCategory: 'Breakfast',
            itemImage: 'statics/cafe.jpg',
            itemDescription: 'Café preto com a adição de adoçantes',
            itemDate: '21/04/2020',
            itemHave: [
                'Água', 'Café', 'Açucar' 
            ],
            ratingAvg: 1,
            RatingNumber: '27',
            favoriteTotal: 0,
            favoriteIcon: 'lar la-heart'
        },
        'ID2' : {
            dishID: 'ID2',
            itemName: 'Pão Francês',
            itemType: 'Principal',
            itemCategory: 'Breakfast',
            itemImage: 'statics/paoFrances.jpg',
            itemDescription: 'Pão francês com a adição de manteiga',
            itemDate: '21/04/2020',
            itemHave: [
                'Água', 'Leite', 'Farinha de trigo', 'Sal' 
            ],
            ratingAvg: 0,
            totalRating: '21',
            favoriteTotal: 0,
            favoriteIcon: 'lar la-heart'
        },
        'ID3' : {
            dishID: 'ID3',
            itemName: 'Banana',
            itemType: 'Acompanhamento',
            itemCategory: 'Breakfast',
            itemImage: 'statics/banana.jpg',
            itemDescription: 'Fruta de acompanhamento',
            itemDate: '21/04/2020',
            itemHave: [
                'Água', 'Leite', 'Farinha de trigo', 'Sal' 
            ],
            ratingAvg: 0,
            totalRating: '12',
            favoriteTotal: 0,
            favoriteIcon: 'lar la-heart'
        },
        'ID4' : {
            dishID: 'ID4',
            itemName: 'Feijoada',
            itemType: 'Principal',
            itemCategory: 'Lunch',
            itemImage: 'statics/feijoada.jpg',
            itemDescription: 'Fruta de acompanhamento',
            itemDate: '21/04/2020',
            itemHave: [
                'Água', 'Leite', 'Farinha de trigo', 'Sal' 
            ],
            ratingAvg: 0,
            totalRating: '12',
            favoriteTotal: 0,
            favoriteIcon: 'lar la-heart'
        },
        'ID5' : {
            dishID: 'ID5',
            itemName: 'Arroz',
            itemType: 'Acompanhamento',
            itemCategory: 'Lunch',
            itemImage: 'statics/arroz.jpg',
            itemDescription: 'Fruta de acompanhamento',
            itemDate: '21/04/2020',
            itemHave: [
                'Água', 'Leite', 'Farinha de trigo', 'Sal' 
            ],
            ratingAvg: 0,
            totalRating: '12',
            favoriteTotal: 0,
            favoriteIcon: 'lar la-heart'
        },
        'ID6' : {
            dishID: 'ID6',
            itemName: 'Salada',
            itemType: 'Acompanhamento',
            itemCategory: 'Lunch',
            itemImage: 'statics/salada.jpg',
            itemDescription: 'Fruta de acompanhamento',
            itemDate: '21/04/2020',
            itemHave: [
                'Água', 'Leite', 'Farinha de trigo', 'Sal' 
            ],
            ratingAvg: 0,
            totalRating: '12',
            favoriteTotal: 0,
            favoriteIcon: 'lar la-heart'
        },
        'ID7' : {
            dishID: 'ID7',
            itemName: 'Macarrão',
            itemType: 'Principal',
            itemCategory: 'Dinner',
            itemImage: 'statics/macarrao.jpg',
            itemDescription: 'Fruta de acompanhamento',
            itemDate: '21/04/2020',
            itemHave: [
                'Água', 'Leite', 'Farinha de trigo', 'Sal' 
            ],
            ratingAvg: 0,
            totalRating: '12',
            favoriteTotal: 0,
            favoriteIcon: 'lar la-heart'
        },
        'ID8' : {
            dishID: 'ID9',
            itemName: 'Macarrão Amanhã',
            itemType: 'Principal',
            itemCategory: 'Breakfast',
            itemImage: 'statics/macarrao.jpg',
            itemDescription: 'Fruta de acompanhamento',
            itemDate: '22/04/2020',
            itemHave: [
                'Água', 'Leite', 'Farinha de trigo', 'Sal' 
            ],
            ratingAvg: 0,
            totalRating: '12',
            favoriteTotal: 0,
            favoriteIcon: 'lar la-heart'
        },
        'ID9' : {
            dishID: 'ID9',
            itemName: 'Macarrão Amanhã',
            itemType: 'Principal',
            itemCategory: 'Lunch',
            itemImage: 'statics/macarrao.jpg',
            itemDescription: 'Fruta de acompanhamento',
            itemDate: '22/04/2020',
            itemHave: [
                'Água', 'Leite', 'Farinha de trigo', 'Sal' 
            ],
            ratingAvg: 0,
            totalRating: '12',
            favoriteTotal: 0,
            favoriteIcon: 'lar la-heart'
        },
        'ID10' : {
            dishID: 'ID9',
            itemName: 'Macarrão Amanhã',
            itemType: 'Principal',
            itemCategory: 'Dinner',
            itemImage: 'statics/macarrao.jpg',
            itemDescription: 'Fruta de acompanhamento',
            itemDate: '22/04/2020',
            itemHave: [
                'Água', 'Leite', 'Farinha de trigo', 'Sal' 
            ],
            ratingAvg: 0,
            totalRating: '12',
            favoriteTotal: 0,
            favoriteIcon: 'lar la-heart'
        }
    }

}

const mutations = {
    makeFavorite (state, id) {
        console.log("aqui", id)
        state.items[id].favorite = !state.items[id].favorite;
        if (state.items[id].favorite == true) {
          state.items[id].favoriteIcon = 'las la-heart'
        }
        else{
          state.items[id].favoriteIcon = 'lar la-heart'
        }
    },
    details (state, id) {
        console.log('ID:', id)
    },
    ratingUpdate (state, payload) {
        console.log(payload)
        state.items[payload.id].rating = payload.rate;
    }
}

const actions = {
    makeFavorite ({ commit }, id) {
        commit('makeFavorite', id)
    },
    details ({ commit }, id) {
        commit('details', id)
    },
    ratingUpdate ({commit}, payload){
        commit('ratingUpdate', payload)
    }
}

let today = moment().format('DD/MM/YYYY');
console.log(today);

let tomorrow = moment().add(1, 'days').format('DD/MM/YYYY');
console.log(tomorrow);

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

const getters = {
    dishes: (state) => {
        return state.dishes;
    },
    dishFinder : dishFinder,
    breakfast : breakfast,
    breakfastToday : breakfastToday,
    breakfastTomorrow :breakfastTomorrow,
    lunch : lunch,
    lunchToday : lunchToday,
    lunchTomorrow :lunchTomorrow,
    dinner : dinner,
    dinnerToday : dinnerToday,
    dinnerTomorrow :dinnerTomorrow,
}


export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}