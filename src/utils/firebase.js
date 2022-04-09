import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
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

  export const createUserDocumentFromAuth = async(userAuth, additionalInfo = {}) =>{
    if(!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);


    const userSnapshot = await getDoc(userDocRef);

    //check data exists
    if(!userSnapshot.exists()) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName, 
          email,
          createdAt,
          ...additionalInfo
        })
      } catch (error) {
        console.log('error creating user document');
      }
    }

    return userDocRef
  }

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
  }