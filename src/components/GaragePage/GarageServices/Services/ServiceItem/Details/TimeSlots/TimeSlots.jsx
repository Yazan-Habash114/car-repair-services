import React from "react";
import styled, { useTheme } from "styled-components";
import QuarternHeading from "../../../../../../UI/Headings/QuarternHeading";
import Sentence from "../../../../../../UI/Sentence/Sentence";
import RegularButton from "../../../../../../UI/Buttons/RegularButton";

const Container = styled.div`
  margin-left: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const Slot = styled.div`
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

const TimeSlots = ({ slots }) => {
  const myTheme = useTheme();
  return (
    <Container>
      {slots.map(({ slotTimeID, date, startTime, endTime }) => (
        <Slot>
          <Row>
            <QuarternHeading text="Date:" />
            <Sentence text={date} margin="0 0 0 10px" />
          </Row>
          <Row>
            <QuarternHeading text="Start time:" />
            <Sentence text={startTime} margin="0 0 0 10px" />
          </Row>
          <Row>
            <QuarternHeading text="End time:" />
            <Sentence text={endTime} margin="0 0 0 10px" />
          </Row>
          <RegularButton
            text="Book this service"
            onClickHandler={() => alert("clicked")}
            onHover={myTheme.primary}
          />
        </Slot>
      ))}
    </Container>
  );
};

export default TimeSlots;
