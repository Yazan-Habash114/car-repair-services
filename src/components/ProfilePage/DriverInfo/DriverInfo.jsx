import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { axiosInstance } from "../../../globals/axiosInstance";
import InfoItem from "./InfoItem/InfoItem";
import Sentence from "../../UI/Sentence/Sentence";
import { Landscape } from "../../../globals/responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faSignature,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  border-left: 3px solid ${(props) => props.theme.primary};
  border-right: 3px solid ${(props) => props.theme.primary};
  padding: 1.8rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.8rem;

  ${Landscape({ marginTop: "30px" })}
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const DriverInfo = ({ driverId }) => {
  const [driver, setDriver] = useState({});

  useEffect(() => {
    axiosInstance.get(`/users/${driverId}`).then(({ data }) =>
      setDriver({
        driverName: data.username,
        driverEmail: data.email,
        driverPhone: data.phone_number,
      })
    );
  }, []);

  const { driverName, driverEmail, driverPhone } = driver;

  const data = [
    {
      icon: faSignature,
      value: driverName,
    },
    {
      icon: faEnvelope,
      value: driverEmail,
    },
    {
      icon: faPhone,
      value: driverPhone,
    },
  ];

  return (
    <Container>
      <Contents>
        {data.map(({ icon, value }, index) => (
          <InfoItem key={index}>
            <FontAwesomeIcon icon={icon} />
            <Sentence text={value} margin="0 0 0 1.2rem" />
          </InfoItem>
        ))}
      </Contents>
    </Container>
  );
};

export default DriverInfo;
