import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  description: "",
  instructor: "",
};
const addCourseSlice = createSlice({
  initialState,
  name: "addcourse",
  reducers: {
    loadCourse: (state, action) => {
      const { title, description, instructor } = action.payload;

      state.title = title;
      state.description = description;
      state.instructor = instructor;
    },
    clearcourse: (state) => {
      return initialState;
    },
  },
});

export const { clearcourse, loadCourse } = addCourseSlice.actions;
export const courseReducer = addCourseSlice.reducer;
