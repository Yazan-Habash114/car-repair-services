import React from "react";
import styled, { useTheme } from "styled-components";
import AlignedContainer from "../../UI/AlignedContainer/AlignedContainer";
import Column from "./Column/Column";
import SecondaryHeading from "../../UI/Headings/SecondaryHeading";
import Sentence from "../../UI/Sentence/Sentence";
import RegularButton from "../../UI/Buttons/RegularButton";
import ServicesList from "./List/ServicesList";
import { servicesData } from "./data";
import DarkLayer from "./DarkLayer/DarkLayer";

const Container = styled.section`
  margin-top: 200px;
  background-image: url("/images/RepairServices/Repair.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const RepairServices = () => {
  const myTheme = useTheme();
  return (
    <Container>
      <DarkLayer>
        <AlignedContainer>
          <Content>
            <Column>
              <SecondaryHeading
                text="Repair Services"
                theme={myTheme.default}
              />
              <SecondaryHeading text="That We Offer" theme={myTheme.primary} />
              <Sentence
                text="We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes everything from struts, shocks, and tie rod ends to ball joints, springs, and basically everything that is included in repairing the front end of the vehicle."
                classStyle="paragraph-white"
              />
              <RegularButton
                text="Book an Appointment"
                background="transparent"
                borderColor={myTheme.primary}
                theme={myTheme.default}
              />
            </Column>
            <Column>
              <ServicesList data={servicesData.dataSet1} />
            </Column>
            <Column>
              <ServicesList data={servicesData.dataSet2} />
            </Column>
          </Content>
        </AlignedContainer>
      </DarkLayer>
    </Container>
  );
};

export default RepairServices;
