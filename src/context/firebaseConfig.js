import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: "https://expense-tracker-193b1-default-rtdb.firebaseio.com",
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE,
  messagingSenderId: process.env.REACT_APP_MESSAGING,
  appId: process.env.REACT_APP_APP_ID,
};
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const db = getDatabase();
