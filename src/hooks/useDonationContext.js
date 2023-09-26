// react
import { useContext } from "react";

// context
import { DonationContext } from "../contexts/DonationContext";

const useDonationContext = () => {
  const { getSavedDonations, addToSavedDonations } =
    useContext(DonationContext);

  return { getSavedDonations, addToSavedDonations };
};

export default useDonationContext;
