import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice";
import { courseReducer } from "./courseSlice";
import { classReducer } from "./classSlice";
import enrollementSlice from "./enrollementSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    course: courseReducer,
    class: classReducer,
    enrollement: enrollementSlice,
  },
});

export default store;
