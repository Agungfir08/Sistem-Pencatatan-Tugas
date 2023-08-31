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
import NotFound from "./page/NotFound";
import Tes from "./context/tes";
import Profile from "./page/Profile";
import Cookies from "js-cookie"

export default function App() {
  const LoginRegisRoute = (props) => {
    if (Cookies.get('token') !== undefined) {
        return <Navigate to={'/'} />
    } else if (Cookies.get('token') === undefined) {
        return props.children
    }
}

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Sidebar />}>

      <Route path='/login' element={
        <LoginRegisRoute>
          <Login />
        </LoginRegisRoute>
      }/>

      <Route path='/register' element={
        <LoginRegisRoute>
          <Register />
        </LoginRegisRoute>
      }/>

        <Route index element={<Tes />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/profile" element={<Profile />} />
        
      </Route>
    )
  );
  return (
    // <>
    //   <RouterProvider router={router} />
    // </>
    // <Login />
    <Login />
  );
}
