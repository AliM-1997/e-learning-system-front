import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice";
import { courseReducer } from "./courseSlice";
import { classReducer } from "./classSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    course: courseReducer,
    class: classReducer,
  },
});

export default store;
