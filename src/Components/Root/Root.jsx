// components
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

function Root() {
  return (
    <div className="text-textPrimary max-w-[120rem] mx-auto px-[2rem] md:px-0">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}

export default Root;
