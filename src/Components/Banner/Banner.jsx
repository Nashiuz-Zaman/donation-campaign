// react
import PropTypes from "prop-types";

// components
import HeadingPrimary from "../HeadingPrimary/HeadingPrimary";

const Banner = ({ backgroundImgSrc, headingText }) => {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat pt-[7.5rem] pb-[13.125rem]"
      style={{
        backgroundImage: backgroundImgSrc,
      }}
    >
      <HeadingPrimary headingText={headingText}></HeadingPrimary>
    </div>
  );
};

Banner.propTypes = {
  backgroundImgSrc: PropTypes.string.isRequired,
  headingText: PropTypes.string.isRequired,
};

export default Banner;
