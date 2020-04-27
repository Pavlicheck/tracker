import Server from "server";
import { Names } from "../models/db";
import { Exercise } from "../models/exercise";

const server = new Server();

class Api {
  private server = new Server();
  constructor() {}

  getAllExercises = async () => {
    try {
      return this.server.getAll(Names.EXERCISES);
    } catch (e) {
      console.error("get exercises error: ", e);
    }
  };

  getExercise = async (key: IDBValidKey) => {
    try {
      return this.server.getOne(Names.EXERCISES, key);
    } catch (e) {
      console.error("get exercise error: ", e);
    }
  };

  getAllExercisesByIndex = async (indexName: string, key: IDBValidKey) => {
    try {
      return this.server.getAllByIndex(Names.EXERCISES, indexName, key);
    } catch (e) {
      console.error("get all exercises by index error: ", e);
    }
  };

  getOneExerciseByIndex = async (indexName: string, key: IDBValidKey) => {
    try {
      return this.server.getOneByIndex(Names.EXERCISES, indexName, key);
    } catch (e) {
      console.error("get one exercise by index error: ", e);
    }
  };

  updateExercise = async (newValue: any) => {
    try {
      return this.server.put(Names.EXERCISES, newValue);
    } catch (e) {
      console.error("update exercise error: ", e);
    }
  };

  deleteExercise = async (key: IDBValidKey) => {
    try {
      return this.server.delete(Names.EXERCISES, key);
    } catch (e) {
      console.log("delete exercise error: ", e);
    }
  };

  setExercises = async (data: Exercise) => {
    try {
      this.server.post(Names.EXERCISES, data);
    } catch (e) {}
  };

  getUser = async () => {
    try {
      const user: Array<any> = await this.server.getAll(Names.USER);
      return user[0];
    } catch (e) {
      console.error("get exercises error: ", e);
    }
  };
}

export const api = new Api();
