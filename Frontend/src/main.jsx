import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "react-auth-kit";
import axios from "axios";
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <AuthProvider authType="cookie" authName="token"> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </AuthProvider> */}
  </React.StrictMode>
);
