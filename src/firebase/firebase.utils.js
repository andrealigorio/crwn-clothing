import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAOTt5v8NSjS6iwo4WMlTkWo-WrSpxGDSs",
    authDomain: "crwn-clothing-c8b8d.firebaseapp.com",
    projectId: "crwn-clothing-c8b8d",
    storageBucket: "crwn-clothing-c8b8d.appspot.com",
    messagingSenderId: "1026454602221",
    appId: "1:1026454602221:web:ebc94076fc42b4b849e7e4",
    measurementId: "G-WM0PECBKZ8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;