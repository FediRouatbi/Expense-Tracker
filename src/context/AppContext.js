import React, { useState, useEffect } from "react";
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
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
  deleteUser,
  updateEmail,
  updatePassword,
} from "firebase/auth";
const Context = createContext();
export const GetData = () => useContext(Context);

const AppContext = ({ children }) => {
  const auth = getAuth();
  const [allExpense, setAllExpense] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const collectionRef = collection(database, "users");
  useEffect(() => {
    onAuthStateChanged(auth, (user) => setCurrentUser(user));
  }, []);

  const addExpense = (data) => {
    setAllExpense((prev) => [...prev, data]);
  };
  const deleteExpense = (id) => {
    setAllExpense((prev) => prev.filter((elm) => elm.id != id));
  };
  const updateE = (email) => {
    return updateEmail(currentUser, email);
  };
  const updateP = (password) => {
    return updatePassword(currentUser, password);
  };
  const putUserName = (name) => {
    return updateProfile(auth.currentUser, { displayName: name });
  };
  const signUpGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const handelSubmit = (type, email, password) => {
    if (type === "signup")
      return createUserWithEmailAndPassword(auth, email, password);
    if (type === "signin")
      return signInWithEmailAndPassword(auth, email, password);
  };
  const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const deletAccount = () => {
    return deleteUser(auth.currentUser);
  };

  const signOutUser = () => {
    signOut(auth);
  };

  return (
    <Context.Provider
      value={{
        handelSubmit,
        signUpGoogle,
        setCurrentUser,
        signOutUser,
        currentUser,
        putUserName,
        addExpense,
        allExpense,
        deleteExpense,
        forgetPassword,
        deletAccount,
        updateE,
        updateP,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
