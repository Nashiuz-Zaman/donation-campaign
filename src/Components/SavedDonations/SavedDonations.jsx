// react
import PropTypes from "prop-types";

// components
import SavedDonation from "../SavedDonation/SavedDonation";

const SavedDonations = ({ savedDonationsInfo }) => {
  return (
    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {savedDonationsInfo &&
        savedDonationsInfo.map((savedDonation) => {
          return (
            <li key={savedDonation.id}>
              <SavedDonation donationInfo={savedDonation}></SavedDonation>
            </li>
          );
        })}
    </ul>
  );
};

SavedDonations.propTypes = {
  savedDonationsInfo: PropTypes.array.isRequired,
};

export default SavedDonations;
