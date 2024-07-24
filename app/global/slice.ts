import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userState: null || {},
};

const slice = createSlice({
  name: "auth_slice",
  initialState,
  reducers: {
    authUser: (state: { userState: {} | null }, { payload }) => {
      state.userState = payload;
    },
  },
});

export const { authUser } = slice.actions;

export default slice.reducer;
