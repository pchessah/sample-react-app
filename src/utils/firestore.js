import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAjtKftLn-E_Wk-jeYzZD22IgmhqQ1blTQ",
  authDomain: "christmas-lights-ecca5.firebaseapp.com",
  projectId: "christmas-lights-ecca5",
  storageBucket: "christmas-lights-ecca5.appspot.com",
  messagingSenderId: "69733375674",
  appId: "1:69733375674:web:a3cf16a393bb0d55782c83",
  measurementId: "G-X26NF3PXWF"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export { db }