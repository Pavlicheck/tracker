export interface ITimerStore {
  timers: Object;
  createTimer: (props?: CreateTimerProps) => void;
}

export type CreateTimerProps = {
  interval?: number | undefined;
  stopwatch?: boolean | undefined;
};
