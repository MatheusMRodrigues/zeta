const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyB-f48CfOu4tjrSi2nXwVUzSSUhxYFgsO8",
    authDomain: "zeta-3dc4f.firebaseapp.com",
    databaseURL: "https://zeta-3dc4f.firebaseio.com",
    projectId: "zeta-3dc4f",
    storageBucket: "zeta-3dc4f.appspot.com",
    messagingSenderId: "936877882314",
    appId: "1:936877882314:web:a38e5b22e039cec5ddad33",
    measurementId: "G-1PZW0THXFP"
  });
  
var db = firebase.firestore();

var dishes =[
    {
        lunchID: 'LC1',
        menuDate: '12/05/2020',
        items: {
            'it7' : {
                itemID: 'it7',
                totalRating: 2,
                userRating: {
                    '0001': {
                        rating: 2,
                    },
                    '0002': {
                        rating: 4,
                    },
                },
                dishID: 'tzdAqNjEcHHKv3lkuRsW'
            },
        }
    },
]

dishes.forEach(function(obj) {
    db.collection("menu").doc("dinners").collection("dinner").add({
        
    }).then(function(docRef) {
        db.collection("menu").doc("dinners").collection("dinner").doc(docRef.id).set({
            dinnerID: docRef.id,
            menuDate: obj.menuDate,
            // itemType: obj.itemType,
            items: obj.items,
            // itemDescription: obj.itemDescription,
            // itemDate: obj.itemDate,
            // itemHave: obj.itemHave,
            // ratingAvg: obj.ratingAvg,
            // totalRating: obj.totalRating,
            // favoriteTotal: obj.favoriteTotal,
            // favoriteIcon: obj.favoriteIcon
        })
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});