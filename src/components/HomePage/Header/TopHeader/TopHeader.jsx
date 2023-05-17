import React from "react";
import styled from "styled-components";
import Logo from "../Logo/Logo";
import Sentence from "../../../UI/Sentence/Sentence";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  background-color: ${(props) => props.theme.secondary};
`;

const TopHeader = () => {
  return (
    <Container>
      <Logo />
      <Sentence
        text="Schedule your appointment"
        classStyle="regular-text-white"
      />
    </Container>
  );
};

export default TopHeader;
