import React from "react";
import styled, { useTheme } from "styled-components";
import Logo from "../Logo/Logo";
import Sentence from "../../Sentence/Sentence";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  background-color: ${(props) => props.theme.secondary};
`;

const TopHeader = () => {
  const myTheme = useTheme();
  return (
    <Container>
      <Logo />
      <Sentence
        text="Schedule your appointment"
        fontWeight={300}
        theme={myTheme.default}
      />
    </Container>
  );
};

export default TopHeader;
