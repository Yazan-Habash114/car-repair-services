import React from "react";
import sentenceStyles from "./sentenceStyles.module.css";

const Sentence = ({ text, classStyle }) => {
  return <p className={sentenceStyles[classStyle]}>{text}</p>;
};

export default Sentence;
