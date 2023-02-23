import firebase from 'firebase/app';


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCgWCsFnoZ55qxcmyp4LRsYBI8g46m8MpE",
    authDomain: "appecomerce-7784c.firebaseapp.com",
    projectId: "appecomerce-7784c",
    storageBucket: "appecomerce-7784c.appspot.com",
    messagingSenderId: "389753032236",
    appId: "1:389753032236:web:cbe691d34730f4cce74b89"
};


//if (!firebase.apps.length) {
const app = initializeApp(firebaseConfig);
//}

export const auth = getAuth(app);
export const firestore = getFirestore(app);


export default firebase;