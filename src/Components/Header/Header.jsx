// components
import Navbar from "../Navbar/Navbar";
import Container from "../Container/Container";

// image
import brandLogo from "./../../assets/images/logo.webp";

// navigation options data
import { navigationOptions } from "../../data/navigationOptions";

const Header = () => {
  return (
    <header>
      <Container>
        <Navbar
          imgSrc={brandLogo}
          navigationOptions={navigationOptions}
        ></Navbar>
      </Container>
    </header>
  );
};

export default Header;
