import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

import { Container } from "..";

export const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Container>
          <Typography variant="h6" align="center">
            Tracker
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
