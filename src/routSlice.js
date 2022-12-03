import { createSlice } from "@reduxjs/toolkit";

export const routSclice = createSlice({
  name: "rout",
  initialState: {
    rout: null,
  },
  reducers: {
    userrout: (state, action) => {
      state.userrout = action.payload;
    },
  },
});
export const { usercourse } = routSclice.actions;
export const selectedRout = (state) => state.userrout.userrout;
export default routSclice.reducer;
