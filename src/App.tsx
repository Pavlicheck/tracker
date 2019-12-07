import React from "react";
import "normalize.css";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import { ThemeProvider } from "styled-components";

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <div>
      <Router history={history}>
        <ThemeProvider theme={{}}></ThemeProvider>
      </Router>
    </div>
  );
};

export default App;
