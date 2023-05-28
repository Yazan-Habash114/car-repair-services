import React, { useEffect } from "react";
import styled from "styled-components";
import "./styles.css";
import { init_map, submitButtonHandler } from "./TomTom";

const Container = styled.div`
  height: ${() => window.innerHeight}px;
  width: ${(props) => props.width};
  border-radius: ${(props) => props.borderRadius};
  position: relative;
`;

const Map = () => {
  useEffect(() => {
    var problem = new URL(window.location).pathname.split("/")[2];
    var carType = new URL(window.location).pathname.split("/")[3];
    init_map(problem, carType);
  }, []);

  return (
    <Container id="map" width="100%" height="100%" borderRadius="5px">
      <div id="labels-container">
        <label>Find the garage that will arrive fastest</label>
        <div id="route-labels"></div>
        <input
          type="button"
          id="submit-button"
          value="Submit"
          onClick={submitButtonHandler}
        />
      </div>
      <div id="modal">
        <div id="modal-content"></div>
      </div>
    </Container>
  );
};

export default Map;
