import { action, computed, observable } from "mobx";
import { createMuiTheme, ThemeOptions } from "@material-ui/core/styles";
import { green, cyan } from "@material-ui/core/colors";

export type Theme = "light" | "dark";

export class UI {
  @observable private themes: { light: ThemeOptions; dark: ThemeOptions } = {
    light: {
      palette: {
        primary: green
      }
    },
    dark: {
      palette: {
        primary: cyan
      }
    }
  };
  @observable currentTheme: Theme = "light";

  @computed
  get theme() {
    return createMuiTheme(this.themes[this.currentTheme]);
  }

  @action
  setTheme = (theme: Theme) => {
    this.currentTheme = theme;
  };

  toggleTheme = () => {
    const newTheme: Theme = this.currentTheme === "light" ? "dark" : "light";
    this.setTheme(newTheme);
  };
}
