// react
import PropTypes from "prop-types";

const Description = ({ descriptionText }) => {
  return (
    <p className="text-textLight text-justify leading-[1.875rem]">
      {descriptionText}
    </p>
  );
};

Description.propTypes = {
  descriptionText: PropTypes.string,
};

export default Description;
