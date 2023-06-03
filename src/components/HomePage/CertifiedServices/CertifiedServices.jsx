import React from "react";
import styled from "styled-components";
import AlignedContainer from "../../UI/AlignedContainer/AlignedContainer";
import GuaranteeService from "./GuaranteeService/GuaranteeService";
import { guaranteeServices } from "./data";
import Sentence from "../../UI/Sentence/Sentence";
import SecondaryHeading from "../../UI/Headings/SecondaryHeading";
import { Landscape } from "../../../globals/responsive";

const Container = styled.section`
  margin: 120px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 1440px;

  ${Landscape({ alignItems: "center", textAlign: "center" })}
`;

const ServiceDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;

  ${Landscape({ flexDirection: "column" })}
`;

const CertifiedServices = () => {
  return (
    <AlignedContainer>
      <Container>
        <SecondaryHeading
          text="Why Choose Certified Service?"
          fontSize="48px"
        />
        <Sentence
          text="These few steps will help you understand how our services works"
          fontWeight={300}
          fontSize="20px"
          margin="16px 0 0 0"
        />
        <ServiceDiv>
          {guaranteeServices.map((service) => (
            <GuaranteeService
              key={service.title}
              icon={service.icon}
              title={service.title}
              explanation={service.explanation}
            />
          ))}
        </ServiceDiv>
      </Container>
    </AlignedContainer>
  );
};

export default CertifiedServices;
