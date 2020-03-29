import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const fbConfig = {
    apiKey: "AIzaSyBOKqNyZcabM5mOGdOmTV2XIAdyD-7jznw",
    authDomain: "software-project-develop-80f03.firebaseapp.com",
    databaseURL: "https://software-project-develop-80f03.firebaseio.com",
    projectId: "software-project-develop-80f03",
    storageBucket: "software-project-develop-80f03.appspot.com",
    messagingSenderId: "843244331323",
    appId: "1:843244331323:web:ccfb9b78402142d9cc171e",
    measurementId: "G-1JV49V4RVH"
};

// initialize firebase
firebase.initializeApp(fbConfig);

// initialize auth
export const auth = firebase.auth();

// initialize firestore

// Google sign-in functionality
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => {
   auth.signInWithPopup(provider)
}


// storing user to firebase
export const createUserProfileDocument = (async(userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = userRef.get();

    if (!(await snapShot).exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error created',error)
        }
    }
    return userRef;
})

export default firebase;