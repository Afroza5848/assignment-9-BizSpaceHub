import {createBrowserRouter} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import CardDetails from "../pages/CardDetails/CardDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Contact from "../components/Contact/Contact";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader: () => fetch('/data.json')
        },
        {
            path:"/update-profile",
            element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
        },
        {
          path:"/singleCard/:id",
          element:<PrivateRoute>
               <CardDetails></CardDetails>
            </PrivateRoute>,
          loader: () => fetch('/data.json')
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        },
        {
          path:"/contact",
          element:<Contact></Contact>
        }
      ]
    },
  ]);