// react
import { useLoaderData, useParams } from "react-router-dom";

// components
import DonationDetails from "../../Components/DonationDetails/DonationDetails";
import Container from "../../Components/Container/Container";

const DonationDetailsPage = () => {
  const { id } = useParams();
  const idInt = parseInt(id);

  const donations = useLoaderData();

  const currentDonation = donations.find((donation) => {
    return donation.id === idInt;
  });

  return (
    <div className="mt-20 mb-[7.625rem]">
      <Container>
        <DonationDetails donationInfo={currentDonation}></DonationDetails>
      </Container>
    </div>
  );
};

export default DonationDetailsPage;
