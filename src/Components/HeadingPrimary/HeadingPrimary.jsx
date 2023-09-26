//  react
import PropTypes from "prop-types";

const HeadingPrimary = ({ headingText }) => {
  return (
    <h1 className="font-bold text-4xl md:text-5xl text-center leading-[normal] mb-10">
      {headingText}
    </h1>
  );
};

HeadingPrimary.propTypes = {
  headingText: PropTypes.string.isRequired,
};

export default HeadingPrimary;
