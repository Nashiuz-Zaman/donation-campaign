// react
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

// components
import SavedDonations from "../../Components/SavedDonations/SavedDonations";
import Container from "../../Components/Container/Container";

// hook
import useDonationContext from "../../hooks/useDonationContext";

const DonationsPage = () => {
  const [limitedView, setLimitedView] = useState(true);
  const [displayDonations, setDisplayDonations] = useState([]);
  // get the loaded data
  const donations = useLoaderData();
  // extract the custom function to retreive data from local storage
  const { getSavedDonations } = useDonationContext();

  const savedDonations = getSavedDonations();

  // use filter method to get the donation objects for the saved ids
  const donationsToShow = donations.filter((donation) =>
    savedDonations.includes(donation.id)
  );

  useEffect(() => {
    if (limitedView) {
      setDisplayDonations(donationsToShow.slice(0, 4));
    } else {
      setDisplayDonations(donationsToShow);
    }
  }, [limitedView, donationsToShow]);

  return (
    <div className="mt-20 mb-[9.625rem]">
      <Container>
        <SavedDonations savedDonationsInfo={displayDonations}></SavedDonations>
        <button
          className={`bg-[#009444] text-white rounded-default px-7 py-[0.875rem] font-semibold leading-[normal] w-max block mx-auto mt-10 ${
            !limitedView && "hidden"
          }`}
          onClick={() => setLimitedView(false)}
        >
          See All
        </button>
      </Container>
    </div>
  );
};

export default DonationsPage;
