import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
const counter = createSlice({
  name: "counter",
  initialState: { counter: 0, isVisible: true },
  reducers: {
    increament(state) {
      state.counter++;
    },
    decreament(state) {
      state.counter--;
    },
    setVisibility(state) {
      state.isVisible = !state.isVisible;
    },
  },
});

const auth = createSlice({
  name: "auth",
  initialState: { isAuth: false },
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counter.reducer, auth: auth.reducer },
});
export const counterActions = counter.actions;
export const authActions = auth.actions;
export default store;
