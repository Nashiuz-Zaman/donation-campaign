// react
import { useContext } from "react";

// context
import { DonationContext } from "../contexts/DonationContext";

const useDonationContext = () => {
  const { getSavedDonations, addToSavedDonations, showToast, closeToast } =
    useContext(DonationContext);

  return { getSavedDonations, addToSavedDonations, showToast, closeToast };
};

export default useDonationContext;
