import React from "react";
import "normalize.css";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import { StoreProvider } from "./store";

import { Page } from "client/components";
import { PrimaryButton } from "uikit";

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <StoreProvider>
      <Router history={history}>
        <PrimaryButton>Button</PrimaryButton>
        <Page />
      </Router>
    </StoreProvider>
  );
};

export default App;
