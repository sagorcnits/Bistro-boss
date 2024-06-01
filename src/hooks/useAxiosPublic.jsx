import axios from "axios";

export const axiosPublice = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosPublic = () => {
  axiosPublice.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      console.log(error);
      return Promise.reject(error);
    }
  );

  return axiosPublice;
};

export default useAxiosPublic;
