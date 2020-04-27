import React, { ComponentProps, FC } from "react";

import { ThemeProvider as UIThemeProvider } from "@material-ui/core";

export const ThemeProvider: FC<ComponentProps<
  typeof UIThemeProvider
>> = props => {
  return <UIThemeProvider {...props} />;
};
