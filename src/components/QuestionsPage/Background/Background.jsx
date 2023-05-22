import React from "react";
import styled from "styled-components";
import Header from "../../UI/Header/Header";

const Container = styled.div`
  background-image: url("/images/Diagnosis/Diagnosis.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 80vh;
`;

const Background = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

export default Background;
