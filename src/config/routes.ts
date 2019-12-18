import { RouteProps } from "react-router";
import * as Pages from "pages/index";

export const Routes: Array<RouteProps> = [
  {
    path: "/exercise-creator",
    component: Pages.ExerciseCreator
  },
  {
    path: "/loading",
    exact: true,
    component: Pages.Loading
  },
  {
    component: Pages.Page404
  }
];
