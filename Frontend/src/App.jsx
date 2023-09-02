import * as React from "react";
import Login from "./page/Login";
import Home from "./page/Home";
import Sidebar from "./component/Sidebar";
import Notification from "./page/Notification";
import Register from "./page/Register";
import { Route, Navigate, BrowserRouter, Routes } from "react-router-dom";
import NotFound from "./page/NotFound";
import Tes from "./context/tes";
import Profile from "./page/Profile";
import Cookies from "js-cookie";
// import Cookies from 'universal-cookie';
import LayOut from "./layout/layout";

export default function App() {
  const LoginRegisRoute = (props) => {
    if (localStorage.getItem("token") === null) {
      return <Navigate to={"/login"} />;
    } else if (localStorage.getItem("token") !== null) {
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

        {/* <Route
            path="/profile"
            element={
              <LoginRegisRoute>
                <LayOut>
                  <Profile />
                </LayOut>
              </LoginRegisRoute>
            }
          /> */}
      </Routes>
    </>
  );
}
