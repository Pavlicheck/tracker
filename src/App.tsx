import React from "react";
import "normalize.css";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import { StoreProvider } from "./store";

import { Page } from "components";

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <StoreProvider>
      <Router history={history}>
        <Page />
      </Router>
    </StoreProvider>
  );
};

export default App;
