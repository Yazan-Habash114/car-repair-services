import TestTheme from "./components/TestTheme";
import MyThemeProvider from "./globals/MyThemes";

const App = () => {
  return (
    <MyThemeProvider>
      <TestTheme />
    </MyThemeProvider>
  );
};

export default App;
