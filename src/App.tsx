import React from "react";
import "normalize.css";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import { ThemeProvider } from "styled-components";
import { StoreProvider } from "./store";

import Api from "api";
import { Types } from "./models/exercise";
import { Page } from "components";

const history = createBrowserHistory();
const api = new Api();

const App: React.FC = () => {
  return (
    <StoreProvider>
      <Router history={history}>
        <ThemeProvider theme={{}}>
          <Page />
        </ThemeProvider>
      </Router>
    </StoreProvider>
  );
};

export default App;
