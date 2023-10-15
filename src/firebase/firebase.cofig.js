// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZDHF-MUFvQIcACBdaAAC73aFqCJ4NHkk",
    authDomain: "coffee-store-7ffe3.firebaseapp.com",
    projectId: "coffee-store-7ffe3",
    storageBucket: "coffee-store-7ffe3.appspot.com",
    messagingSenderId: "541274513215",
    appId: "1:541274513215:web:ab87f260fea2f35afd3d8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app