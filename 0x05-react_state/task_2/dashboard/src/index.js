import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import reportWebVitals from "./reportWebVitals";

// Set isLoggedIn to true if the user is logged in, otherwise, keep it as false
const isLoggedIn = false;
const displayDrawer = false;

ReactDOM.render(
  <App isLoggedIn={isLoggedIn} displayDrawer={displayDrawer} />,
  document.getElementById("root")
);

reportWebVitals();
