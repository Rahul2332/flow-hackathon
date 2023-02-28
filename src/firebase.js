// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfXNr1J6ia3XiRahSRZzOEhkKzQ8Miys8",
  authDomain: "flow-hackathon-4423c.firebaseapp.com",
  projectId: "flow-hackathon-4423c",
  storageBucket: "flow-hackathon-4423c.appspot.com",
  messagingSenderId: "287065423497",
  appId: "1:287065423497:web:9e1d969995965d03d8d058",
  measurementId: "G-9NEFMWV4J5",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

