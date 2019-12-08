import { IDBPDatabase, IDBPTransaction } from "idb";
import { Names } from "../models/db";
import initialUser from "mocks/user";
import initialExercises from "mocks/exercises";

const migragions = {
  0: (db: IDBPDatabase) => {
    const user = db.createObjectStore(Names.USER, {
      autoIncrement: true,
      keyPath: "id"
    });
    const exercises = db.createObjectStore(Names.EXERCISES, {
      keyPath: ["id", "type"]
    });
    db.createObjectStore(Names.CURRENT_TRAIN, { keyPath: "id" });
    user.add(initialUser);
    initialExercises.forEach(exercise => exercises.add(exercise));
  }
};

export default migragions;
