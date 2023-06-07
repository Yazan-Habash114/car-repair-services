import React, { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";
import AlignedContainer from "../../UI/AlignedContainer/AlignedContainer";
import SecondaryHeading from "../../UI/Headings/SecondaryHeading";
import { Landscape } from "../../../globals/responsive";
import { axiosInstance } from "../../../globals/axiosInstance";
import { useCookies } from "react-cookie";
import Sentence from "../../UI/Sentence/Sentence";
import ServiceBooked from "./ServiceBooked/ServiceBooked";

const Container = styled.div`
  border-radius: 5px;
  margin-top: 100px;
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

const Box = styled.div`
  display: flex;
  padding: 1.8rem;
`;

const BookedServices = () => {
  const [cookies, setCookie] = useCookies(["id"]);

  const [bookedServices, setBookedServices] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(`/users/${cookies.id}/bookedServices`)
      .then((response) => setBookedServices(response.data));
  }, []);

  const myTheme = useTheme();

  return (
    <AlignedContainer>
      <Container>
        <SecondaryHeading
          text="My Booked Services"
          fontSize="36px"
          theme={myTheme.secondary}
        />

        <Box>
          {bookedServices.map((service) => (
            <ServiceBooked key={service.serviceID} service={service} />
          ))}
        </Box>

        {bookedServices.length == 0 && (
          <Sentence
            text="No booked services"
            fontSize="20px"
            margin="1.8rem 0"
          />
        )}
      </Container>
    </AlignedContainer>
  );
};

export default BookedServices;
