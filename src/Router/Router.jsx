// react
import { createBrowserRouter } from "react-router-dom";

// components
import Root from "../Components/Root/Root";

// pages
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      { path: "/donations", element: <Donation></Donation> },
      { path: "/statistics", element: <Statistics></Statistics> },
    ],
  },
]);
