import Server from "server";
import { Names } from "../models/db";

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
      console.log("e: ", e);
    }
  };
}
