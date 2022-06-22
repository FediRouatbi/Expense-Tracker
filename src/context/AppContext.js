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
  const auth = getAuth();
  const [allExpense, setAllExpense] = useState([]);
  const [currentUser, setCurrentUser] = useState(false);
  const googleProvider = new GoogleAuthProvider();
  const setData = () => {
    const data = window.localStorage.getItem("user");
    const exspense = window.localStorage.getItem("expense");
    setAllExpense(JSON.parse(exspense));
    setCurrentUser(JSON.parse(data));
  };
  useEffect(() => {
    setData();
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      readExpenses(user);
    });
  }, []);
  useEffect(() => {
    window.localStorage.setItem("user", JSON.stringify(currentUser));
    window.localStorage.setItem("expense", JSON.stringify(allExpense));
  }, [currentUser, allExpense]);

  console.log(allExpense);
  console.log(currentUser);
  const readExpenses = (user) => {
    const starCountRef = ref(db, `users/${user?.uid}`);
    console.log(starCountRef);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data) setAllExpense(data);
      else setAllExpense([]);
    });
  };

  const whriteExpenses = () => {
    set(ref(db, `users/${currentUser.uid}`), {
      ...allExpense,
    });
  };
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
        whriteExpenses,
        readExpenses,
        currentUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
