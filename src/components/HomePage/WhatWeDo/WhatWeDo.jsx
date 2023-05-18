import React from "react";
import styled from "styled-components";
import MainHeading from "../../UI/Headings/MainHeading";
import Sentence from "../../UI/Sentence/Sentence";
import AlignedContainer from "../../UI/AlignedContainer/AlignedContainer";
import Catalog from "./Catalog/Catalog";

const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
`;

const WhatWeDo = () => {
  return (
    <AlignedContainer>
      <Content>
        <MainHeading text="What We Do" />
        <Sentence
          classStyle="section-par"
          text="We offer full service auto repair & maintenance"
        />
        <Catalog />
      </Content>
    </AlignedContainer>
  );
};

export default WhatWeDo;
