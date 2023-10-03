import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNaGFcCKG-8MUEF5yiZxF5A3R64tiwn6E",
  authDomain: "chat-6e18c.firebaseapp.com",
  projectId: "chat-6e18c",
  storageBucket: "chat-6e18c.appspot.com",
  messagingSenderId: "16342048155",
  appId: "1:16342048155:web:b7e06c7505ac903b93d53e",
  measurementId: "G-H8Q2FN0DZ9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
