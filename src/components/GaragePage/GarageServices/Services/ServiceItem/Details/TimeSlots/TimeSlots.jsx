import React from "react";
import styled from "styled-components";
import Slot from "./Slot/Slot";

const Container = styled.div`
  margin-left: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const TimeSlots = ({ service, slots }) => {
  return (
    <Container>
      {slots.map((item) => (
        <Slot key={item.slotTimeID} item={item} service={service} />
      ))}
    </Container>
  );
};

export default TimeSlots;
