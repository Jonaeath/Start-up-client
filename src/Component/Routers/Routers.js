import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home/Home";
import Main from "../Layout/Main/Main";
import Login from "../Page/User/Login/Login";
import SignUp from "../Page/User/SignUp/SignUp";
import ElectricCar from "../Page/ElectricCar/ElectricCar";
import CheckOut from "../Page/CheckOut/CheckOut";
import Orders from "../Page/Orders/Orders";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/electricCar',
                element:<ElectricCar></ElectricCar>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/checkout/:id',
                element:<CheckOut></CheckOut>,
                loader:({params}) => fetch(`http://localhost:5000/newStartUp/${params.id}`)
            },
            {
                path:'/orders',
                element:<Orders></Orders>
            }
        ]
    }
])