import PropTypes from "prop-types";

const HeadingSecondary = ({ headingText }) => {
  return (
    <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] leading-[normal] font-bold mb-6 text-center md:text-left">
      {headingText}
    </h2>
  );
};

HeadingSecondary.propTypes = {
  headingText: PropTypes.string.isRequired,
};

export default HeadingSecondary;
