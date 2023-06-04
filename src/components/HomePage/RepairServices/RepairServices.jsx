import React from "react";
import styled, { useTheme } from "styled-components";
import AlignedContainer from "../../UI/AlignedContainer/AlignedContainer";
import Column from "./Column/Column";
import TernaryHeading from "../../UI/Headings/TernaryHeading";
import Sentence from "../../UI/Sentence/Sentence";
import RegularButton from "../../UI/Buttons/RegularButton";
import ServicesList from "./List/ServicesList";
import { servicesData } from "./data";
import DarkLayer from "../../UI/DarkLayer/DarkLayer";
import { MediumScreen } from "../../../globals/responsive";

const Container = styled.section`
  margin: 120px auto;
  background-image: url("/images/RepairServices/Repair.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;

  ${MediumScreen({
    flexDirection: "column",
    alignItems: "center",
  })}
`;

const RepairServices = () => {
  const myTheme = useTheme();
  return (
    <Container>
      <DarkLayer>
        <AlignedContainer>
          <Content>
            <Column>
              <TernaryHeading
                text="Repair Services"
                theme={myTheme.default}
                fontSize="32px"
              />
              <TernaryHeading
                text="That We Offer"
                theme={myTheme.primary}
                fontSize="32px"
              />
              <Sentence
                text="We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes everything from struts, shocks, and tie rod ends to ball joints, springs, and basically everything that is included in repairing the front end of the vehicle."
                margin="1rem 0 0 0"
                theme={myTheme.default}
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
