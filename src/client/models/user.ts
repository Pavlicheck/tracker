import { Training as TrainingsType } from "./trainings";

export enum Theme {
  DARK = "DARK",
  LIGHT = "LIGHT"
}

export type Settings = {
  theme: Theme;
};

export type Data = {
  name?: string;
  sex?: string;
  weight?: string;
  birthDay?: Date;
};

export type Trainings = {
  id: string;
  startTime: Date;
  endTime: Date;
  type: TrainingsType;
};

export type User = {
  id: string;
  settings: Settings;
  data: Data;
};
