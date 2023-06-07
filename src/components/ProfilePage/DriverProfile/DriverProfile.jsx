import React from "react";
import styled from "styled-components";
import DriverImage from "../DriverImage/DriverImage";
import { useCookies } from "react-cookie";
import DriverInfo from "../DriverInfo/DriverInfo";
import { Landscape } from "../../../globals/responsive";
import AlignedContainer from "../../UI/AlignedContainer/AlignedContainer";

const Container = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 5px;
  margin-top: 250px;
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${Landscape({
    padding: "3.2rem 1.8rem",
    flexDirection: "column",
    alignItems: "center",
  })}
`;

const DriverProfile = () => {
  const [cookies] = useCookies(["id"]);

  return (
    <AlignedContainer>
      <Container>
        <DriverImage driverId={cookies.id} />
        <DriverInfo driverId={cookies.id} />
      </Container>
    </AlignedContainer>
  );
};

export default DriverProfile;
