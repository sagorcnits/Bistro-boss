import { useNavigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({children}) => {
  const { user, loading } = useAuth();
  const [admin, isPending] = useAdmin();
  const navigate = useNavigate();
  if (loading || isPending) {
    return (
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    );
  }

  if (user && admin) {
    return children;
  }

  return navigate("/login");
};

export default AdminRoute;
