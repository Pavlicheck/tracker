import { CreateExercise } from "./create-exercise";
import { TimerStore } from "./timer";

interface RootStore {
  createExercise: CreateExercise;
  timer: TimerStore;
}

class RootStore {
  constructor() {
    this.createExercise = new CreateExercise();
    this.timer = new TimerStore();
  }
}

export default RootStore;
