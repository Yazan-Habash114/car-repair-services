import React, { useState, useEffect } from "react";
import styled, { useTheme } from "styled-components";
import Sentence from "../../UI/Sentence/Sentence";
import Choices from "./Choices/Choices";
import RegularButton from "../../UI/Buttons/RegularButton";
import { axiosInstance } from "../../../globals/axiosInstance";
import { forwardChain } from "../../../globals/forwardChain.js";
import TernaryHeading from "../../UI/Headings/TernaryHeading";

const Container = styled.div`
  width: 100%;
  margin: 1rem 0;
  padding: 1rem 4rem;
  background-color: ${(props) => props.theme.background};
  border-radius: 5px;
  box-shadow: 0 0 15px 3px ${(props) => props.theme.background};
  text-align: center;
`;

const Question = () => {
  const myTheme = useTheme();

  // States
  const [finish, setFinish] = useState(false);
  const [nextId, setNextId] = useState(0);
  const [assertions, setAssertions] = useState([]);
  const [KB, setKB] = useState([]);
  const [decisionTree, setDecisionTree] = useState([]);
  const [inferences, setInferences] = useState([]);

  // Info to maps
  const [carType, setCarType] = useState("");
  const [problem, setProblem] = useState("all");

  useEffect(() => {
    // Get KB
    axiosInstance.get("/gatAllKB/").then((response) => {
      let temp = [];
      response.data.map((row) => {
        let getRule = JSON.parse(row.rule);
        let obj = {
          id: row.id,
          premises: getRule.premises,
          conclusion: getRule.conclusion,
        };
        temp.push(obj);
      });
      setKB(temp);
    });

    // Get Decision-Tree
    axiosInstance.get(`/getAllQuestions`).then((response) => {
      let temp = [];
      response.data.map((row) => {
        let getQuestion = JSON.parse(row.question);
        let obj = {
          id: row.id,
          questionAttribute: getQuestion.questionAttribute,
          questionText: getQuestion.questionText,
          choices: [...getQuestion.choices],
        };
        temp.push(obj);
      });
      setDecisionTree(temp);
    });
  }, []);

  const matching = () => {
    setCarType(assertions[1].value); // From first assertion
    let response = forwardChain(KB, assertions);
    for (let i = 0; i < response.inferences.length; i += 1) {
      console.log(response.inferences[i]);
      if (
        response.inferences[i].attribute == "Maintenance" ||
        response.inferences[i].attribute == "Electrical"
      ) {
        setProblem(response.inferences[i].attribute);
      }
    }
    setInferences(response.inferences);
  };

  useEffect(() => {
    if (finish) {
      matching();
    }
  }, [finish]);

  const handleChoiceClick = (choice) => {
    let assertionsCopy = [...assertions];
    assertionsCopy.push({
      attribute: decisionTree[nextId].questionAttribute,
      value: choice.choiceText,
    });
    setAssertions(assertionsCopy);
    for (let i = 0; i < decisionTree.length; i += 1) {
      if (decisionTree[i].id == choice.nextQuestion) {
        setNextId(i);
      } else if (choice.nextQuestion < 0) {
        setFinish(true);
      }
    }
  };

  return (
    <Container>
      {/* <Sentence text="Question text" fontSize="24px" />
      <Choices />
      <RegularButton
        text="Back"
        theme={myTheme.secondary}
        margin="1rem 0.5rem"
      />
      <RegularButton
        text="Next"
        background={myTheme.primary}
        margin="1rem 0.5rem"
      /> */}
      {finish && (
        <div>
          <Sentence
            text="Thanks for your time, we recognized your problem and help you to
            choose a garage"
          />
          <Sentence
            text={`The car type is ${carType}, your problem is ${problem}`}
          />
          <RegularButton text="Go to the map" />
          <Sentence text="Results & Solutions" />
          {inferences.length < 1 ? (
            <Sentence text="No inferences concluded" />
          ) : null}
          {inferences.map((inference, index) => {
            return (
              <div>
                <TernaryHeading text={`Result ${index + 1}:`} />
                <Sentence text={`Inference: ${inference.attribute}`} />
                <Sentence text={`Details: ${inference.value}`} />
              </div>
            );
          })}
        </div>
      )}

      {/* User Interface */}
      {decisionTree.length != 0 && nextId > -1 && !finish ? (
        <div>
          <Sentence text={decisionTree[nextId].questionText} fontSize="24px" />
          {decisionTree[nextId].choices.map((choice, index) => {
            return (
              <button key={index} onClick={() => handleChoiceClick(choice)}>
                {choice.choiceText}
              </button>
            );
          })}
        </div>
      ) : null}
    </Container>
  );
};

export default Question;
