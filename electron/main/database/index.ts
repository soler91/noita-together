import { Kysely, Migrator } from "kysely";
import { join } from "path";
import { app } from "electron";
import { SqliteDialect } from "./sqlite/sqlite-dialect";
import * as migration0001 from "./migrations/migration0001";
import sqlite3 from "sqlite3";

const filePath = join(app.getPath("userData"), "/gamePath.sqlite");

export interface StorageItemTable {
  key: string;
  value: string;
}

export interface GameSaveTable {
  id: string;
}

export interface BankItemTable {
  id: string;
}

export interface NoitaDatabase {
  storage_item: StorageItemTable;
  game_save: GameSaveTable;
  bank_item: BankItemTable;
}

export const dbPromise = new Promise<Kysely<NoitaDatabase>>(
  (resolve, reject) => {
    const sqliteDb = new sqlite3.Database(filePath);
    sqliteDb.configure("busyTimeout", 1000);
    const noitaDb = new Kysely<NoitaDatabase>({
      dialect: new SqliteDialect({
        database: sqliteDb,
      }),
    });

    const migrator = new Migrator({
      provider: {
        async getMigrations() {
          return {
            migration0001: migration0001,
          };
        },
      },
      db: noitaDb,
    });

    migrator.migrateToLatest().then(
      (migrationResults) => {
        const { error, results } = migrationResults;
        if (error) {
          reject(error);
        } else {
          results?.forEach((it) => {
            if (it.status === "Success") {
              console.log(
                `migration "${it.migrationName}" was executed successfully`
              );
            } else if (it.status === "Error") {
              console.error(
                `failed to execute migration "${it.migrationName}"`
              );
            }
          });
          resolve(noitaDb);
        }
      },
      (err) => {
        reject(err);
      }
    );
  }
);

// TODO: Put game path in storage
// TODO: Put world seed, all flags, onDeathKick and gold amount into games storage
// TODO: Put bank items into storage and reference the game and store their type (wand, spell, ...)
