import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import newAbortSignal from "./AbortSignal";
import axios from "axios";

// Login, register, dan forgotPasword
const userData = {
  users: [],
  loading: false,
  error: null,
};

export const postsUsers = createAsyncThunk(
  "users/postsUsers",
  async (config) => {
    const { endpoint, payload } = config;
    const headers = {
      "Content-Type": "application/json",
    };
    const url = `/api/auth${endpoint}`;
    try {
      const { data } = await axios({
        method: "POST",
        url,
        headers,
        data: payload,
        signal: newAbortSignal(5000),
      });
      switch (endpoint) {
        case "/login":
          localStorage.setItem("authToken", data.accesstoken);
          localStorage.setItem("data", JSON.stringify(data.data));
          return data;
        case "/register":
          return data;
        case "/forgotpassword":
          return data;
        default:
          throw new Error("Route is not found");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        throw error.response.data.error;
      } else {
        throw new Error("An error occurred");
      }
    }
  }
);

const postsSlice = createSlice({
  name: "users",
  initialState: userData,

  extraReducers: (builder) => {
    builder
      .addCase(postsUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(postsUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(postsUsers.rejected, (state, action) => {
        state.loading = false;
        state.users = [];
        state.error = action.error.message;
      });
  },
});
// export const selectUsers = (state) => state.users.users;
export const selectUsers = (state) => state.users.users;
export const selectError = (state) => state.users.error;
export default postsSlice.reducer;
