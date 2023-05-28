import React from "react";
import styled, { useTheme } from "styled-components";
import MainHeading from "../../UI/Headings/MainHeading";
import SecondaryHeading from "../../UI/Headings/SecondaryHeading";
import { useNavigate } from "react-router-dom";

const Content = styled.div`
  height: 80vh;
  background-image: url("/images/HowItWorks/HowItWorks.png");
  background-attachment: fixed;
  padding: 400px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
  font-size: 20px;
  padding: 10px 40px;
  margin: 40px 0;
  border-radius: 5px;
  transition: 300ms;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.background};
  }

  &:active {
    transform: scale(0.9);
  }
`;

const NotFound404 = () => {
  const myTheme = useTheme();
  const navigate = useNavigate();

  return (
    <Content>
      <MainHeading text="404" theme={myTheme.primary} fontSize="128px" />
      <SecondaryHeading
        text="The requested page does not exist"
        theme={myTheme.primary}
      />
      <Button onClick={() => navigate("/")}>Return to Home Page</Button>
    </Content>
  );
};

export default NotFound404;
