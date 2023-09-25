// components
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

function Root() {
  return (
    <div className="text-textPrimary">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}

export default Root;
