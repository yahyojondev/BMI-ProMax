import axios from "axios";

const mainURl = axios.create({
  baseURL: "https://dummyjson.com/",
});

mainURl.interceptors.request.use((req) => {
  let token = localStorage.getItem("token");
  if (token) {
    req.headers.authorization = `Bearer ${token}`;
  }
  return req;
});

export default mainURl;
