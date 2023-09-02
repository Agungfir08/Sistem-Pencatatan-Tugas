import * as React from "react";
import { Route, Navigate, BrowserRouter, Routes } from "react-router-dom";
import { useCookies } from "react-cookie";
import NotFound from "./page/NotFound";
import LayOut from "./layout/layout";
import Login from "./page/Login";
import Home from "./page/Home";
import Notification from "./page/Notification";
import Register from "./page/Register";

export default function App() {
  const [cookies] = useCookies(["token"]);

  const LoginRegisRoute = (props) => {
    if (!cookies.token) {
      return <Navigate to="/login" />;
    }
    return props.children;
  };

  const ProtectedRoute = ({ children }) => {
    return (
      <LoginRegisRoute>
        <LayOut>{children}</LayOut>
      </LoginRegisRoute>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route index element={<Home />} />
          <Route path="/notification" element={<Notification />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
