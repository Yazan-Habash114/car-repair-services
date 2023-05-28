import MyThemeProvider from "./globals/MyThemes";
import Router from "./routes/Router";
import { CookiesProvider } from "react-cookie";

const App = () => {
  return (
    <MyThemeProvider>
      <CookiesProvider>
        <Router />
      </CookiesProvider>
    </MyThemeProvider>
  );
};

export default App;
