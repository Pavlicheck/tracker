import { TaskTimer } from "tasktimer";
import unicid from "uniqid";
import { observable } from "mobx";
import { CreateTimerProps } from "client/models/timer";
import { createIntervalTrain } from "client/utils/createIntervalTrain";

// type TimerType = {
//   timer:
// }

export class TimerStore {
  @observable timers: any;
  @observable count: number;
  constructor() {
    this.timers = {};
    this.count = 0;
  }

  createTimer = (props: CreateTimerProps) => {
    const id = unicid.time();
    const timer = new TaskTimer(1000);
    timer.on("tick", () => this.count++);

    timer.add(createIntervalTrain());
    timer.start();

    console.log("timer: ", timer);
    // const timer = new moment.duration(1000).timer({ wait: 5000});
    this.timers[id] = {
      timer
    };
    return id;
  };

  getTimer = (id: string) => {
    return this.timers[id];
  };
}
