import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Common/login/Login";
import LoginForm from "../components/Common/login/LoginForm";
import Register from "../components/Common/login/Register";
import PrivateRoute from "../components/Common/PrivateRoute";
import AboutUs from "../components/Pages/About/AboutUs";
import CheckOut from "../components/Pages/CheckOut";
import Home from "../components/Pages/home/Home";
import Orders from "../components/Pages/orders/Orders";
import ErrorPage from "../error/ErrorPage";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://genius-car-server-module-66.vercel.app/services')
            },
            {
                path: '/home',
                element: <Home></Home>,
                loader: () => fetch('https://genius-car-server-module-66.vercel.app/services')
            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/loginForm',
                element: <LoginForm />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/checkOut/:id',
                element: <PrivateRoute><CheckOut /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://genius-car-server-module-66.vercel.app/services/${params.id}`)
            },
            {
                path: '/orders',
                element: <PrivateRoute><Orders /></PrivateRoute>
            },
        ]
    }
])