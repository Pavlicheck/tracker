import { CreateExercise } from "./create-exercise";
import { UI } from "uikit";

interface RootStore {
  createExercise: CreateExercise;
  ui: UI;
}

class RootStore {
  constructor() {
    this.createExercise = new CreateExercise();
    this.ui = new UI();
  }
}

export default RootStore;
