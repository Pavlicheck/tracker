import React, { ComponentProps, FC } from "react";
import { Container as MuiContainer } from "@material-ui/core";

export const Container: FC<ComponentProps<typeof MuiContainer>> = props => {
  return <MuiContainer {...props} />;
};
