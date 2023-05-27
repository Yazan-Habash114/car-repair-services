export const reducer = (state, action) => {
  switch (action.type) {
    case "setFinish":
      return { ...state, finish: true };
    case "setNextId":
      return { ...state, nextId: action.nextId };
    case "setAssertions":
      return { ...state, assertions: action.assertions };
    case "setKB":
      return { ...state, KB: action.KB };
    case "setDecisionTree":
      return { ...state, decisionTree: action.decisionTree };
    case "setInferences":
      return { ...state, inferences: action.inferences };
    case "setCarType":
      return { ...state, carType: action.carType };
    case "setProblem":
      return { ...state, problem: action.problem };
    default:
      throw new Error();
  }
  return state;
};
