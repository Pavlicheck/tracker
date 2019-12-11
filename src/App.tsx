import React from "react";
import "normalize.css";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import { ThemeProvider } from "styled-components";
import { StoreProvider } from "./store";

import Api from "api";

const history = createBrowserHistory();
const api = new Api();

const App: React.FC = props => {
  console.log("props: ", props);
  return (
    <StoreProvider>
      <Router history={history}>
        <ThemeProvider theme={{}}></ThemeProvider>
      </Router>
    </StoreProvider>
  );
};

export default App;
