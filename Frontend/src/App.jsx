import Login from "./page/Login";
import Home from "./page/Home";
import Sidebar from "./component/Sidebar";
import Notification from "./page/Notification";
import Register from "./page/Register";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Sidebar />}>
        <Route index element={<Home />} />
        <Route path="/notification" element={<Notification />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
    // <Login />
    // <Login />
  );
}
