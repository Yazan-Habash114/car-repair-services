import React from "react";
import styled from "styled-components";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Landscape } from "../../../../../globals/responsive";

const Container = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 3.2rem;
  height: 3.2rem;
  font-size: 1.4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  display: none;
  background-color: ${(props) => props.theme.background};

  ${Landscape({ display: "flex" })}
`;

const BurgerList = ({ handleShowNavItems }) => {
  return (
    <Container onClick={handleShowNavItems}>
      <FontAwesomeIcon icon={faBars} />
    </Container>
  );
};

export default BurgerList;
