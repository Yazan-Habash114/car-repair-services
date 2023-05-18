import React from "react";
import HeroSection from "../components/HomePage/Hero/HeroSection";
import WhatWeDo from "../components/HomePage/WhatWeDo/WhatWeDo";
import RepairServices from "../components/HomePage/RepairServices/RepairServices";
import HowItWorks from "../components/HomePage/HowItWorks/HowItWorks";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WhatWeDo />
      <RepairServices />
      <HowItWorks />
    </>
  );
};

export default HomePage;
