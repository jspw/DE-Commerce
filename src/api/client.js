import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default axiosClient;
