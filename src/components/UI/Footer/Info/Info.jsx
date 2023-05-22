import React from "react";
import styled, { useTheme } from "styled-components";
import DarkLayer from "../../DarkLayer/DarkLayer";
import QuarternHeading from "../../../UI/Headings/QuarternHeading";
import { info } from "../data.jsx";
import Row from "../Row/Row";
import Sentence from "../../Sentence/Sentence";

const Container = styled.div`
  background: transparent;
  width: 400px;
  margin-left: 150px;
`;

const Contents = styled.div`
  padding: 3rem 2rem;
`;

const Info = () => {
  const myTheme = useTheme();
  return (
    <Container>
      <DarkLayer>
        <Contents>
          <QuarternHeading text="Contact Info" theme={myTheme.default} />
          {info.map(({ icon, text }, index) => (
            <Row key={index}>
              {icon}
              <Sentence
                text={text}
                theme={myTheme.default}
                margin="0 0 0 0.5rem"
              />
            </Row>
          ))}
        </Contents>
      </DarkLayer>
    </Container>
  );
};

export default Info;
