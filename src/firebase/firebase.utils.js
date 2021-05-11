import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCFqxyMlrBIvxGM-hEwajcacexN919TsUU",
    authDomain: "may-shop-db.firebaseapp.com",
    projectId: "may-shop-db",
    storageBucket: "may-shop-db.appspot.com",
    messagingSenderId: "128663054150",
    appId: "1:128663054150:web:377095955f9449a962e747"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;