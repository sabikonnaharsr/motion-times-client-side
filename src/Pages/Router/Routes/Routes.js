import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home/Home";
import SignUp from "../../../Pages/Login/SignUp/SignUp";
import Login from "../../../Pages/Login/Login/Login";
import Main from "../../Layout/Main";
import ErrorPage from "../../ErrorPage/ErrorPage";
import ServiceDetails from "../../Services/ServiceDetails/ServiceDetails";
import Services from "../../Services/Services/Services";
import Blogs from "../../Blogs/Blogs";
import SuccessfulClient from "../../OurSuccess/SuccessfulClient/SuccessfulClient";
import AllServices from "../../Services/AllServices/AllServices";
import AllServicesSingleCard from "../../Services/AllServices/AllServicesSingleCard";
import AddServices from "../../AddServices/AddServices";
import MyReview from "../../MyReview/MyReview";
import ReviewCard from "../../ReviewCard/ReviewCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/allServices",
        element: <AllServices />,
      },
      {
        path: `/services/:id`,
        element: <ServiceDetails />,
        loader: ({ params }) =>
          fetch(`https://sequel-extract-server.vercel.app/services/${params.id}`),
      },
      {
        path: '/myReview',
        element: <MyReview></MyReview>

      },

      {
        path: "/addServices",
        element: <AddServices></AddServices>,
      },
      {
        path: "/allServicesSingleCard",
        element: <AllServicesSingleCard />,
      },
      {
        path: 'reviewCard',
        element: <ReviewCard></ReviewCard>
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/successfulClient",
        element: <SuccessfulClient></SuccessfulClient>,
      },
      {
        path: "/review",
        element: <MyReview></MyReview>,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
export default router;
