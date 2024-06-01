import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import Root from "../layout/Root";
import Contact from "../pages/contact/Contact";
import AddReview from "../pages/dashboard/addReview/AddReview";
import Users from "../pages/dashboard/allUsers/Users";
import Booking from "../pages/dashboard/booking/Booking";
import Dashboard from "../pages/dashboard/dashboard/Dashboard";
import HomeDash from "../pages/dashboard/dashboardHome/HomeDash";
import MyCart from "../pages/dashboard/myCart/MyCart";
import Payment from "../pages/dashboard/payment/Payment";
import Reservation from "../pages/dashboard/reservation/Reservation";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Menu from "../pages/menu/Menu";
import Register from "../pages/register/Register";
import Shop from "../pages/shop/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/menu",
        element: <Menu></Menu>,
      },

      {
        path: "/shop/:category",
        element: <Shop></Shop>,
      },

      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },

  {
    path: "login",
    element: <Login></Login>,
  },

  {
    path: "register",
    element: <Register></Register>,
  },

  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "home",
        element: <HomeDash></HomeDash>,
      },
      {
        path: "reservation",
        element: <Reservation></Reservation>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "myCart",
        element: <MyCart></MyCart>,
      },
      {
        path: "addReview",
        element: <AddReview></AddReview>,
      },
      {
        path: "myBooking",
        element: <Booking></Booking>,
      },

      // admin route
      {
        path: "adminHome",
        element: <h1>Admin Home</h1>,
      },
      {
        path: "addItems",
        element: <h1>Admin add</h1>,
      },
      {
        path: "manageItems",
        element: <h1>Admin itens</h1>,
      },
      {
        path: "manageBookins",
        element: <h1>Admin bookins</h1>,
      },
      {
        path: "allUsers",
        element: <Users></Users>
      },
    ],
  },
]);

export default router;
