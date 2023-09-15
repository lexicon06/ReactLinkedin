// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGkmI-FX9xXLuji-nU0NPqQHk279QDj4I",
  authDomain: "linkedin-clone-fox.firebaseapp.com",
  projectId: "linkedin-clone-fox",
  storageBucket: "linkedin-clone-fox.appspot.com",
  messagingSenderId: "179606657066",
  appId: "1:179606657066:web:11c17c70744331e00d4b53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth};