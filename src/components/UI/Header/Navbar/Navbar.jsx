import React from "react";
import styled from "styled-components";
import NavItems from "./NavItems/NavItems";
import GetStarted from "./GetStarted/GetStarted";
import RegularButton from "../../../UI/Buttons/RegularButton";
import { Landscape } from "../../../../globals/responsive";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3rem;
  background-color: ${(props) => props.theme.background};

  ${Landscape({ flexDirection: "column" })}
`;

const Navbar = ({ showNavItems }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["id", "token"]);
  const navigate = useNavigate();

  const handleLogout = () => {
    removeCookie("id");
    removeCookie("token");
    navigate("/membership");
  };

  return (
    <Container>
      {showNavItems && <NavItems />}
      {!(cookies.id && cookies.token) && showNavItems && <GetStarted />}
      {cookies.id && cookies.token && showNavItems && (
        <RegularButton
          text="Logout"
          margin="0 3rem;"
          onClickHandler={handleLogout}
        />
      )}
    </Container>
  );
};

export default Navbar;
