// react
import PropTypes from "prop-types";

const Container = ({ children }) => {
  return (
    <div className="px-[2rem] max-w-[90rem] 2xl:px-0 3xl:max-w-[102.5rem] mx-auto">
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.object,
};

export default Container;
