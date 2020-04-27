import { CreateExercise } from "./create-exercise";
import { UI } from "uikit";
import { TimerStore } from "./timer";

interface RootStore {
  createExercise: CreateExercise;
  ui: UI;
  timer: TimerStore;
}

class RootStore {
  constructor() {
    this.createExercise = new CreateExercise();
    this.ui = new UI();
    this.timer = new TimerStore();
  }
}

export default RootStore;
