import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Shared/Secret/Secret";
import DashingBoard from "../LayOut/DashinBoard/DashingBoard";
import MyCart from "../pages/Dashboard Items/MyCart/MyCart";
import AllUsers from "../pages/Dashboard Items/Allusers/AllUsers";
import AddItem from "../pages/Dashboard Items/AddItem/AddItem";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../pages/Dashboard Items/Manage Itmes/ManageItems";
import Payment from "../pages/Dashboard Items/Payment/Payment";
import AdminHome from "../pages/Dashboard Items/Admin Home/AdminHome";
import UserHome from "../pages/Dashboard Items/User Home/UserHome";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <Menu></Menu>
            },
            {
                path: 'order/:category',
                element: <Order></Order>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'secret',
                element: <PrivateRoute><Secret></Secret> </PrivateRoute>
            }
        ],
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashingBoard></DashingBoard></PrivateRoute>,
        children: [
            {
                path: 'mycart',
                element: <MyCart></MyCart>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            // admin routed
            {
                path: 'allusers',
                element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            },
            {
                path: 'addItem',
                element: <AdminRoutes><AddItem></AddItem></AdminRoutes>
            },
            {
                path: 'manageitems',
                element: <AdminRoutes><ManageItems></ManageItems></AdminRoutes>
            },
            {
                path: 'adminhome',
                element: <AdminRoutes><AdminHome></AdminHome></AdminRoutes>
            },
            {
                path: 'userhome',
                element: <UserHome></UserHome>
            }
        ]
    }
]);