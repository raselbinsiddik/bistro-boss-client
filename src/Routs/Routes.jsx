import { createBrowserRouter } from "react-router-dom";
import Main from "../layOut/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../pages/shared/Secret/Secret";
import DashBoard from "../layOut/DashBoard";
import MyCart from "../pages/DashBoard/MyCart";
import AllUsers from "../pages/DashBoard/AllUsers";
import AddItem from "../pages/DashBoard/AddItem/AddItem";
import AddminRout from "./AddminRout";
import ManageItem from "../pages/DashBoard/AddItem/ManageItem/ManageItem";
import Payment from "../pages/DashBoard/Payment/Payment";
import UserHome from "../pages/DashBoard/UserHome/UserHome";
import AddminHome from "../pages/DashBoard/AddminHome/AddminHome";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: 'menu',
                element:<Menu></Menu>
            },
            {
                path: 'order/:category',
                element:<Order></Order>
            },
            {
                path: 'login',
                element:<Login></Login>
            },
            {
                path: 'signup',
                element:<SignUp></SignUp>
                
            },
            {
                path: 'secret',
                element:<PrivateRoutes><Secret></Secret></PrivateRoutes>
            }
            
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
        children: [
            {
                path: 'userhome',
                element:<UserHome></UserHome>
        },
            {
                path: 'mycart',
                element:<MyCart></MyCart>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            // addmin routes
            {
                path: 'adminhome',
                element: <AddminRout><AddminHome></AddminHome></AddminRout>
            },
            {
                path: 'allusers',
                element: <AddminRout><AllUsers></AllUsers></AddminRout>
            },
            {
                path: 'additem',
                element: <AddminRout><AddItem></AddItem></AddminRout>
            },
            {
                path: 'manageitems',
                element:<AddminRout><ManageItem></ManageItem></AddminRout>
            },
           
        ]
    }
])