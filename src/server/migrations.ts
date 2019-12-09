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
      keyPath: "id"
    });
    db.createObjectStore(Names.CURRENT_TRAIN, { keyPath: "id" });
    user.add(initialUser);
    user.createIndex("id", "id");
    initialExercises.forEach(exercise => exercises.add(exercise));
    exercises.createIndex("id", "id");
  }
};

export default migragions;
