import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <AuthProvider authType="cookie" authName="token"> */}

    <App />

    {/* </AuthProvider> */}
  </React.StrictMode>
);
