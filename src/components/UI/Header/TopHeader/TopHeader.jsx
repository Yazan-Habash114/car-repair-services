import React from "react";
import styled, { useTheme } from "styled-components";
import Logo from "../Logo/Logo";
import Sentence from "../../Sentence/Sentence";
import { Mobile } from "../../../../globals/responsive";
import BurgerList from "../Navbar/BurgerList/BurgerList";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  background-color: ${(props) => props.theme.secondary};

  ${Mobile({ padding: "1rem" })}
`;

const TopHeader = ({ handleShowNavItems }) => {
  const myTheme = useTheme();

  return (
    <Container>
      <Logo source="/images/Logo/logo.png" />
      <Sentence
        text="Schedule your appointment"
        fontWeight={300}
        theme={myTheme.default}
      />
      <BurgerList handleShowNavItems={handleShowNavItems} />
    </Container>
  );
};

export default TopHeader;
