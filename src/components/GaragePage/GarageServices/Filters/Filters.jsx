import React from "react";
import styled from "styled-components";
import SecondaryHeading from "../../../UI/Headings/SecondaryHeading";
import { Landscape } from "../../../../globals/responsive";

const Container = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 5px;
  margin-bottom: 30px;
  padding: 1.8rem 3.2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  ${Landscape({ flexDirection: "column" })}
`;

const Contents = styled.div`
  display: flex;
  ${Landscape({ flexDirection: "column" })};
`;

const Filter = styled.button`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin: 10px;
  font-size: 20px;
  cursor: pointer;
  padding: 10px 25px;
  border: none;
  background-color: ${(props) =>
    props.selectedFilters.includes(props.filter) ? props.theme.secondary : ""};
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
      <SecondaryHeading text="Filter the Services" />
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
