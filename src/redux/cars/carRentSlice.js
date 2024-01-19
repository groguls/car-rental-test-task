import { createSlice } from "@reduxjs/toolkit";
import { signIn, logOut, refreshUser, signUp } from "./operations";

const initialState = {
  cars: [],
  favorites: [],
  isLoading: false,
  isError: false,
};

const carRentSlice = createSlice({
  name: "cars",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
      });
  },
});

export const carRentReducer = carRentSlice.reducer;
// export const selectUser = (state) => state.auth.user;
// export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
// export const selectIsRefreshing = (state) => state.auth.isRefreshing;
