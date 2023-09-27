// react
import { useLoaderData } from "react-router-dom";

// components
import SavedDonations from "../../Components/SavedDonations/SavedDonations";
import Container from "../../Components/Container/Container";

// hook
import useDonationContext from "../../hooks/useDonationContext";

const DonationsPage = () => {
  // get the loaded data
  const donations = useLoaderData();
  // extract the custom function to retreive data from local storage
  const { getSavedDonations } = useDonationContext();

  const savedDonations = getSavedDonations();

  // use filter method to get the donation objects for the saved ids
  const donationsToShow = donations.filter((donation) =>
    savedDonations.includes(donation.id)
  );

  return (
    <div className="mt-20 mb-[9.625rem]">
      <Container>
        <SavedDonations savedDonationsInfo={donationsToShow}></SavedDonations>
      </Container>
    </div>
  );
};

export default DonationsPage;
