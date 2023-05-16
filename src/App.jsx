import MyThemeProvider from "./globals/MyThemes";
import Router from "./routes/Router";

const App = () => {
  return (
    <MyThemeProvider>
      <Router />
    </MyThemeProvider>
  );
};

export default App;
