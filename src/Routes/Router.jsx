import {
    createBrowserRouter,
  } from "react-router-dom";
  
import Main from "../Layout/Main-Layout/Main";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error-page/Error";
import Apartment from "../Pages/Apartment/Apartment";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import Statistics from "../Pages/Dashboard-pages/Common/Statistics";
import MyProfile from "../Pages/Dashboard-pages/User-Dashboard/MyProfile";
import Announcements from "../Pages/Dashboard-pages/User-Dashboard/Announcements";
import AdminProfile from "../Pages/Dashboard-pages/Admin/AdminProfile";
import ManageMembers from "../Pages/Dashboard-pages/Admin/ManageMembers";
import MakeAnnouncement from "../Pages/Dashboard-pages/Admin/MakeAnnouncement";
import AgreementRequest from "../Pages/Dashboard-pages/Admin/AgreementRequest";
import ManageCoupons from "../Pages/Dashboard-pages/Admin/ManageCoupons";
import PaymentHistory from "../Pages/Dashboard-pages/Member/Payment-History/PaymentHistory";
import MemberProfile from "../Pages/Dashboard-pages/Member/Member-Profile/MemberProfile";
import ViewAgreementDetails from "../Pages/Apartment/VeiwDetailsAgreement/ViewAgreementDetails";
import Payment from "../Pages/Dashboard-pages/Member/Paymemt/Payment";
import PayPayment from "../Pages/Dashboard-pages/Member/Paymemt/PayPayment";







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
          path: '/agreementDetails/:id',
          element: <ViewAgreementDetails></ViewAgreementDetails>,
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
          element: <Statistics></Statistics>
        },
        {
          path: 'myProfile',
          element: <MyProfile></MyProfile>
        },
        {
          path: 'announcement',
          element: <Announcements></Announcements>
        },

        // member dashboard
        {
          path: 'memberProfile',
          element: <MemberProfile></MemberProfile>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },
        {
          path: 'payPayment',
          element: <PayPayment></PayPayment>
        },
        {
          path: 'paymentHistory',
          element: <PaymentHistory></PaymentHistory>
        },

        // admin dashboard 
        {
          path: 'adminProfile',
          element: <AdminProfile></AdminProfile>
        },
        {
          path: 'manageMembers',
          element: <ManageMembers></ManageMembers>
        },
        {
          path: 'makeAnnouncement',
          element: <MakeAnnouncement></MakeAnnouncement>
        },
        {
          path: 'agreementReq',
          element: <AgreementRequest></AgreementRequest>
        },
        {
          path: 'manageCoupons',
          element: <ManageCoupons></ManageCoupons>
        }
      ]
    }
  ]);