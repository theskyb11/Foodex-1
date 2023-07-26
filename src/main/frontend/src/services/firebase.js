// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBKH55yGoDZgPiD6oIY13o-0V6mCBtscH0",
    authDomain: "foodex-393509.firebaseapp.com",
    projectId: "foodex-393509",
    storageBucket: "foodex-393509.appspot.com",
    messagingSenderId: "741669699068",
    appId: "1:741669699068:web:56aa25a6e5654844c70679",
    measurementId: "G-F7YNPLHBRH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
