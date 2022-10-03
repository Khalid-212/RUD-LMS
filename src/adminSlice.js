import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
  name: "adminstat",
  initialState: {
    admin: null,
  },
  reducers: {
    adminstat: (state, action) => {
      state.adminstat = action.payload;
    },
  },
});

export const { adminstat } = adminSlice.actions;
export const selectadmin = (state) => state.user.user;
export default adminSlice.reducer;
