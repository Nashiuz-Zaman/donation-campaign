// react
import PropTypes from "prop-types";

// components
import Donation from "../Donation/Donation";

const Donations = ({ donationsInfo }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center mx-auto mb-[11.375rem]">
      {donationsInfo &&
        donationsInfo.map((donation) => {
          return (
            <Donation key={donation.id} donationInfo={donation}></Donation>
          );
        })}
    </div>
  );
};

Donations.propTypes = {
  donationsInfo: PropTypes.array.isRequired,
};

export default Donations;
