const firebaseConfig = {
  apiKey: "AIzaSyA0DMxYHvNZDoMgvZcg6ntPNrQ6xdINqus",
  authDomain: "stratcom-46057.firebaseapp.com",
  projectId: "stratcom-46057",
  storageBucket: "stratcom-46057.firebasestorage.app",
  messagingSenderId: "624891028169",
  appId: "1:624891028169:web:ea6388d213d1ce5852e318",
  measurementId: "G-QVHV6PNM5L"
};
// initialize Firebase
const firebase = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile };