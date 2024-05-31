import axios from "axios";

export const axiosPublice = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosPublic = () => {
    
    return axiosPublice;
};

export default useAxiosPublic;
