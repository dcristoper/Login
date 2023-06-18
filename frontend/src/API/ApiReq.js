import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};
export const ReqUser = (enpoint, payload) => {
  try {
    return axios.post(`/api/auth/${enpoint}`, payload, config);
  } catch (error) {
    console.log(error);
  }
};

export const reqReset = (enpoint, payload) => {
  try {
    return axios.put(`/api/auth/resetpassword/${enpoint}`, payload, config);
  } catch (error) {
    console.log(error);
  }
};
