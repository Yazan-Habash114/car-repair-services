import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import AlignedNavbar from "../../UI/AlignedNavbar/AlignedNavbar";
import TopHeader from "./TopHeader/TopHeader";
import { MediumScreen } from "../../../globals/responsive";

const HeaderContainer = styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 100;

  ${MediumScreen({ position: "relative" })}
`;

const Header = () => {
  const [showNavItems, setShowNavItems] = useState(true);

  const handleShowNavItems = () => {
    setShowNavItems(!showNavItems);
  };

  return (
    <HeaderContainer>
      <AlignedNavbar>
        <TopHeader handleShowNavItems={handleShowNavItems} />
        <Navbar
          showNavItems={showNavItems}
          handleShowNavItems={handleShowNavItems}
        />
      </AlignedNavbar>
    </HeaderContainer>
  );
};

export default Header;
