import { openDB, IDBPDatabase, IDBPTransaction, DBSchema } from "idb";

import migrations from "./migrations";
import { Names } from "../models/db";

export default class Request {
  private name = "tracker-db";
  private version = 1;
  constructor() {}

  private openDB = async (func: (db: IDBPDatabase) => void) => {
    const db = await openDB(this.name, this.version, {
      upgrade: this.onUpgradeNeeded
    });

    return func(db);
  };

  private onUpgradeNeeded = (
    database: IDBPDatabase<DBSchema | unknown>,
    oldVersion: number,
    newVersion: number | null,
    transaction: IDBPTransaction<DBSchema | unknown>
  ): void => {
    switch (oldVersion) {
      case 0:
        migrations[0](database);
    }
  };

  get = (dbname: Names): any => {
    return this.openDB(db => {
      const store = db.transaction(dbname).objectStore(dbname);
      return store.getAll();
    });
  };

  getOne = (dbname: Names, key: IDBValidKey): any => {
    return this.openDB(db => {
      const store = db.transaction(dbname).objectStore(dbname);
      return store.get(key);
    });
  };

  post = (dbName: Names, data: any) => {
    return this.openDB(db => {
      const store = db.transaction(dbName, "readwrite").objectStore(dbName);
      return store
        .add(data)
        .then(res => res)
        .catch(e => console.log("e: ", e));
    });
  };

  put = () => {};

  delete = () => {};
}
