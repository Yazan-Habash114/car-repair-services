import React, { useState, useReducer } from "react";
import styles from "../styles.module.css";
import SubmitButton from "../../UI/Buttons/SubmitButton";
import SecondaryHeading from "../../UI/Headings/SecondaryHeading";
import Form from "../Form/Form";
import FormInput from "../Input/FormInput";
import { loginReducer } from "./loginReducer";
import { axiosInstance } from "../../../globals/axiosInstance";
import Sentence from "../../UI/Sentence/Sentence";
import { useTheme } from "styled-components";
import cryptoJS from "crypto-js";
import { useCookies } from "react-cookie";

const SignInForm = () => {
  const [cookies, setCookie] = useCookies(["token", "id"]);

  const [error, setError] = useState(false);

  const initialStates = {
    email: "",
    password: "",
  };

  const [data, dispatch] = useReducer(loginReducer, initialStates);

  const handleChange = (e, type, inputName) => {
    dispatch({ type: type, [inputName]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const driver = [data.email, data.password];
    const response = await axiosInstance.post(
      "/users/login",
      JSON.stringify(driver),
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Accept: "application/json",
        },
      }
    );
    if (response.data == -1) setError(true);
    else {
      setCookie("id", response.data, { path: "/" });
      setCookie("token", cryptoJS.MD5(data.password).toString(), {
        path: "/",
      });
      setError(false);
    }
  };

  const myTheme = useTheme();

  return (
    <div className={styles["sign-in"]}>
      <Form action="#">
        <SecondaryHeading text={"Sign in"} fontSize="32px" />
        <FormInput
          type="email"
          placeholder="Email"
          required
          onChangeHandler={(e) => handleChange(e, "setEmail", "email")}
        />
        <FormInput
          type="password"
          placeholder="Password"
          required
          onChangeHandler={(e) => handleChange(e, "setPassword", "password")}
        />
        {error && (
          <Sentence
            text="Email or password is not correct"
            theme={myTheme.primary}
          />
        )}
        <SubmitButton
          text={"Sign in"}
          onClickHandler={(e) => handleSubmit(e)}
        />
      </Form>
    </div>
  );
};

export default SignInForm;
