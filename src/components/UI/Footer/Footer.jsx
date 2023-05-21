import React from "react";
import styled from "styled-components";
import Info from "./Info/Info";

const Container = styled.footer`
  background-image: url("/images/Footer/Footer.png");
  margin-top: 200px;
`;

const Footer = () => {
  return (
    <Container>
      <Info />
    </Container>
  );
};

export default Footer;
