import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Home from "./pages/Home";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
