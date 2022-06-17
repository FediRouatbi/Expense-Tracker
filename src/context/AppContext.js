import React, { useState } from "react";
import { useContext, createContext } from "react";
import { app, database } from "./firebaseConfig.js";
import { collection, addDoc } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
const Context = createContext();

export const GetData = () => useContext(Context);

const AppContext = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();
  const collectionRef = collection(database, "users");
  const signUpGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const handelSubmit = (type, email, password) => {
    if (type === "signup")
      return createUserWithEmailAndPassword(auth, email, password);
    if (type === "signin")
      return signInWithEmailAndPassword(auth, email, password);
  };
  console.log(currentUser);
  return (
    <Context.Provider value={{ handelSubmit, signUpGoogle, currentUser }}>
      {children}
    </Context.Provider>
  );
};

export default AppContext;
