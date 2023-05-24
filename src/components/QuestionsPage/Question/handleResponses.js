export const handleResponseKB = (response) => {
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
  return temp;
};

export const handleResponseDT = (response) => {
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
  return temp;
};
