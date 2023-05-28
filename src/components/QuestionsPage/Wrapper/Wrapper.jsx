import React from "react";
import styled, { useTheme } from "styled-components";
import AlignedContainer from "../../UI/AlignedContainer/AlignedContainer";
import SecondaryHeading from "../../UI/Headings/SecondaryHeading";
import Sentence from "../../UI/Sentence/Sentence";
import Question from "../Question/Question";

const Container = styled.section`
  margin-top: 100px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  text-align: center;
`;

const Wrapper = () => {
  const myTheme = useTheme();

  return (
    <Container>
      <AlignedContainer>
        <Contents>
          <SecondaryHeading
            text="Problem Diagnosis Section"
            fontSize="40px"
            theme={myTheme.primary}
          />
          <Sentence
            text="Please answer all the following questions to recognize your problem"
            fontSize="24px"
            margin="1rem 0"
          />
          <Question />
        </Contents>
      </AlignedContainer>
    </Container>
  );
};

export default Wrapper;
