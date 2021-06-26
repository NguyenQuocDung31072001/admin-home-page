import React from "react";
import "./App.css";
import RouteApp from "./page/route";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <RouteApp />
      </div>
    </ThemeProvider>
  );
}
export default App;
