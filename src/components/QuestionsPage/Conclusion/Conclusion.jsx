import React from "react";
import TernaryHeading from "../../UI/Headings/TernaryHeading";
import QuarternHeading from "../../UI/Headings/QuarternHeading";
import Sentence from "../../UI/Sentence/Sentence";
import RegularButton from "../../UI/Buttons/RegularButton";
import Results from "./Results/Results";
import { useNavigate } from "react-router-dom";

const Conclusion = ({ inferences, carType, problem }) => {
  const navigate = useNavigate();

  return (
    <div>
      <TernaryHeading
        text="Thanks for your time, we recognized your problem and help you to
            choose a garage"
      />
      <Sentence
        text={`The car type is ${carType}, your problem is ${problem}`}
        margin="1.2rem 0 0 0"
      />
      <RegularButton
        text="Go to the map"
        onClickHandler={() => navigate(`/map/${problem}/${carType}`)}
      />
      <QuarternHeading text="Results & Solutions" />
      <Results inferences={inferences} />
    </div>
  );
};

export default Conclusion;
