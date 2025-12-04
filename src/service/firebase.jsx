// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGNAYGl8lcmoxgOy9D0YfFpaweyHv4bHI",
  authDomain: "coder-nueva-tienda.firebaseapp.com",
  projectId: "coder-nueva-tienda",
  storageBucket: "coder-nueva-tienda.firebasestorage.app",
  messagingSenderId: "523631676872",
  appId: "1:523631676872:web:4284c6739f8ac9b48404fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Exportar esa instancia de firestore
export const db = getFirestore(app)