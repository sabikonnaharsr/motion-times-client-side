import { createBrowserRouter } from "react-router-dom";
import Home from '../../Home/Home/Home'
import SignUp from '../../../Pages/Login/SignUp/SignUp'
import Login from '../../../Pages/Login/Login/Login'
import Main from "../../Layout/Main";
import ErrorPage from "../../ErrorPage/ErrorPage";
import ServiceDetails from '../../Services/ServiceDetails/ServiceDetails';
import Services from "../../Services/Services/Services";
import Blogs from "../../Blogs/Blogs";
import SuccessfulClient from "../../OurSuccess/SuccessfulClient/SuccessfulClient";
import AllServices from "../../Services/AllServices/AllServices";
import AllServicesSingleCard from "../../Services/AllServices/AllServicesSingleCard";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/signup',
                element: <SignUp/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/allServices',
                element: <AllServices/>,
                // loader: ({params}) => fetch(`http://localhost:5000/addServices/${params._id}`)
            },
            {
               path: '/serviceDetails',
               element: <ServiceDetails/>
            },
            {
                path: '/services',
                element: <Services></Services>

            },
            {
                path: '/allServiceSingleCard',
                element: <AllServicesSingleCard/>
            },
            {
                path: '/blogs',
                element: <Blogs/>

            },
            {
                path: '/successfulClient',
                element: <SuccessfulClient></SuccessfulClient>
            },
            {
                path: '*',
                element: <ErrorPage/>
            }
        ]
    }
])
export default router;