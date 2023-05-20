import React from "react";
import styles from "../styles.module.css";
import SubmitButton from "../../UI/Buttons/SubmitButton";
import SecondaryHeading from "../../UI/Headings/SecondaryHeading";
import Form from "../Form/Form";
import FormInput from "../Input/FormInput";

const SignInForm = () => {
  return (
    <div className={styles["sign-in"]}>
      <Form action="#">
        <SecondaryHeading text={"Sign in"} fontSize="32px" />
        <FormInput type="email" placeholder="Email" required />
        <FormInput type="password" placeholder="Password" required />
        <SubmitButton text={"Sign in"} />
      </Form>
    </div>
  );
};

export default SignInForm;
