import { createSlice } from "@reduxjs/toolkit";
import { getAllCars } from "./carOperations";

const initialState = {
  carsData: [],
  favorites: [],
  isLoading: false,
  error: null,
};

const carRentSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    addFavorite: {
      reducer(state, action) {
        state.favorites.push(action.payload);
      },
    },
    deleteFavorite: {
      reducer(state, action) {
        state.favorites = state.favorites.filter(
          (item) => item !== action.payload
        );
      },
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCars.fulfilled, (state, action) => {
        state.carsData = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCars.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { addFavorite, deleteFavorite } = carRentSlice.actions;
export const carRentReducer = carRentSlice.reducer;
export const selectCars = (state) => state.cars.carsData;
export const selectisLoading = (state) => state.cars.isLoading;
export const selectFavorites = (state) => state.cars.favorites;
