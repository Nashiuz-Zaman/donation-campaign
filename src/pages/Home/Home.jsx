// react
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

// components
import Banner from "../../Components/Banner/Banner";
import Donations from "../../Components/Donations/Donations";
import Container from "../../Components/Container/Container";

// home page
const Home = () => {
  const donations = useLoaderData();
  const [displayDonations, setDisplayDonations] = useState(donations);

  console.log(displayDonations);

  // pass variables to reusable banner component
  const headingText = "I Grow By Helping People In Need";
  const backgroundImg =
    "linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url(https://i.ibb.co/nLRMThm/hero-bg.webp)";

  return (
    <div>
      <section className="mb-[6.25rem]">
        <Banner
          backgroundImgSrc={backgroundImg}
          headingText={headingText}
        ></Banner>
      </section>

      <section>
        <Container>
          <Donations donationsInfo={displayDonations}></Donations>
        </Container>
      </section>
    </div>
  );
};

export default Home;
