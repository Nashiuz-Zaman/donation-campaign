// react
import PropTypes from "prop-types";

// icon
import { AiOutlineMenu } from "react-icons/ai";

const MobileMenuBtn = ({ clickHandler }) => {
  return (
    <button onClick={clickHandler}>
      <AiOutlineMenu className="text-3xl text-primary"></AiOutlineMenu>
    </button>
  );
};

MobileMenuBtn.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
export default MobileMenuBtn;
