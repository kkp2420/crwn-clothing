import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAQlXzZKLkJEZLh-FFqQLyAnxRgYhOw-KA",
    authDomain: "crwn-db-13b9a.firebaseapp.com",
    databaseURL: "https://crwn-db-13b9a.firebaseio.com",
    projectId: "crwn-db-13b9a",
    storageBucket: "crwn-db-13b9a.appspot.com",
    messagingSenderId: "316168317603",
    appId: "1:316168317603:web:d2314803190c51733cad16"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;