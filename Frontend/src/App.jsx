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
  Navigate,
  BrowserRouter,
  Routes
} from "react-router-dom";
import NotFound from "./page/NotFound";
import Tes from "./context/tes";
import Profile from "./page/Profile";
import Cookies from "js-cookie"
import LayOut from "./layout/layout"

export default function App() {
  
  const LoginRegisRoute = (props) => {
    if (Cookies.get('token') !== undefined) {   
        return props.children
    } else if (Cookies.get('token') === undefined) {
        return <Navigate to={'/login'} />
    }
}

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     // <Route path="/" element={<Sidebar />}>
  //     <>

  //     </>
        
  //     // </Route>
  //   )
  // );
  return (
    
    <BrowserRouter>

      {/* <RouterProvider router={router} /> */}
        <Routes>
          <Route path='*' element={<NotFound/>}/>

          <Route path="/login" element={
              <Login />
          } />
          
          <Route path="/register" element={
              <Register />
          } />
          
          <Route path="/" element={
<LayOut>
              <Home /> 
            </LayOut>

            
          } />

          <Route path="/notification" element={
            <LayOut>
              <Notification />
            </LayOut>
          } />
          
          {/* <Route path="/notification" element={
            <LayOut>
              <Notification />
            </LayOut>
          } /> */}
          

        </Routes>



    </BrowserRouter>
    // <Login />
    // <Login />
  );
}
