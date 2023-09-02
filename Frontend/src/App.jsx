import * as React from "react";
import Login from "./page/Login";
import Home from "./page/Home";
import Notification from "./page/Notification";
import Register from "./page/Register";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import NotFound from "./page/NotFound";
import Profile from "./page/Profile";
import { AuthProvider, useAuth } from "./context/AuthProvider";
import LayOut from "./layout/layout";

export default function App() {
  const LoginRegisRoute = (props) => {
    const { user } = useAuth();
    if (!user) {
      return <Navigate to={"/login"} />;
    } else {
      return props.children;
    }
  };

  return (
    <>
      <Router>
        <AuthProvider>
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
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}
