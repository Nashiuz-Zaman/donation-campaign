// react
import PropTypes from "prop-types";

// components
import DesktopNavigation from "../DesktopNavigation/DesktopNavigation";
import BrandLogo from "../BrandLogo/BrandLogo";

const Navbar = ({ imgSrc, navigatonOptions }) => {
  return (
    <nav className="flex items-center justify-between pt-[3.125rem]">
      {/* website logo */}
      <BrandLogo imgSrc={imgSrc}></BrandLogo>
      <DesktopNavigation
        navigatonOptions={navigatonOptions}
      ></DesktopNavigation>
    </nav>
  );
};

Navbar.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  navigatonOptions: PropTypes.array.isRequired,
};

export default Navbar;
