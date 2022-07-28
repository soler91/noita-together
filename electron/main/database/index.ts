import { Low, JSONFile } from "lowdb";
import { join } from "path";
import { app } from "electron";
import { migrateToLatest, VersionedDatabase } from "./migrations";
// Depending on NT isn't ideal in terms of migrating, but it'll do for now
import { NT } from "../proto/messages";

// TODO: Maybe use https://github.com/mtth/avsc for the schema stuff to have a really neat database that can't get messed up as easily
// ^ Bonus points for supporting maps and stuff

const filePath = join(app.getPath("userData"), "/nt-db.json");
const adapter = new JSONFile<NoitaDatabase>(filePath);

type Database = Low<NoitaDatabase> & { data: NoitaDatabase };

async function getDatabase(): Promise<Database> {
  const db = new Low(adapter);
  await db.read();
  const data: NoitaDatabase = migrateToLatest(db.data ?? { version: 0 });
  db.data = data;
  return db as Database;
}

let dbPromise: Promise<Database> | null = null;
export function getDb() {
  if (dbPromise === null) {
    dbPromise = getDatabase();
  }
  return dbPromise;
}

export interface Storage {
  gamePath: string;
}

export type Gamemode = "coop" | "race" | "nemesis";

export interface Game {
  readonly id: string;
  name: string;
  readonly bank: BankItem[];
  gold: number;
  seed: number;
  readonly gamemode: Gamemode;
}

export type BankItem =
  | {
      readonly id: string;
      readonly type: "wand";
      readonly value: NT.IWand;
    }
  | {
      readonly id: string;
      readonly type: "spell";
      readonly value: NT.ISpell;
    }
  | {
      readonly id: string;
      readonly type: "flask";
      readonly value: NT.IItem;
    }
  | {
      readonly id: string;
      readonly type: "item";
      readonly value: NT.IEntityItem;
    };

export interface NoitaDatabase extends VersionedDatabase<any> {
  /**
   * Acts like a local storage
   */
  readonly storage: Storage;
  readonly games: Game[];
}

// TODO: Put onDeathKick into games storage
