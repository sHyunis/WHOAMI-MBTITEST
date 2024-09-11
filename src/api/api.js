import axios from "axios";

const api = axios.create({
  baseURL: "https://whoami-mbtitest.vercel.app",
});

export default api;
