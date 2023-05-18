import React from "react";
import styled from "styled-components";

const Item = styled.li`
  list-style-type: none;
  color: ${(props) => props.theme.default};
  margin: 0.2rem 0;
`;

const ListItem = ({ text }) => {
  return <Item>{text}</Item>;
};

export default ListItem;
