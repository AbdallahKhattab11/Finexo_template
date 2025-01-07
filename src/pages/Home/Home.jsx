

import Hero from "../../components/Hero/Hero"
import OurServices from "../../components/OurServices/OurServices";
import AboutUs from "../../components/AboutUs/AboutUs";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import OurTeam from "../../components/OurTeam/OurTeam";

const Home = () => {
  return (
    <section>
      <Hero />
      <OurServices />
      <AboutUs />
      <WhyChooseUs />
      <OurTeam />
    </section>
  );
};

export default Home;