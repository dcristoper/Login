import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import newAbortSignal from "./AbortSignal";
import axios from "axios";

const dataMessage = {
  users: [],
  loading: false,
  error: null,
};

export const getMessage = createAsyncThunk(
  "message/getMessage",
  async (conversationId) => {
    try {
      const url = `/api/message/${conversationId}`;
      const headers = {
        "Content-Type": "application/json",
      };
      const { data } = await axios({
        method: "GET",
        url,
        headers,
        signal: newAbortSignal(5000),
      });
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const getMessageSlice = createSlice({
  name: "message",
  initialState: dataMessage,
  extraReducers: (builder) => {
    builder
      .addCase(getMessage.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMessage.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(getMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.users = [];
      });
  },
});

export const selectMessageUser = (state) => state.message.users;
export default getMessageSlice.reducer;
