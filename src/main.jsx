import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Users from "./store/UsersSlice.js";

const store = configureStore({
  reducer: {
    users: Users,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
