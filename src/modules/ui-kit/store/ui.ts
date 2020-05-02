import { action, computed, observable } from "mobx";
import { createMuiTheme, ThemeOptions } from "@material-ui/core/styles";
import { green, cyan } from "@material-ui/core/colors";

export type Theme = "light" | "dark";

export class UI {
  @observable private themes: { light: ThemeOptions; dark: ThemeOptions } = {
    light: {
      palette: {
        common: { black: "rgba(0, 0, 0, 1)", white: "#fff" },
        background: {
          paper: "rgba(247, 242, 196, 1)",
          default: "rgba(255, 255, 255, 1)"
        },
        primary: {
          light: "rgba(73, 73, 222, 1)",
          main: "rgba(4, 4, 146, 1)",
          dark: "rgba(3, 3, 94, 1)",
          contrastText: "#fff"
        },
        secondary: {
          light: "rgba(253, 221, 91, 1)",
          main: "rgba(252, 204, 15, 1)",
          dark: "rgba(252, 152, 3, 1)",
          contrastText: "#fff"
        },
        error: {
          light: "#e57373",
          main: "#f44336",
          dark: "#d32f2f",
          contrastText: "#fff"
        },
        text: {
          primary: "rgba(0, 0, 0, 1)",
          secondary: "rgba(0, 0, 0, 0.54)",
          disabled: "rgba(0, 0, 0, 0.38)",
          hint: "rgba(0, 0, 0, 0.38)"
        }
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
