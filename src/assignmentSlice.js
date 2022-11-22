import { createSlice } from "@reduxjs/toolkit";

export const assignmentSlice = createSlice({
  name: "assignment",
  initialState: {
    assignment: null,
  },
  reducers: {
    userassignment: (state, action) => {
      state.userassignment = action.payload;
    },
  },
});
export const { userassignment } = assignmentSlice.actions;
export const selectassignment = (state) => state.userassignment.userassignment;
export default assignmentSlice.reducer;
