import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect } from "react";
import { auth } from "../firebase_config";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(()=>{
    const currentAuth = onAuthStateChanged(auth,(user) =>{
        console.log(user)
    })
    return () => {
        currentAuth()
    }
  },[])

  const user = { createUser };
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
