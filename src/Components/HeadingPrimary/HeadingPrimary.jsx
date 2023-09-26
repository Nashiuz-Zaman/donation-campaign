//  react
import PropTypes from "prop-types";

const HeadingPrimary = ({ headingText }) => {
  return (
    <h1 className="font-bold text-5xl text-center leading-[normal]">
      {headingText}
    </h1>
  );
};

HeadingPrimary.propTypes = {
  headingText: PropTypes.string.isRequired,
};

export default HeadingPrimary;
