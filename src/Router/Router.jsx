// react
import { createBrowserRouter } from "react-router-dom";

// components
import Root from "../Components/Root/Root";

// pages
import Home from "../pages/Home/Home";
import DonationsPage from "../pages/DonationsPage/DonationsPage";
import Statistics from "../pages/Statistics/Statistics";
import DonationDetailsPage from "../pages/DonationDetailsPage/DonationDetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/donationData.json").then((res) => res.json()),
      },
      { path: "/donations", element: <DonationsPage></DonationsPage> },
      { path: "/statistics", element: <Statistics></Statistics> },
      {
        path: "/donation/:id",
        element: <DonationDetailsPage></DonationDetailsPage>,
        loader: () => fetch("/donationData.json"),
      },
    ],
  },
]);
