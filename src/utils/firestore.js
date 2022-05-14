import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDRa9N3Aa0k3GcYnbhTIFbQTqsvJ2tgyoc",
  authDomain: "christmas-lights-787dd.firebaseapp.com",
  projectId: "christmas-lights-787dd",
  storageBucket: "christmas-lights-787dd.appspot.com",
  messagingSenderId: "496318195272",
  appId: "1:496318195272:web:7ea3febe44252715f7da7d",
  measurementId: "G-8KZYYY82RD"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export { db }