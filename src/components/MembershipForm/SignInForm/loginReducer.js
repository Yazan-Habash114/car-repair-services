export const loginReducer = (state, action) => {
  switch (action.type) {
    case "setEmail":
      return { ...state, email: action.email };
    case "setPassword":
      return { ...state, password: action.password };
  }
};
