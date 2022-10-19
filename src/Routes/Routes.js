import { createBrowserRouter } from "react-router-dom";
import Book from "../Components/Book/Book";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Signup from "../Components/Signup/Signup";
import Main from "../Layouts/Main";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },

            {
                path:'/book',
                element: <PrivateRoute><Book></Book></PrivateRoute>
            },
            {
                path: '/book/:name',
                element: <PrivateRoute><Book></Book></PrivateRoute>
            }
        ]
    }
]) 