import { ThemeProvider } from "styled-components";
import { AppRoutes } from "../routes/AppRoutes";
import theme from "./theme/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
