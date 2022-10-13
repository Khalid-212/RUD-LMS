import { createSlice } from "@reduxjs/toolkit";

export const courseSlice = createSlice({
  name: "course",
  initialState: {
    course: null,
  },
  reducers: {
    usercourse: (state, action) => {
      state.usercourse = action.payload;
    },
  },
});
export const { usercourse } = courseSlice.actions;
export const selectcourse = (state) => state.usercourse.usercourse;
export default courseSlice.reducer;
