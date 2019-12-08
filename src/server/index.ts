import { openDB, IDBPDatabase, IDBPTransaction, DBSchema } from "idb";

import migrations from "./migrations";

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

  get = (key: string) => {
    return this.openDB(db => {
      const store = db.transaction(key).objectStore(key);
      return store.getAll();
    });
  };
}
