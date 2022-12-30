import axios from 'axios';

console.log(process.env.REACT_APP_BACKEND_URL);
const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}`
});
axiosInstance.interceptors.request.use((req) => {
  let token;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }
  req.headers.authorization = `Bearer ${token}`;
  req.headers = {
    ...req.headers,
    "Content-Type": "application/json"
  };

  return req;
});
export default axiosInstance;
