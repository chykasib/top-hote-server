import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Booking from "../Pages/Booking/Booking";
import Calender from "../Pages/Booking/Calender";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Info from "../Pages/News/Info";
import News from "../Pages/News/News";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/', element: <Home></Home>
            }
            ,
            {
                path: '/news',
                element: <PrivateRoutes><News></News></PrivateRoutes>,
                loader: () => fetch('https://top-hote-server.vercel.app/hotels')
            }
            ,
            {
                path: '/booking', element: <Booking></Booking>
            },
            {
                path: 'calender', element: <Calender></Calender>
            }
            ,
            {
                path: '/news/:id',
                element: <Info></Info>
                ,
                loader: ({ params }) => fetch(`https://top-hote-server.vercel.app/hotels/${params.id}`)
            }
            ,
            {
                path: '/login', element: <Login></Login>
            }
            ,
            {
                path: '/register', element: <Register></Register>
            }
        ]
    }
])