// react
import PropTypes from "prop-types";

const SuccessToast = ({ showToast, closeToastFunc }) => {
  return (
    <div
      className={`bg-green-600 fixed bottom-10 right-10 z-30 px-6 py-5 rounded-default opacity-0 collapse transition-all duration-300 ${
        showToast && "!opacity-100 !visible"
      }`}
    >
      <p className="text-white text-center mb-4">
        You have successfully donated.
      </p>
      <button
        onClick={closeToastFunc}
        className="text-green-600 bg-white py-1 px-4 font-semibold w-max block mx-auto rounded-default"
      >
        Close
      </button>
    </div>
  );
};

SuccessToast.propTypes = {
  showToast: PropTypes.bool.isRequired,
  closeToastFunc: PropTypes.func.isRequired,
};

export default SuccessToast;
