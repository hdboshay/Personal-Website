// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCY9tSnSwBxgBLOUvGwfP4GEBFp4HZMpq8",
    authDomain: "personal-website-849f9.firebaseapp.com",
    projectId: "personal-website-849f9",
    storageBucket: "personal-website-849f9.appspot.com",
    messagingSenderId: "261316137273",
    appId: "1:261316137273:web:81384d01ca54f906ce98e8",
    measurementId: "G-HM63YHX801"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);