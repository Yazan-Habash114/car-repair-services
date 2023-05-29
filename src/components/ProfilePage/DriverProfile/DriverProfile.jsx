import React from "react";
import styled from "styled-components";
import DriverImage from "../DriverImage/DriverImage";
import { useCookies } from "react-cookie";
import DriverInfo from "../DriverInfo/DriverInfo";
import { Tablet } from "../../../globals/responsive";

const Container = styled.div`
  background-color: ${(props) => props.theme.background};
  border-radius: 5px;
  padding: 20px;
  display: flex;
  justify-content: space-around;

  ${Tablet({
    padding: "40px 20px",
    flexDirection: "column",
    alignItems: "center",
  })}
`;

const DriverProfile = () => {
  const [cookies] = useCookies(["id"]);

  return (
    <Container>
      <DriverImage driverId={cookies.id} />
      <DriverInfo driverId={cookies.id} />
    </Container>
  );
};

export default DriverProfile;
