import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard"; 
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Dashboard/>
  </BrowserRouter>
);
