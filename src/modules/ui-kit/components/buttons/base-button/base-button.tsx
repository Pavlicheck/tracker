import React, { ComponentProps, FC } from "react";
import { Button } from "@material-ui/core";

export const BaseButton: FC<Omit<
  ComponentProps<typeof Button>,
  "variant"
>> = props => {
  return <Button {...props} variant="contained" />;
};
