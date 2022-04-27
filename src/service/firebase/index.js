import {getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6A7wrds1FON7PqjihZxYQI--jVIoCr0Q",
  authDomain: "ecommersegame.firebaseapp.com",
  projectId: "ecommersegame",
  storageBucket: "ecommersegame.appspot.com",
  messagingSenderId: "732729261565",
  appId: "1:732729261565:web:4f8390b2f5b17266d0ed94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)