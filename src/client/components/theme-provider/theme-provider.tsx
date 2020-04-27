import React, { FC } from "react";
import { ThemeProvider as UIThemeProvider } from "uikit";
import { observer } from "mobx-react";

import { useStore } from "../../store";

export const ThemeProvider: FC = observer(({ children }) => {
  const { ui } = useStore();
  return <UIThemeProvider theme={ui.theme}>{children}</UIThemeProvider>;
});
