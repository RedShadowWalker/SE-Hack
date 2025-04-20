// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtbNJag-sELKQ02I2y8Q8WBTjtiEHSOtk",
  authDomain: "se-hack-22f7e.firebaseapp.com",
  databaseURL: "https://se-hack-22f7e-default-rtdb.firebasedatabase.app",
  projectId: "se-hack-22f7e",
  storageBucket: "se-hack-22f7e.firebasestorage.app",
  messagingSenderId: "995787559993",
  appId: "1:995787559993:web:8c55e8f928294d4bc969e8",
  measurementId: "G-LPCBX8SJ0T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;