import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
const config = {
    apiKey: "AIzaSyAnRdE5gOoVIQOrMMSrQDHDb64gOObqokw",
    authDomain: "ercomerce-shopping.firebaseapp.com",
    databaseURL: "https://ercomerce-shopping.firebaseio.com",
    projectId: "ercomerce-shopping",
    storageBucket: "ercomerce-shopping.appspot.com",
    messagingSenderId: "47687497398",
    appId: "1:47687497398:web:8eaad40f39a9e0852f9817",
    measurementId: "G-9VX66JW0H8"
};
firebase.initializeApp(config)
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({
    prompt: 'select_account'
})

export const signInWithGG = () => {
    console.log('ddd')
    return auth.signInWithPopup(provider)
}

export default firebase