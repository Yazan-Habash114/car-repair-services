import { ThemeProvider } from "styled-components";

const MyThemeProvider = ({ children }) => {
  const customColors = {
    primary: "#2A2A2A",
    secondary: "#FFC513",
    background: "#D9D9D9",
    default: "#fff",
  };

  return <ThemeProvider theme={customColors}>{children}</ThemeProvider>;
};

export default MyThemeProvider;
