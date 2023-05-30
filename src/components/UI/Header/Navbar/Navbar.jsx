import React from "react";
import styled from "styled-components";
import NavItems from "./NavItems/NavItems";
import GetStarted from "./GetStarted/GetStarted";
import RegularButton from "../../../UI/Buttons/RegularButton";
import { Tablet } from "../../../../globals/responsive";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  background-color: ${(props) => props.theme.background};

  ${Tablet({ flexDirection: "column" })}
`;

const Navbar = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["id", "token"]);
  const navigate = useNavigate();

  const handleLogout = () => {
    removeCookie("id");
    removeCookie("token");
    navigate("/membership");
  };

  return (
    <Container>
      <NavItems />
      {!(cookies.id && cookies.token) && <GetStarted />}
      {cookies.id && cookies.token && (
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
