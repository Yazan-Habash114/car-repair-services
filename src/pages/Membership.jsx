import React from "react";
import Forms from "../components/MembershipForm/Forms";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: ${window.innerHeight}px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/images/slider-img-1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;

const Membership = () => {
  return (
    <Container>
      <Forms />
    </Container>
  );
};

export default Membership;
