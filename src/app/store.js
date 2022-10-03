import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../userSlice";
import adminstatReducer from "../adminSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    adminstat: adminstatReducer,
  },
});
