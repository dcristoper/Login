import axios from "axios";

function newAbortSignal(timeoutMs) {
  const abortController = new AbortController();
  setTimeout(() => abortController.abort(), timeoutMs || 0);

  return abortController.signal;
}

export const getDataApi = async (config) => {
  const { method = "POST", endpoint, payload } = config;
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    const url = `/api/auth/${endpoint}`;
    return await axios({
      method,
      url,
      headers,
      data: payload,
      signal: newAbortSignal(5000),
    });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getDataPrivate = async (config, token) => {
  const { method, endpoint } = config;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  try {
    const url = `/api/auth${endpoint}`;
    return await axios({
      method: method,
      url: url,
      headers: headers,
      signal: newAbortSignal(5000),
    });
  } catch (error) {
    console.log(error);
  }
};
