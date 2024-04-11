import {createBrowserRouter} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


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
            element:<UpdateProfile></UpdateProfile>
        }
      ]
    },
  ]);