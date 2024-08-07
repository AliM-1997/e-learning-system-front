import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enrolledClasses: [],
  error: null,
  loading: false,
};

const enrollSlice = createSlice({
  name: "enroll",
  initialState,
  reducers: {
    enrollRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    enrollSuccess: (state, action) => {
      state.enrolledClasses.push(action.payload.classId);
      state.loading = false;
    },
    enrollFailure: (state, action) => {
      state.error = action.payload.error;
      state.loading = false;
    },
    withdrawalRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    withdrawalSuccess: (state, action) => {
      state.enrolledClasses = state.enrolledClasses.filter(
        (classId) => classId !== action.payload.classId
      );
      state.loading = false;
    },
    withdrawalFailure: (state, action) => {
      state.error = action.payload.error;
      state.loading = false;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  enrollRequest,
  enrollSuccess,
  enrollFailure,
  withdrawalRequest,
  withdrawalSuccess,
  withdrawalFailure,
  clearError,
} = enrollSlice.actions;

export default enrollSlice.reducer;
