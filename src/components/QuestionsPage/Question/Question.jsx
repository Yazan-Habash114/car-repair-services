import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Sentence from "../../UI/Sentence/Sentence";
import Choices from "./Choices/Choices";
import { axiosInstance } from "../../../globals/axiosInstance";
import { forwardChain } from "../../../globals/forwardChain.js";
import { handleResponseDT, handleResponseKB } from "./handleResponses";
import Conclusion from "../Conclusion/Conclusion";

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
    axiosInstance
      .get("/gatAllKB/")
      .then((response) => setKB(handleResponseKB(response)));

    // Get Decision-Tree
    axiosInstance
      .get(`/getAllQuestions`)
      .then((response) => setDecisionTree(handleResponseDT(response)));
  }, []);

  useEffect(() => {
    if (finish) {
      setCarType(assertions[1].value);
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
    }
  }, [finish]);

  const handleNextChoice = (choice) => {
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
      {finish && (
        <Conclusion
          inferences={inferences}
          carType={carType}
          problem={problem}
        />
      )}

      {decisionTree.length != 0 && nextId > -1 && !finish && (
        <>
          <Sentence text={decisionTree[nextId].questionText} fontSize="24px" />
          <Choices
            decisionTree={decisionTree}
            nextId={nextId}
            handleNextChoice={handleNextChoice}
          />
        </>
      )}
    </Container>
  );
};

export default Question;
