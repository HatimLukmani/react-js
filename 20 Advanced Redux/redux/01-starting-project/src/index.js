import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// import { Store } from 'redux';
import store from "../src/store/index.js";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
