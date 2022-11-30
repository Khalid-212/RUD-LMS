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
    studenttoreview: (state, action) => {
      state.studenttoreview = action.payload;
    },
    totalSubmissions: (state, action) => {
      state.totalSubmissions = action.payload;
    },
  },
});

export const { adminstat, studenttoreview, totalSubmissions } =
  adminSlice.actions;
export const selectadmin = (state) => state.adminstat.adminstat;
export default adminSlice.reducer;
