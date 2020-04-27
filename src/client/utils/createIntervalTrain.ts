import { Task, ITaskOptions, TaskCallback } from "tasktimer";

type Exercise = {
  name: string;
  duration: number;
};

type Rounds = Array<Array<Exercise>>;

type Train = {
  startDelay: number;
  nextTrainDelay: number;
  rest: number;
  rounds: Rounds;
  loops: number;
  startTrainCallback?: TaskCallback;
  finishRoundCallback?: TaskCallback;
  finishExerciseCallback?: TaskCallback;
  startRoundCallback?: TaskCallback;
};

const test: Train = {
  startDelay: 1,
  nextTrainDelay: 2,
  rest: 4,
  loops: 2,
  rounds: [
    [
      { name: "first", duration: 2 },
      { name: "second", duration: 3 },
      { name: "third", duration: 3 }
    ],
    [
      { name: "fourth", duration: 2 },
      { name: "fifth", duration: 3 },
      { name: "sixth", duration: 4 }
    ]
  ]
};

const TIME = 1;

const toMs = (second: number): number => second * TIME;

const getStartDelay = (
  duraition: number,
  callback?: TaskCallback
): ITaskOptions => ({
  id: "startDelay",
  tickDelay: 0,
  tickInterval: toMs(duraition),
  totalRuns: 1,
  removeOnCompleted: true,
  callback: callback || (() => {})
});

const getRest = (
  duration: number,
  delay: number,
  callback?: TaskCallback
): ITaskOptions => ({
  id: "Rest" + Math.random(),
  tickDelay: toMs(delay),
  tickInterval: toMs(duration),
  totalRuns: 1,
  removeOnCompleted: true,
  callback: callback || (() => {})
});

const getExercise = (
  exercise: Exercise,
  delay: number,
  callback?: TaskCallback
): ITaskOptions => ({
  id: exercise.name + Math.random(),
  tickDelay: toMs(delay),
  tickInterval: toMs(exercise.duration),
  totalRuns: 1,
  removeOnCompleted: true,
  callback: callback || (() => {})
});

export const createIntervalTrain = (train = test) => {
  const {
    startDelay,
    rounds,
    startRoundCallback,
    startTrainCallback,
    finishExerciseCallback,
    finishRoundCallback
  } = train;
  let delayCount = startDelay;
  const result: Array<ITaskOptions> = [];

  result.push(getStartDelay(startDelay));

  for (let i = 0; i < train.loops; i++) {
    rounds.map(round => {
      round.map(exercise => {
        result.push(getExercise(exercise, delayCount));
        delayCount += exercise.duration;
      });
      result.push(getRest(train.rest, delayCount));
      delayCount += train.rest;
    });
  }
  return result;
};
