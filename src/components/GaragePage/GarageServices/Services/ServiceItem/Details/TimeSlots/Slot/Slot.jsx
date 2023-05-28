import React, { useContext, useState } from "react";
import styled, { useTheme } from "styled-components";
import QuarternHeading from "../../../../../../../UI/Headings/QuarternHeading";
import Sentence from "../../../../../../../UI/Sentence/Sentence";
import RegularButton from "../../../../../../../UI/Buttons/RegularButton";
import { axiosInstance } from "../../../../../../../../globals/axiosInstance.js";
import { Garage } from "../../../../../../../../pages/GaragePage";

const Container = styled.div`
  margin: 5px;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.default};
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
`;

const Row = styled.div`
  display: flex;
  margin: 5px 0;
  flex-wrap: wrap;
`;

const Slot = ({ service, item }) => {
  const myTheme = useTheme();

  const garage = useContext(Garage);

  const [booked, setBooked] = useState(
    item.booked && item.bookedUserID == 10001
  );

  const handleBooking = () => {
    if (!booked) {
      axiosInstance
        .get(
          `users/10001/garages/${garage.garageID}/services/bookService/${service.serviceID}/slotTime/${item.slotTimeID}`
        )
        .then((response) => {
          item.booked = true;
          item.bookedUserID = 10001;
          setBooked(true);
        });
    } else {
      axiosInstance
        .get(
          `users/10001/garages/${garage.garageID}/services/unBookService/${service.serviceID}/slotTime/${item.slotTimeID}`
        )
        .then((response) => {
          item.booked = false;
          item.bookedUserID = -1;
          setBooked(false);
        });
    }
  };

  return (
    <Container>
      <Row>
        <QuarternHeading text="Date:" />
        <Sentence text={item.date} margin="0 0 0 10px" />
      </Row>
      <Row>
        <QuarternHeading text="Start time:" />
        <Sentence text={item.startTime} margin="0 0 0 10px" />
      </Row>
      <Row>
        <QuarternHeading text="End time:" />
        <Sentence text={item.endTime} margin="0 0 0 10px" />
      </Row>
      <Sentence
        text={booked ? "Booked successfully" : ""}
        theme={myTheme.primary}
      />
      {item.booked && item.bookedUserID == 10001 && (
        <RegularButton
          text="Cancel Booking"
          onClickHandler={handleBooking}
          onHover={myTheme.primary}
        />
      )}

      {item.booked && item.bookedUserID != 10001 && (
        <RegularButton
          text="Reserved"
          onClickHandler={handleBooking}
          onHover={myTheme.primary}
          disabled
        />
      )}

      {!item.booked && (
        <RegularButton
          text="Book at this time"
          onClickHandler={handleBooking}
          onHover={myTheme.primary}
        />
      )}
    </Container>
  );
};

export default Slot;
