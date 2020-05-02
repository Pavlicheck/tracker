import React, { FC, ComponentProps } from "react";
import { Grid } from "@material-ui/core";

export const Col: FC<Omit<
  ComponentProps<typeof Grid>,
  "container" | "item"
>> = props => {
  return <Grid {...props} item />;
};

export const Row: FC<Omit<
  ComponentProps<typeof Grid>,
  "container" | "item"
>> = props => {
  return <Grid {...props} container />;
};
