import React from "react";
import styles from "../styles.module.css";
import SubmitButton from "../Buttons/SubmitButton";
import MainHeading from "../Headings/MainHeading";
import Form from "../Form/Form";
import FormInput from "../Input/FormInput";

const SignInForm = () => {
  return (
    <div className={styles["sign-in"]}>
      <Form action="#">
        <MainHeading text={"Sign in"} />
        <FormInput type="email" placeholder="Email" required />
        <FormInput type="password" placeholder="Password" required />
        <SubmitButton text={"Sign in"} />
      </Form>
    </div>
  );
};

export default SignInForm;
