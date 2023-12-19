//  Package Imports
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

//  Global CSS
import "./include/css/style.css";
import "react-loading-skeleton/dist/skeleton.css";

//  Component
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
