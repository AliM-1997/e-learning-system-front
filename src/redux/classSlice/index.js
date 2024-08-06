import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  classes: [],
};

const classSlice = createSlice({
  name: "classes",
  initialState,
  reducers: {
    loadClasses: (state, action) => {
      state.classes = action.payload;
    },
    addClass: (state, action) => {
      state.classes.push(action.payload);
    },
    deleteClass: (state, action) => {
      const id = action.payload;
      state.classes = state.classes.filter((classItem) => classItem._id !== id);
    },
    clearClasses: (state) => {
      state.classes = [];
    },
  },
});

export const { loadClasses, addClass, deleteClass, clearClasses } =
  classSlice.actions;
export const classReducer = classSlice.reducer;
