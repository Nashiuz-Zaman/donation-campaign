import PropTypes from "prop-types";

const BrandLogo = ({ imgSrc }) => {
  return (
    <div className="h-[2.5rem] md:h-[4.5rem]">
      <img className="block h-full" src={imgSrc} alt="Brand Logo" />
    </div>
  );
};

BrandLogo.propTypes = {
  imgSrc: PropTypes.string.isRequired,
};

export default BrandLogo;
