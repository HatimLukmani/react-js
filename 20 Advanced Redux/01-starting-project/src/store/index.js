import { createSlice, configureStore } from "@reduxjs/toolkit";
const displayCart = createSlice({
  name: "displayCart",
  initialState: {
    isDisplay: true,
  },
  reducers: {
    displaySetter(state) {
      state.isDisplay = !state.isDisplay;
    },
  },
});

const store = configureStore({ displayCart: displayCart.reducer });
export const actionDisplayCart = displayCart.actions;
export default store;
