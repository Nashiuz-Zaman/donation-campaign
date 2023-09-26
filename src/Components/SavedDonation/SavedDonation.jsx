import PropTypes from "prop-types";

const SavedDonation = ({ donationInfo }) => {
  const {
    title,
    picture_square,
    category,
    price,
    card_bg_color,
    category_bg_color,
    text_button_bg_color,
  } = donationInfo;

  return (
    <div
      style={{ backgroundColor: card_bg_color }}
      className="rounded-default overflow-hidden flex flex-col sm:flex-row"
    >
      <img className="block" src={picture_square} alt={`${title} image`} />

      <div style={{ backgroundColor: card_bg_color }} className="grow p-6">
        <p
          style={{
            color: text_button_bg_color,
            backgroundColor: category_bg_color,
          }}
          className={
            "py-1 px-[0.625rem] text-sm font-medium w-max rounded-[4px] mb-4"
          }
        >
          {category}
        </p>

        <h3 className="leading-[normal] font-semibold text-2xl mb-2">
          {title}
        </h3>

        <p
          style={{ color: text_button_bg_color }}
          className="font-semibold leading-[normal] mb-5"
        >
          ${price.toFixed(2)}
        </p>

        <button
          style={{ backgroundColor: text_button_bg_color }}
          className="text-white rounded-[4px] px-4 py-2"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

SavedDonation.propTypes = {
  donationInfo: PropTypes.object.isRequired,
};

export default SavedDonation;
