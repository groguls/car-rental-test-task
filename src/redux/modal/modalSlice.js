import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: false,
  reducers: {
    toggleModal(state) {
      return !state;
    },
  },
});

export const { toggleModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
export const getModalState = (state) => state.modal;
