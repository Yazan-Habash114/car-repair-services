import React from "react";
import styled from "styled-components";
import SecondaryHeading from "../../../UI/Headings/SecondaryHeading";
import { Landscape } from "../../../../globals/responsive";

const Container = styled.div`
  border-radius: 5px;
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 10px 40px;
  background-color: ${(props) => props.theme.background};
  text-align: center;

  ${Landscape({ flexDirection: "column" })}
`;

const Contents = styled.div`
  display: flex;
  ${Landscape({ flexDirection: "column" })};
`;

const Filter = styled.button`
  margin: 10px;
  font-size: 20px;
  cursor: pointer;
  padding: 10px 25px;
  border: none;
  background-color: ${(props) =>
    props.selectedFilters.includes(props.filter)
      ? props.theme.secondary
      : props.theme.primary};
  color: ${(props) =>
    props.selectedFilters.includes(props.filter)
      ? props.theme.default
      : props.theme.secondary};
  border-radius: 5px;
  transition: 0.3s;

  &:active {
    transform: scale(0.9);
  }
`;

const Filters = ({ selectedFilters, setSelectedFilters }) => {
  const handleClick = (e) => {
    const filterName = e.target.innerHTML;
    let copyFilters = [...selectedFilters];
    if (!copyFilters.includes(filterName)) copyFilters.push(filterName);
    else copyFilters = copyFilters.filter((e) => e !== filterName);
    console.log(copyFilters);
    setSelectedFilters(copyFilters);
  };

  const filters = ["Maintenance", "Electrical", "Washing"];

  return (
    <Container>
      <SecondaryHeading text="Filter the services" />
      <Contents>
        {filters.map((filter, index) => (
          <Filter
            key={index}
            filter={filter}
            selectedFilters={selectedFilters}
            onClick={(e) => handleClick(e)}
          >
            {filter}
          </Filter>
        ))}
      </Contents>
    </Container>
  );
};

export default Filters;
