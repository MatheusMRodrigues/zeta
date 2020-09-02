import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

firebase.initializeApp({
    apiKey: "AIzaSyAOWmVl37o8lp4CL2kaxP6kodu2TDflIwY",
    authDomain: "zeta-eb249.firebaseapp.com",
    databaseURL: "https://zeta-eb249.firebaseio.com",
    projectId: "zeta-eb249",
    storageBucket: "zeta-eb249.appspot.com",
    messagingSenderId: "318184840875",
    appId: "1:318184840875:web:fd8930ef1fcf970acbe1ee",
    measurementId: "G-TSDL6C33E5"
});

export const db = firebase.firestore()

export const auth = firebase.auth()

export const storage = firebase.storage()