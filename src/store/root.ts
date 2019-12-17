import { CreateExercise } from "./create-exercise";
import { observable } from "mobx";

interface RootStore {
  createExercise: CreateExercise;
}

class RootStore {
  constructor() {
    this.createExercise = new CreateExercise();
  }
}

export default RootStore;
