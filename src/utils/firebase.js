import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc, firestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAconQ9WpJD0l4QqDRzQxXkX86D-EHmVyU",
    authDomain: "whatsapp-clone-cc39b.firebaseapp.com",
    projectId: "whatsapp-clone-cc39b",
    storageBucket: "whatsapp-clone-cc39b.appspot.com",
    messagingSenderId: "640755554784",
    appId: "1:640755554784:web:347d178690d24cf3767385",
    measurementId: "G-Z8FC8S8CK8"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app); 

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async(userAuth) =>{
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);


    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot.exists());

    //check data exists
  }