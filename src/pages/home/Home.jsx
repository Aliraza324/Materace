import HeroSection from "../../components/home/HeroSection";
import Explore from "../../components/home/Explore";
import AboutUs from "../../components/home/AboutUs";
import MetaRace from "../../components/home/MetaRace";
import Games from "../../components/home/Games";
import Race from "../../components/home/Race";
import Powering from "../../components/home/Powering";
import Studio from "../../components/home/Studio";
import Partners from "../../components/home/Partners";
import Footer from "../../layout/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Explore />
      <AboutUs />
      <MetaRace />
      <Games />
      <Race />
      <Powering />
      <Studio />
      <Partners />
      <Footer />
    </>
  );
};

export default Home;