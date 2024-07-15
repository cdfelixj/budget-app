// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAWv6NU8ijzNTFanL_emNHEx4Pnidx2fZA",
    authDomain: "budget-app-d5646.firebaseapp.com",
    projectId: "budget-app-d5646",
    storageBucket: "budget-app-d5646.appspot.com",
    messagingSenderId: "541484180051",
    appId: "1:541484180051:web:245db2d55811a78bdb5ca6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export {app, db};