// react
import PropTypes from "prop-types";

// component
import HeadingSecondary from "../HeadingSecondary/HeadingSecondary";
import Description from "../Description/Description";

const DonationDetails = ({ donationInfo }) => {
  const {
    id,
    title,
    text_button_bg_color,
    description,
    picture_detailed,
    price,
  } = donationInfo;

  return (
    <div className="mt-20 mb-[7.625rem]">
      <div className="relative rounded-default overflow-hidden mb-[3.5rem]">
        <div className="max-w-[82.5rem] aspect-[1.89/1]">
          <img
            className="object-cover w-full h-full"
            src={picture_detailed}
            alt={title}
          />
        </div>

        <div className="p-[2.3125rem] bg-[#0b0b0b80] absolute bottom-0 left-0 w-full">
          <button
            style={{ backgroundColor: text_button_bg_color }}
            className="text-white font-semibold text-xl px-[1.625rem] py-4 rounded-[4px]"
          >
            Donate ${price}
          </button>
        </div>
      </div>

      <HeadingSecondary headingText={title}></HeadingSecondary>

      <Description descriptionText={description}></Description>
    </div>
  );
};

DonationDetails.propTypes = {
  donationInfo: PropTypes.object.isRequired,
};

export default DonationDetails;
