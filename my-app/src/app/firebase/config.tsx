
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC5fbz6ZcMm4NxVcpbscdjP4SHfFjKlKSg",
    authDomain: "centering-star-405502.firebaseapp.com",
    projectId: "centering-star-405502",
    storageBucket: "centering-star-405502.appspot.com",
    messagingSenderId: "157740077766",
    appId: "1:157740077766:web:af53267aa26dcabba7fdc7",
    measurementId: "G-4KB6B4SMM1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export {auth};
