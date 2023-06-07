import React from "react";
import Header from "../components/UI/Header/Header";
import Footer from "../components/UI/Footer/Footer";
import DriverProfile from "../components/ProfilePage/DriverProfile/DriverProfile";
import BookedServices from "../components/ProfilePage/BookedServices/BookedServices";

const ProfilePage = () => {
  return (
    <>
      <Header />
      <DriverProfile />
      <BookedServices />
      <Footer />
    </>
  );
};

export default ProfilePage;
