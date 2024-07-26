import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-e5835.firebaseapp.com",
  projectId: "reactchat-e5835",
  storageBucket: "reactchat-e5835.appspot.com",
  messagingSenderId: "203804858617",
  appId: "1:203804858617:web:2ad62c874166ea1e002a28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage= getStorage()