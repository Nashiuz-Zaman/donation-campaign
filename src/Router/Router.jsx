// react
import { createBrowserRouter } from "react-router-dom";

// components
import Root from "../Components/Root/Root";

export const router = createBrowserRouter([
  { path: "/", element: <Root></Root> },
]);
