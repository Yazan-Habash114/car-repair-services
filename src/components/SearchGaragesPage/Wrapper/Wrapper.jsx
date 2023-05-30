import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AlignedContainer from "../../UI/AlignedContainer/AlignedContainer";
import TopSection from "../TopSection/TopSection";
import Cards from "../Cards/Cards";
import { axiosInstance } from "../../../globals/axiosInstance";
import { useRef } from "react";

const Container = styled.main`
  padding-top: 300px;
`;

const Wrapper = () => {
  const garagesRef = useRef([]);
  const [garages, setGarages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    axiosInstance.get(`/garages`).then(({ data }) => {
      garagesRef.current = data;
      setGarages(data);
    });
  }, []);

  useEffect(() => {
    let copyGarages = [...garagesRef.current];
    copyGarages = copyGarages.filter(({ garageName }) =>
      garageName.includes(inputValue)
    );
    setGarages(copyGarages);
  }, [inputValue]);

  const handleInputSearch = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <AlignedContainer>
      <Container>
        <TopSection onSearchChange={handleInputSearch} />
        {garages && <Cards garages={garages} />}
      </Container>
    </AlignedContainer>
  );
};

export default Wrapper;
