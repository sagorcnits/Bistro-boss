import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider";

const useAuth = () => {
  const userAuth = useContext(AuthContext);
  return userAuth;
};

export default useAuth;
