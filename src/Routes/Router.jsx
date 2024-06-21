import {
    createBrowserRouter,
  } from "react-router-dom";
  
import Main from "../Layout/Main-Layout/Main";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error-page/Error";
import Apartment from "../Pages/Apartment/Apartment";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DashboardLayout from "../Layout/Dashboard-Layout/DashboardLayout";
import Statistics from "../Pages/Dashboard-pages/Common/Statistics";
import MyProfile from "../Pages/Dashboard-pages/User-Dashboard/MyProfile";
import Announcements from "../Pages/Dashboard-pages/User-Dashboard/Announcements";

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
    {
      path: '/dashboard',
      element: <DashboardLayout></DashboardLayout>,
      children: [
        {
          index: true,
          element: <Statistics></Statistics>,
        },
        {
          path: 'my-profile',
          element: <MyProfile></MyProfile>
        },
        {
          path: 'announcements',
          element: <Announcements></Announcements>,
        }
      ]
    }
  ]);