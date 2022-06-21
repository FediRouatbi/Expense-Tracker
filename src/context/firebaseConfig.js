import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBK6lgLD8e91RHPinVxAEbScbd4EgtFQLo",
  authDomain: "expense-tracker-193b1.firebaseapp.com",
  projectId: "expense-tracker-193b1",
  storageBucket: "expense-tracker-193b1.appspot.com",
  messagingSenderId: "498388683305",
  appId: "1:498388683305:web:b238ea26a62d7ee4d26a38",
};
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const db = getDatabase();
