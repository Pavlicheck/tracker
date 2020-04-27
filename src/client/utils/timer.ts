import { TaskTimer, Task } from "tasktimer";

interface Options {
  interval: number;
  tasks?: Array<Task>;
  onTick?: void;
}

type Exercise = {
  name: string;
  duration?: number;
};

type RestTime = number;

type NextExerciseDelay = number;

type StartDelay = number;

export class Timer extends TaskTimer {
  interval: number;
  private tasks: Array<Task>;
  private onTick: void;

  constructor(options: Options) {
    super(options.interval * 1000);
    this.interval = options.interval;
    this.onTick = options.onTick;
    this.tasks = options.tasks || [];
  }
}
