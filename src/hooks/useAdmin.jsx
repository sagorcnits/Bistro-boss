import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useAdmin = () => {
  const axiosBase = useAxiosPublic();
  const { user } = useAuth();
  const { data: admin = [], isPending:adminLoading } = useQuery({
    queryKey: ["admin",user?.email],
    queryFn: async () => {
        const res = await axiosBase.get(`/users/${user?.email}`);
        return res.data?.admin;
    }
  });


  return [admin,adminLoading]
};

export default useAdmin;
