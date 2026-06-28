// src/firebase.js
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  updateProfile 
} from "firebase/auth";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyA0DMxYHvNZDoMgvZcg6ntPNrQ6xdINqus",
  authDomain: "stratcom-46057.firebaseapp.com",
  projectId: "stratcom-46057",
  storageBucket: "stratcom-46057.firebasestorage.app",
  messagingSenderId: "624891028169",
  appId: "1:624891028169:web:ea6388d213d1ce5852e318",
  measurementId: "G-QVHV6PNM5L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Export instances and methods for your components to use
export { 
  auth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  updateProfile 
};