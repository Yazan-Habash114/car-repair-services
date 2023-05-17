import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import AlignedContainer from "../../UI/AlignedContainer/AlignedContainer";
import TopHeader from "./TopHeader/TopHeader";

const HeaderContainer = styled.header``;

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
