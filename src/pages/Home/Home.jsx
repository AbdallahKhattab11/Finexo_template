

import Hero from "../../components/Hero/Hero"
import OurServices from "../../components/OurServices/OurServices";
import AboutUs from "../../components/AboutUs/AboutUs";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import OurTeam from "../../components/OurTeam/OurTeam";
import WhatSaysOurCustomers from "../../components/WhatSaysOurCustomers/WhatSaysOurCustomers";
import Info from "../../components/Info/Info";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <section>
      <Hero />
      <OurServices />
      <AboutUs />
      <WhyChooseUs />
      <OurTeam />
      <WhatSaysOurCustomers />
      <Info/>
      <Footer/>
    </section>
  );
};

export default Home;