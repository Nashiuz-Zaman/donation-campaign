// react
import { useLoaderData, useParams } from "react-router-dom";

// components
import DonationDetails from "../../Components/DonationDetails/DonationDetails";
import Container from "../../Components/Container/Container";
import SuccessToast from "../../Components/SuccessToast/SuccessToast";

// hooks
import useDonationContext from "../../hooks/useDonationContext";

const DonationDetailsPage = () => {
  const { id } = useParams();
  const { showToast, closeToast } = useDonationContext();
  const idInt = parseInt(id);

  const donations = useLoaderData();

  const currentDonation = donations.find((donation) => {
    return donation.id === idInt;
  });

  return (
    <div className="mt-20 mb-[7.625rem]">
      <SuccessToast
        showToast={showToast}
        closeToastFunc={closeToast}
      ></SuccessToast>
      <Container>
        <DonationDetails donationInfo={currentDonation}></DonationDetails>
      </Container>
    </div>
  );
};

export default DonationDetailsPage;
