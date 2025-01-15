import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import taskReducer from "./features/task/taskSlice";

const store = configureStore({
  reducer: {
    authReducer,
    taskReducer,
  },
});

export default store;
