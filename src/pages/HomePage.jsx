import React from "react";
import HeroSection from "../components/HomePage/Hero/HeroSection";
import WhatWeDo from "../components/HomePage/WhatWeDo/WhatWeDo";
import RepairServices from "../components/HomePage/RepairServices/RepairServices";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WhatWeDo />
      <RepairServices />
    </>
  );
};

export default HomePage;
