// react
import PropTypes from "prop-types";

// component
import HeadingSecondary from "../HeadingSecondary/HeadingSecondary";
import Description from "../Description/Description";

// hook
import useDonationContext from "../../hooks/useDonationContext";

const DonationDetails = ({ donationInfo }) => {
  const {
    id,
    title,
    text_button_bg_color,
    description,
    picture_detailed,
    price,
  } = donationInfo;

  const { addToSavedDonations } = useDonationContext();

  return (
    <div>
      <div className="relative rounded-default overflow-hidden md:mb-[3.5rem]">
        <div className="max-w-[82.5rem] aspect-[1.89/1] rounded-default overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src={picture_detailed}
            alt={title}
          />
        </div>

        <div className="p-[2.3125rem] md:bg-[#0b0b0b80] md:absolute md:bottom-0 md:left-0 w-full">
          <button
            onClick={() => {
              addToSavedDonations(id);
            }}
            style={{ backgroundColor: text_button_bg_color }}
            className="text-white font-semibold text-xl px-[1.625rem] py-4 rounded-[4px] block mx-auto md:mx-0"
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
