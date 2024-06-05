import {
    createBrowserRouter,
  } from "react-router-dom";
  
import Main from "../Layout/Main-Layout/Main";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error-page/Error";
import Apartment from "../Pages/Apartment/Apartment";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: '/apartment',
          element: <Apartment></Apartment>,
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
  ]);