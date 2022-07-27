import { join } from "path";
import { app } from "electron";
import * as migration0001 from "./migrations/migration0001";
import sqlite3 from "sqlite3";
import { Kysely, Migrator } from "kysely";
import { SqliteDialect } from "./sqlite/sqlite-dialect";

const filePath = join(app.getPath("userData"), "/nt-db.sqlite");

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

async function getDatabase(): Promise<Kysely<NoitaDatabase>> {
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

  const { error, results } = await migrator.migrateToLatest();
  if (error) {
    throw error;
  } else {
    results?.forEach((it) => {
      if (it.status === "Success") {
        console.log(
          `migration "${it.migrationName}" was executed successfully`
        );
      } else if (it.status === "Error") {
        console.error(`failed to execute migration "${it.migrationName}"`);
      }
    });
    return noitaDb;
  }
}

let dbPromise: Promise<Kysely<NoitaDatabase>> | null = null;
export function getDb() {
  if (dbPromise === null) {
    dbPromise = getDatabase();
  }
  return dbPromise;
}
// TODO: Put game path in storage
// TODO: Put world seed, all flags, onDeathKick and gold amount into games storage
// TODO: Put bank items into storage and reference the game and store their type (wand, spell, ...)
