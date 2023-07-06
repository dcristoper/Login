import { createSlice } from "@reduxjs/toolkit";

const contactUser = {
  users: [],
};

const contactUserSlice = createSlice({
  name: "contacts",
  initialState: contactUser,
  reducers: {
    getUserProfile: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const selectContact = (state) => state.contacts.users;
export const { getUserProfile } = contactUserSlice.actions;
export default contactUserSlice.reducer;
