import React from "react";
import styled from "styled-components";
import AlignedContainer from "../../UI/AlignedContainer/AlignedContainer";
import GuaranteeService from "./GuaranteeService/GuaranteeService";
import { guaranteeServices } from "./data";
import Sentence from "../../UI/Sentence/Sentence";
import MainHeading from "../../UI/Headings/MainHeading";

const Container = styled.section`
  margin-top: 200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ServiceDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
`;

const CertifiedServices = () => {
  return (
    <AlignedContainer>
      <Container>
        <MainHeading text="Why Choose Certified Service?" />
        <Sentence
          classStyle="section-par"
          text="These few steps will help you understand how our services works"
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
