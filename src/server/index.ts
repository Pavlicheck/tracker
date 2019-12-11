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

  getAll = (dbname: Names): any => {
    return this.openDB(db => {
      const store = db.transaction(dbname).objectStore(dbname);
      return store.getAll();
    });
  };

  getAllByIndex = (dbname: Names, indexName: string, key: IDBValidKey) => {
    return this.openDB(db => {
      return db.getAllFromIndex(dbname, indexName, key);
    });
  };

  getOneByIndex = (dbname: Names, indexName: string, key: IDBValidKey) => {
    return this.openDB(db => {
      return db.getFromIndex(dbname, indexName, key);
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
        .then(resp => resp)
        .catch(error => console.error("Post error: ", error));
    });
  };

  put = (dbName: Names, value: any) => {
    return this.openDB(db => {
      const store = db.transaction(dbName, "readwrite").objectStore(dbName);
      return store
        .put(value)
        .then(resp => resp)
        .catch(error => console.error("Put error: ", error));
    });
  };

  delete = (dbName: Names, key: IDBValidKey) => {
    return this.openDB(db => {
      const store = db.transaction(dbName, "readwrite").objectStore(dbName);
      return store.delete(key);
    });
  };
}
