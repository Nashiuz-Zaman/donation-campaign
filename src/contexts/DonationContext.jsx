// react
import PropTypes from "prop-types";
import { useState } from "react";
import { createContext } from "react";

// creating context
export const DonationContext = createContext();

const DonationContextProvider = ({ children }) => {
  const [showToast, setShowToast] = useState(false);

  // function for retreiving donations from local storage
  const getSavedDonations = () => {
    const donations = localStorage.getItem("donations");

    if (!donations) {
      return [];
    } else {
      return JSON.parse(donations);
    }
  };

  // function for adding donations to local storage
  const addToSavedDonations = (idToAdd) => {
    // get saved donations from localstorage
    const savedDonations = getSavedDonations();

    // check if the donation is already on the list
    const foundDonation = savedDonations.find((id) => id === idToAdd);

    // if match found exit the function without doing anything
    if (foundDonation) {
      return;
    }

    // if match not found add the new id to existing donations in the local storage
    if (foundDonation === undefined) {
      const newDonations = [...savedDonations, idToAdd];
      const newDonationsStr = JSON.stringify(newDonations);
      localStorage.setItem("donations", newDonationsStr);
      setShowToast(true);
      return;
    }
  };

  const closeToast = () => {
    setShowToast(false);
  };

  return (
    <DonationContext.Provider
      value={{ getSavedDonations, addToSavedDonations, showToast, closeToast }}
    >
      {children}
    </DonationContext.Provider>
  );
};

DonationContextProvider.propTypes = {
  children: PropTypes.any,
};

export default DonationContextProvider;
