import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";

const Home = () => {
  const donations = useLoaderData();
  console.log(donations);

  const headingText = "I Grow By Helping People In Need";
  const backgroundImg =
    "linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url(https://i.ibb.co/nLRMThm/hero-bg.webp)";

  return (
    <div>
      <section>
        <Banner
          backgroundImgSrc={backgroundImg}
          headingText={headingText}
        ></Banner>
      </section>
    </div>
  );
};

export default Home;
