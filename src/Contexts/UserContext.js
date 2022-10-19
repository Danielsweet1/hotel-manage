import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

const GoogleProvider = new GoogleAuthProvider()

export const AuthContext = createContext();

const UserContext = ({ children }) => {

    const [user, setUser] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };


  const googleSignup  = () => {
    return signInWithPopup(auth, GoogleProvider)
  }

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }


  useEffect( ()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
       console.log(user)
       setUser(user)
       setLoading(false)
      });
      return () => unsubscribe()
  },[])

  const authInfo = { createUser, signIn, error, setError, user, logOut, loading, googleSignup };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
