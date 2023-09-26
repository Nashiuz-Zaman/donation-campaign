// react
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Donation = ({ donationInfo }) => {
  const {
    id,
    picture,
    title,
    category,
    text_button_bg_color,
    category_bg_color,
    card_bg_color,
  } = donationInfo;

  return (
    <Link to={`/donation/${id}`}>
      <div className="rounded-default overflow-hidden">
        <img src={picture} alt={`${title} image`} />
        <div style={{ backgroundColor: card_bg_color }} className="p-4">
          <p
            style={{
              color: text_button_bg_color,
              backgroundColor: category_bg_color,
            }}
            className={
              "py-1 px-[0.625rem] text-sm font-medium w-max rounded-[4px] mb-2"
            }
          >
            {category}
          </p>

          <h3
            style={{ color: text_button_bg_color }}
            className="font-semibold text-xl leading-[normal]"
          >
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

Donation.propTypes = {
  donationInfo: PropTypes.object,
};

export default Donation;
