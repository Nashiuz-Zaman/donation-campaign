// react
import PropTypes from "prop-types";

const Container = ({ children }) => {
  return (
    <div className="px-[1rem] max-w-[82.5rem] 2xl:px-0 mx-auto">{children}</div>
  );
};

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
