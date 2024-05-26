import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Menu from "../pages/menu/Menu";
import Shop from "../pages/shop/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },

        {
            path:"/menu",
            element:<Menu></Menu>
        },

        {
            path:"/shop",
            element:<Shop></Shop>
        },

        {
            path:"/contact",
            element:<Contact></Contact>
        },
    ]
  },
  {
    path:"login",
    element:<Login></Login>
  }
]);

export default router;
