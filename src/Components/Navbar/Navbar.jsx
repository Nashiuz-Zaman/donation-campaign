// react
import PropTypes from "prop-types";

// components
import DesktopNavigation from "../DesktopNavigation/DesktopNavigation";
import BrandLogo from "../BrandLogo/BrandLogo";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import MobileMenuBtn from "../MobileMenuBtn/MobileMenuBtn";

// hooks
import useMobileNavigation from "../../hooks/useMobileNavigation";

const Navbar = ({ imgSrc, navigationOptions }) => {
  // extracting functionality from custom hook
  const { mobileNavOpen, openNav, closeNav } = useMobileNavigation();

  // return jsx
  return (
    <nav className="flex items-center justify-between pt-[3.125rem]">
      {/* website logo */}
      <BrandLogo imgSrc={imgSrc}></BrandLogo>

      {/* desktop nav */}
      <DesktopNavigation
        navigationOptions={navigationOptions}
      ></DesktopNavigation>

      {/* toggle button */}
      <MobileMenuBtn clickHandler={openNav}></MobileMenuBtn>

      {/* mobile nav */}
      <MobileNavigation
        navigationOptions={navigationOptions}
        openState={mobileNavOpen}
        closeNavFunc={closeNav}
      ></MobileNavigation>
    </nav>
  );
};

Navbar.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  navigationOptions: PropTypes.array.isRequired,
};

export default Navbar;
