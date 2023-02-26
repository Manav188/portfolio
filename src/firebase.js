// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-ucD_sdbCwKOlk7-6SARPyLhnqtMCn9Y",
  authDomain: "manav-portfolio-react.firebaseapp.com",
  projectId: "manav-portfolio-react",
  storageBucket: "manav-portfolio-react.appspot.com",
  messagingSenderId: "748458002389",
  appId: "1:748458002389:web:b332540513287c14865f5c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db =getFirestore()