import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import AlignedContainer from "../../UI/AlignedContainer/AlignedContainer";
import TopHeader from "./TopHeader/TopHeader";
import { Tablet } from "../../../globals/responsive";

const HeaderContainer = styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 100;

  ${Tablet({ position: "relative" })}
`;

const Header = () => {
  return (
    <HeaderContainer>
      <AlignedContainer>
        <TopHeader />
        <Navbar />
      </AlignedContainer>
    </HeaderContainer>
  );
};

export default Header;
