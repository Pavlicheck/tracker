import { RouteProps } from "react-router";
import * as Pages from "client/pages";

export const Routes: Array<RouteProps> = [
  {
    path: "/exercise-creator",
    component: Pages.ExerciseCreator
  },
  {
    path: "/timer",
    component: Pages.Timer
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
