import React from "react";
import styled from "styled-components";
import Info from "./Info/Info";
import { Tablet } from "../../../globals/responsive";

const Container = styled.footer`
  background-image: url("/images/Footer/Footer.png");
  background-size: cover;
  margin-top: 200px;

  ${Tablet({ display: "flex", justifyContent: "center" })}
`;

const Footer = () => {
  return (
    <Container>
      <Info />
    </Container>
  );
};

export default Footer;
