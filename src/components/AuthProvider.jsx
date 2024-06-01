import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase_config";
import useAxios from "../hooks/useAxios";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const axiosGov = useAxios();
  // create user for user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   login user
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout user
  const logOut = () => {
    signOut(auth)
      .then((res) => {
        const user = res.user;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const currentAuth = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        const email = { email: user.email };
        axiosGov.post("/jwt", email).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
          }
        });
      } else {
        localStorage.removeItem("access-token");
      }
      setLoading(false);
    });
    return () => {
      currentAuth();
    };
  }, [loaded]);

  const userInfo = {
    createUser,
    user,
    setLoaded,
    loaded,
    loading,
    setLoading,
    loginUser,
    logOut,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
