import React from "react";
import Header from "../components/UI/Header/Header";
import HeroBackground from "../components/UI/HeroBackground/HeroBackground";
import Footer from "../components/UI/Footer/Footer";
import DriverProfile from "../components/ProfilePage/DriverProfile/DriverProfile";

const ProfilePage = () => {
  return (
    <>
      <Header />
      <DriverProfile />
      <Footer />
    </>
  );
};

export default ProfilePage;
