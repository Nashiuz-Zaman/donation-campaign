// components
import Chart from "../../Components/Chart/Chart";

// hooks
import useDonationContext from "./../../hooks/useDonationContext";

const Statistics = () => {
  const { getSavedDonations } = useDonationContext();

  const yourDonation = getSavedDonations().length;
  const totalDonation = 12 - yourDonation;

  console.log(yourDonation, totalDonation);

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <Chart yourDonation={yourDonation} totalDonation={totalDonation}></Chart>

      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-14 mt-2 md:mt-16 mb-[10.75rem]">
        <div className="flex items-center gap-4">
          <p>Your Donation</p>
          <div className="w-[6.25rem] h-[0.75rem] bg-[#00C49F] rounded-[2px]"></div>
        </div>

        <div className="flex items-center gap-4">
          <p>Total Donation</p>
          <div className="w-[6.25rem] h-[0.75rem] bg-[#FF444A] rounded-[2px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
