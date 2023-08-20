// Import the functions you need from the SDKs you need
import * as firebase from "firebase/compat";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyAroy0dbFiywmSJQxFb0B92NfFS_2O13YQ",
   authDomain: "fir-auth-cb31d.firebaseapp.com",
   projectId: "fir-auth-cb31d",
   storageBucket: "fir-auth-cb31d.appspot.com",
   messagingSenderId: "394417958161",
   appId: "1:394417958161:web:81804693cd16ea45bcf0b0",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
   app = firebase.initializeApp(firebaseConfig);
} else {
   app = firebase.app();
}

const auth = firebase.auth();

export { auth };
