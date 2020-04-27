import React, { FC, ComponentProps } from "react";
import { BaseButton } from "../base-button/base-button";

export const PrimaryButton: FC<Omit<
  ComponentProps<typeof BaseButton>,
  "color" | "variant"
>> = props => {
  return <BaseButton {...props} color="primary" />;
};
