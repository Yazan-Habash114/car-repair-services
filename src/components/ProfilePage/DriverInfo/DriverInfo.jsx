import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { axiosInstance } from "../../../globals/axiosInstance";
import InfoItem from "./InfoItem/InfoItem";
import Sentence from "../../UI/Sentence/Sentence";
import { Tablet } from "../../../globals/responsive";

const Container = styled.div`
  background-color: ${(props) => props.theme.primary};
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${Tablet({ marginTop: "30px" })}
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
      key: "Name",
      value: driverName,
    },
    {
      key: "Email",
      value: driverEmail,
    },
    {
      key: "Phone number",
      value: driverPhone,
    },
  ];

  return (
    <Container>
      <Contents>
        {data.map(({ key, value }) => (
          <InfoItem>
            <Sentence text={`${key}:`} margin="0 10px 0 0" />
            <Sentence text={value} />
          </InfoItem>
        ))}
      </Contents>
    </Container>
  );
};

export default DriverInfo;
