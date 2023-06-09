import axios from "axios";
import { getToken } from "./accessToken";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
  withCredentials: true,
});
