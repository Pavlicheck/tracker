import { Exercise, Types } from "models/exercise";

const exercises: Exercise[] = [
  {
    id: "1",
    name: "Жим",
    type: Types.REPS,
    muscles: ["Грудь"],
    description: ""
  },
  {
    id: "2",
    name: "Присед",
    type: Types.REPS,
    muscles: ["Ноги"],
    description: ""
  }
];

export default exercises;
