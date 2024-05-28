import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase_config";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user,setUser] = useState([])
    const [loaded,setReloaded] = useState(false)
    const [loading,setLoading] = useState(true)
   
// create user for user
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
//   login user 
const loginUser = (email,password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

// logout user 
const logOut = () => {
  signOut(auth).then(res => {
    const user = res.user;
  }).catch(error => {
    console.log(error)
  })
}

  useEffect(()=>{
    const currentAuth = onAuthStateChanged(auth,(user) =>{
        setUser(user)
        setLoading(false)
    })
    return () => {
        currentAuth()
    }
  },[loaded])

  const userInfo = { createUser, user, setReloaded, loaded, loading, setLoading, loginUser, logOut};
  return <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
