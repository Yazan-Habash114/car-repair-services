import React from "react";
import HeroSection from "../components/HomePage/Hero/HeroSection";
import WhatWeDo from "../components/HomePage/WhatWeDo/WhatWeDo";
import RepairServices from "../components/HomePage/RepairServices/RepairServices";
import HowItWorks from "../components/HomePage/HowItWorks/HowItWorks";
import CertifiedServices from "../components/HomePage/CertifiedServices/CertifiedServices";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WhatWeDo />
      <RepairServices />
      <CertifiedServices />
      <HowItWorks />
    </>
  );
};

export default HomePage;
