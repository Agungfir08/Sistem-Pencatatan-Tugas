import * as React from "react";
import Login from "./page/Login";
import Home from "./page/Home";
import Sidebar from "./component/Sidebar";
import Notification from "./page/Notification";
import Register from "./page/Register";
import { Route, Navigate, BrowserRouter, Routes } from "react-router-dom";
import NotFound from "./page/NotFound";
import Profile from "./page/Profile";
import { useCookies } from "react-cookie";
import LayOut from "./layout/layout";

export default function App() {
  const [cookies, setCookies] = useCookies(["token"]);
  const LoginRegisRoute = (props) => {
    if (!cookies.token) {
      return <Navigate to="/login" />;
    } else {
      return props.children;
    }
  };

  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/"
          element={
            <LoginRegisRoute>
              <LayOut>
                <Home />
              </LayOut>
            </LoginRegisRoute>
          }
        />
        <Route
          path="/notification"
          element={
            <LoginRegisRoute>
              <LayOut>
                <Notification />
              </LayOut>
            </LoginRegisRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <LoginRegisRoute>
              <LayOut>
                <Profile />
              </LayOut>
            </LoginRegisRoute>
          }
        />
      </Routes>
    </>
  );
}
