import React, { useState, useEffect } from "react";
import { useContext, createContext } from "react";
import { db } from "./firebaseConfig.js";
import { ref, set, onValue } from "firebase/database";
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
  let user = "";
  const auth = getAuth();
  if (localStorage.getItem("user") === "null") user = "";
  else user = true;
  const [currentUser, setCurrentUser] = useState(user);
  const [allExpense, setAllExpense] = useState([]);
  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      readExpenses(user);
    });
  }, []);
  useEffect(() => {
    window.localStorage.setItem("user", JSON.stringify(currentUser));
    window.localStorage.setItem("expense", JSON.stringify(allExpense));
  }, [currentUser, allExpense]);

  const readExpenses = (user) => {
    const starCountRef = ref(db, `users/${user?.uid}`);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setAllExpense(data);
      } else setAllExpense([]);
    });
  };

  const writeExpenses = (Expenses) => {
    set(ref(db, `users/${currentUser.uid}`), {
      ...Expenses,
    });
  };
  const addExpense = (data) => {
    setAllExpense((prev) => {
      const newExpenses = [data, ...prev];
      writeExpenses(newExpenses);
      return newExpenses;
    });
  };
  const deleteExpense = (id) => {
    setAllExpense((prev) => {
      const newExpenses = prev.filter((elm) => elm.id !== id);
      writeExpenses(newExpenses);
      return newExpenses;
    });
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
  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const deleteAccount = () => {
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
        forgotPassword,
        deleteAccount,
        updateE,
        updateP,
        writeExpenses,
        readExpenses,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
