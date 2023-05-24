import React from "react";
import Header from "../components/UI/Header/Header";
import HeroBackground from "../components/GaragePage/HeroBackground/HeroBackground";
import GarageServices from "../components/GaragePage/GarageServices/GarageServices";
import styled from "styled-components";

const Page = styled.div`
  position: relative;
`;

const GaragePage = () => {
  return (
    <Page>
      <Header />
      <HeroBackground />
      <GarageServices />
    </Page>
  );
};

export default GaragePage;
