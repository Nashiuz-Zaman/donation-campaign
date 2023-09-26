// react
import { createBrowserRouter } from "react-router-dom";

// components
import Root from "../Components/Root/Root";

// pages
import Home from "../pages/Home/Home";
import DonationsPage from "../pages/DonationsPage/DonationsPage";
import Statistics from "../pages/Statistics/Statistics";
import DonationDetailsPage from "../pages/DonationDetailsPage/DonationDetailsPage";

const loaderFunction = () => {
  return fetch("/donationData.json");
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: loaderFunction,
      },
      {
        path: "/donations",
        element: <DonationsPage></DonationsPage>,
        loader: loaderFunction,
      },

      { path: "/statistics", element: <Statistics></Statistics> },
      {
        path: "/donation/:id",
        element: <DonationDetailsPage></DonationDetailsPage>,
        loader: loaderFunction,
      },
    ],
  },
]);
