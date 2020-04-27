import React from "react";
import "normalize.css";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import { StoreProvider } from "./store";

import { Page } from "client/components";
import { ThemeProvider } from "./components/theme-provider/theme-provider";

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <StoreProvider>
      <ThemeProvider>
        <Router history={history}>
          <Page />
        </Router>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
