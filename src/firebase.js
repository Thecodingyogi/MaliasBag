// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQTQXnU10MkL54M7QMreFOJJC6cQx587w",
  authDomain: "maliasbag-40d04.firebaseapp.com",
  projectId: "maliasbag-40d04",
  storageBucket: "maliasbag-40d04.appspot.com",
  messagingSenderId: "689864268701",
  appId: "1:689864268701:web:d3a21edafe6c7507eb6d74",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
