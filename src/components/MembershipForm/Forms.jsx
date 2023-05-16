import React, { useState } from "react";
import { FormsContainer } from "./FormsContainerStyles";
import SignUpForm from "./SignUpForm/SignUpForm";
import SignInForm from "./SignInForm/SignInForm";
import OverlayContainer from "./OverlayContainer/OverlayContainer";
import styles from "./styles.module.css";

const Forms = () => {
  const [toggleClass, setToggleClass] = useState(false);

  const toggleClassName = () => {
    setToggleClass(!toggleClass);
  };

  return (
    <FormsContainer
      className={toggleClass ? `${styles["right-panel-active"]}` : ""}
    >
      <SignUpForm />
      <SignInForm />
      <OverlayContainer onChildClick={toggleClassName} />
    </FormsContainer>
  );
};

export default Forms;
