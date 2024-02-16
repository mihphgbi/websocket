// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD7jCrOKH4nALIyXYSHoRb-lcHQ8Umf5Bo",
    authDomain: "web-socket-17e24.firebaseapp.com",
    projectId: "web-socket-17e24",
    storageBucket: "web-socket-17e24.appspot.com",
    messagingSenderId: "214557224911",
    appId: "1:214557224911:web:1c1f95899f7e0c4cdc2cba",
    measurementId: "G-BJRY0E9X4T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);