import React from "react";
import HeroSection from "../components/HomePage/Hero/HeroSection";
import WhatWeDo from "../components/HomePage/WhatWeDo/WhatWeDo";
import RepairServices from "../components/HomePage/RepairServices/RepairServices";
import HowItWorks from "../components/HomePage/HowItWorks/HowItWorks";
import CertifiedServices from "../components/HomePage/CertifiedServices/CertifiedServices";
import AvatarCarousel from "../components/HomePage/AvatarCarousel/AvatarCarousel";
import Statistics from "../components/HomePage/Statistics/Statistics";
import Footer from "../components/UI/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WhatWeDo />
      <RepairServices />
      <CertifiedServices />
      <HowItWorks />
      <AvatarCarousel />
      <Statistics />
      <Footer />
    </>
  );
};

export default HomePage;
