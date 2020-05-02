import React, { ComponentProps, FC } from "react";
import { Box } from "@material-ui/core";

import { Container } from "./container";

export const MainContainer: FC<ComponentProps<typeof Container>> = props => {
  return (
    <Box pt={9} pb={7}>
      <Container {...props} />
    </Box>
  );
};
