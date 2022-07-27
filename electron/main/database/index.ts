import type { Kysely } from "kysely";
import { join } from "path";
import { app } from "electron";
import * as migration0001 from "./migrations/migration0001";

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

export const dbPromise: Promise<Kysely<NoitaDatabase>> = (async () => {
  const sqlite3 = await import("sqlite3");
  const kysely = await import("kysely");
  const sqliteDialect = await import("./sqlite/sqlite-dialect");

  const sqliteDb = new sqlite3.Database(filePath);
  sqliteDb.configure("busyTimeout", 1000);
  const noitaDb = new kysely.Kysely<NoitaDatabase>({
    dialect: new sqliteDialect.SqliteDialect({
      database: sqliteDb,
    }),
  });

  const migrator = new kysely.Migrator({
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
})();

// TODO: Put game path in storage
// TODO: Put world seed, all flags, onDeathKick and gold amount into games storage
// TODO: Put bank items into storage and reference the game and store their type (wand, spell, ...)
