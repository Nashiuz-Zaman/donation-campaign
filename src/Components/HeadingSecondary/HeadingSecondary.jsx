import PropTypes from "prop-types";

const HeadingSecondary = ({ headingText }) => {
  return (
    <h2 className="text-[2.5rem] leading-[normal] font-bold mb-6">
      {headingText}
    </h2>
  );
};

HeadingSecondary.propTypes = {
  headingText: PropTypes.string.isRequired,
};

export default HeadingSecondary;
