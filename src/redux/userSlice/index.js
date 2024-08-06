import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: "",
};
const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    loadUser: (state, action) => {
      const { username, password } = action.payload;

      state.username = username;
      state.password = password;
    },
    clearUser: (state) => {
      return initialState;
    },
  },
});

export const { clearUser, loadUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
