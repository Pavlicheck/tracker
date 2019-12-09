import Server from "server";
import { Names } from "../models/db";
import { Exercise } from "../models/exercise";

const server = new Server();

export default class Api {
  private server: Server;
  constructor() {
    this.server = new Server();
  }

  getExecises = async () => {
    try {
      return this.server.get(Names.EXERCISES);
    } catch (e) {
      console.error("get exercises error: ", e);
    }
  };

  getExecise = async (key: IDBValidKey) => {
    try {
      return this.server.getOne(Names.EXERCISES, key);
    } catch (e) {
      console.error("get exercise error: ", e);
    }
  };

  setExecises = async (data: Exercise) => {
    try {
      this.server.post(Names.EXERCISES, data);
    } catch (e) {}
  };

  // postExercise = async value => {};
  //
  // putExercise = async (id, value) => {};
  //
  // putUser = async data => {};

  getUser = async () => {
    try {
      const user: Array<any> = await this.server.get(Names.USER);
      return user[0];
    } catch (e) {
      console.error("get exercises error: ", e);
    }
  };
}
