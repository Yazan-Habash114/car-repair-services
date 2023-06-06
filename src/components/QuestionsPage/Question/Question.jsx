import React, { useEffect, useRef, useReducer } from "react";
import styled from "styled-components";
import Sentence from "../../UI/Sentence/Sentence";
import Choices from "./Choices/Choices";
import { axiosInstance } from "../../../globals/axiosInstance";
import { forwardChain } from "../../../globals/forwardChain.js";
import { handleResponseDT, handleResponseKB } from "./handleResponses";
import Conclusion from "../Conclusion/Conclusion";
import { reducer } from "./reducer";
import { Mobile } from "../../../globals/responsive";

const Container = styled.div`
  width: 100%;
  margin: 1rem 0;
  padding: 1rem 4rem;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  text-align: center;

  ${Mobile({ padding: "1rem" })}
`;

const Question = () => {
  const previous = useRef(-1);

  const initialStates = {
    finish: false,
    nextId: 0,
    assertions: [],
    KB: [],
    decisionTree: [],
    inferences: [],
    carType: "",
    problem: "all",
  };

  const [data, dispatch] = useReducer(reducer, initialStates);

  useEffect(() => {
    // Get Knowledge Base
    axiosInstance
      .get("/gatAllKB/")
      .then((response) =>
        dispatch({ type: "setKB", KB: handleResponseKB(response) })
      );

    // Get Decision-Tree
    axiosInstance.get(`/getAllQuestions`).then((response) =>
      dispatch({
        type: "setDecisionTree",
        decisionTree: handleResponseDT(response),
      })
    );
  }, []);

  useEffect(() => {
    if (data.finish) {
      dispatch({ type: "setCarType", carType: data.assertions[1].value });
      let response = forwardChain(data.KB, data.assertions);
      for (let i = 0; i < response.inferences.length; i += 1) {
        if (
          response.inferences[i].attribute == "Maintenance" ||
          response.inferences[i].attribute == "Electrical"
        ) {
          dispatch({
            type: "setProblem",
            problem: response.inferences[i].attribute,
          });
        }
      }
      dispatch({ type: "setInferences", inferences: response.inferences });
    }
  }, [data.finish]);

  const handleNextChoice = (choice) => {
    previous.current = data.nextId;
    let assertionsCopy = [...data.assertions];
    assertionsCopy.push({
      attribute: data.decisionTree[data.nextId].questionAttribute,
      value: choice.choiceText,
    });
    dispatch({ type: "setAssertions", assertions: assertionsCopy });
    for (let i = 0; i < data.decisionTree.length; i += 1) {
      if (data.decisionTree[i].id == choice.nextQuestion) {
        dispatch({ type: "setNextId", nextId: i });
      } else if (choice.nextQuestion < 0) {
        dispatch({ type: "setFinish" });
      }
    }
  };

  const handlePreviousChoice = () => {
    const currentValue = previous.current;
    if (currentValue > -1) {
      previous.current = currentValue - 1;
      let assertionsCopy = [...data.assertions];
      assertionsCopy.pop();
      dispatch({ type: "setAssertions", assertions: assertionsCopy });
      dispatch({ type: "setNextId", nextId: currentValue });
    }
  };

  return (
    <Container>
      {data.finish && (
        <Conclusion
          inferences={data.inferences}
          carType={data.carType}
          problem={data.problem}
        />
      )}

      {data.decisionTree.length != 0 && data.nextId > -1 && !data.finish && (
        <>
          <Sentence
            text={data.decisionTree[data.nextId].questionText}
            fontSize="24px"
          />
          <Choices
            decisionTree={data.decisionTree}
            nextId={data.nextId}
            handleNextChoice={handleNextChoice}
            handlePreviousChoice={handlePreviousChoice}
          />
        </>
      )}
    </Container>
  );
};

export default Question;
