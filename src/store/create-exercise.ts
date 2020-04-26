import { action, observable } from "mobx";
import unicid from "uniqid";

import { Types as ExerciseType, Exercise } from "models/exercise";
import { api } from "../api";

export class CreateExercise {
  @observable name = "";
  @observable description = "";
  @observable type = ExerciseType.TIME;

  constructor() {}

  @action.bound
  setName(name: string) {
    this.name = name;
  }

  @action.bound
  setDescription(description: string) {
    this.description = description;
  }

  create = () => {
    const id = unicid.time();
    const exercise: Exercise = {
      id,
      name: this.name,
      description: this.description,
      type: this.type,
      muscles: []
    };
    api.setExercises(exercise);
  };
}
