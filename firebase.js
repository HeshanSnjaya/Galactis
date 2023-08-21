// Import the functions you need from the SDKs you need
import * as firebase from "firebase/compat";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyDwIPjne_F-JhhFcT3dY2crptirdmjcfpg",
  authDomain: "galactis-6731f.firebaseapp.com",
  projectId: "galactis-6731f",
  storageBucket: "galactis-6731f.appspot.com",
  messagingSenderId: "626612506673",
  appId: "1:626612506673:web:e83f5facda6dfd3e3d0510",
  measurementId: "G-7J6ZHTZW6D",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
   app = firebase.initializeApp(firebaseConfig);
} else {
   app = firebase.app();
}

const db = getFirestore(app);
const auth = firebase.auth();

export { app, auth, db };
