import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useCart = () => {
  const axiosBase = useAxiosPublic();
  const {user} = useAuth()
  const { data: cart = [], refetch } = useQuery({
    queryKey: ["cartData"],
    queryFn: async () => {
        const res = await axiosBase.get(`/userItem?email=${user.email}`);
        return res.data;
    }
  });

  return [cart, refetch];
};

export default useCart;
