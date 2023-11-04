// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ff3a4.firebaseapp.com",
  projectId: "mern-estate-ff3a4",
  storageBucket: "mern-estate-ff3a4.appspot.com",
  messagingSenderId: "743778072117",
  appId: "1:743778072117:web:8a1160e6f3480b00ff237c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);