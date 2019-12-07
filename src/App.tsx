import React from "react";
import "normalize.css";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import { ThemeProvider } from "styled-components";
import { StoreProvider } from "./store";

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <StoreProvider>
      <Router history={history}>
        <ThemeProvider theme={{}}></ThemeProvider>
      </Router>
    </StoreProvider>
  );
};

export default App;
