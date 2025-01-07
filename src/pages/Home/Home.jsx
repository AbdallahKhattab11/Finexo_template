

import Hero from "../../components/Hero/Hero"
import OurServices from "../../components/OurServices/OurServices";
import AboutUs from "../../components/AboutUs/AboutUs";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import OurTeam from "../../components/OurTeam/OurTeam";
import WhatSaysOurCustomers from "../../components/WhatSaysOurCustomers/WhatSaysOurCustomers";

const Home = () => {
  return (
    <section>
      <Hero />
      <OurServices />
      <AboutUs />
      <WhyChooseUs />
      <OurTeam />
      <WhatSaysOurCustomers />
    </section>
  );
};

export default Home;