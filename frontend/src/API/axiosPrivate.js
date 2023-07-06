import axios from "axios";
import jwt_decode from "jwt-decode";

const axiosPrivate = axios.create({
  method: "get",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosPrivate.interceptors.request.use(
  async (request) => {
    const tokenLocal = localStorage.getItem("authToken");
    const decode = jwt_decode(tokenLocal);
    const date = new Date();
    const exp = decode.exp * 1000 < date.getTime();
    if (exp) {
      const { data } = await axios.get("api/auth/token");
      request.headers.Authorization = `Bearer ${data.accessToken}`;
      localStorage.setItem("authToken", data.accessToken);
    } else {
      request.headers.Authorization = `Bearer ${tokenLocal}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axiosPrivate.interceptors.response.use(
  (response) => {
    console.log("You got access to this route");
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default axiosPrivate;
