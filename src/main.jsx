// react
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import DonationContextProvider from "./contexts/DonationContext";

// router
import { router } from "./Router/Router";

// styles
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DonationContextProvider>
      <RouterProvider router={router} />
    </DonationContextProvider>
  </React.StrictMode>
);
