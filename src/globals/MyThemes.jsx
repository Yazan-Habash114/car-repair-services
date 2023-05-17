import { ThemeProvider } from "styled-components";

const MyThemeProvider = ({ children }) => {
  const customColors = {
    primary: "#ffc513",
    secondary: "#2a2a2a",
    background: "#d9d9d9",
    default: "#fff",
    text: "#000",
  };

  return <ThemeProvider theme={customColors}>{children}</ThemeProvider>;
};

export default MyThemeProvider;
