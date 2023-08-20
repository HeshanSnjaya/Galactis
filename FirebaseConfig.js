import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
