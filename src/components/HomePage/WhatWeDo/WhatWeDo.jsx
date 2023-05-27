import React from "react";
import styled from "styled-components";
import SecondaryHeading from "../../UI/Headings/SecondaryHeading";
import Sentence from "../../UI/Sentence/Sentence";
import AlignedContainer from "../../UI/AlignedContainer/AlignedContainer";
import Catalog from "./Catalog/Catalog";

const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
  text-align: center;
`;

const WhatWeDo = () => {
  return (
    <AlignedContainer>
      <Content>
        <SecondaryHeading text="What We Do" fontSize="48px" />
        <Sentence
          text="We offer full service auto repair & maintenance"
          fontWeight={300}
          fontSize="24px"
        />
        <Catalog />
      </Content>
    </AlignedContainer>
  );
};

export default WhatWeDo;
