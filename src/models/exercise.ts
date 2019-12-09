export enum Types {
  TIME = "TIME",
  REPS = "REPS"
}

export interface Exercise {
  id: string;
  name: string;
  type: Types;
  muscles: string[];
  description: string;
}

export type Sets = {
  id: string;
  number: number;
  weight: number;
  description?: string;
};

export interface TimeSets extends Sets {
  start?: Date;
  end?: Date;
}
export interface RepsSets extends Sets {
  reps: number;
}

export interface TimeExercise extends Exercise {
  type: Types.TIME;
  sets: TimeSets[];
}

export interface RepsExercise extends Exercise {
  type: Types.REPS;
  sets: RepsSets[];
}
