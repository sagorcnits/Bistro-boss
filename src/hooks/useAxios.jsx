import axios from "axios";

export const axiosGov = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxios = () => {
  return axiosGov;
};

export default useAxios;
