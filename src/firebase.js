// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN445a29jYywiv2Mn2onBAjg81wddw94U",
  authDomain: "todo-app-16813.firebaseapp.com",
  projectId: "todo-app-16813",
  storageBucket: "todo-app-16813.appspot.com",
  messagingSenderId: "582594085164",
  appId: "1:582594085164:web:12ee9067311cd4176dec89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);