import React, { createContext, useEffect, useState } from "react";
import app from "../../Firebase/Firebase.Config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);


  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };


  // google
  const googleSignIn = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };


  // user update
  const userUpdateProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };


  // github
  const githubSingIn = (provider) => {
    return signInWithPopup(auth, provider);
  };


  // user login
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };


  // user logout
  const handleLogOut = () => {
    return signOut(auth);
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("gskjg", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);


  const authInfo = {
    user,
    createUser,
    googleSignIn,
    githubSingIn,
    logIn,
    handleLogOut,
    userUpdateProfile,
    loading,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
