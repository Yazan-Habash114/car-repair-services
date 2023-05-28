export const signUpReducer = (state, action) => {
  switch (action.type) {
    case "setEmail":
      return { ...state, email: action.email };
    case "setName":
      return { ...state, name: action.name };
    case "setPassword":
      return { ...state, password: action.password };
    case "setPhone":
      return { ...state, phone: action.phone };
  }
};
