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

async function getDatabase(): Promise<Low<NoitaDatabase>> {
  const db = new Low(adapter);
  await db.read();
  const data: NoitaDatabase = migrateToLatest(db.data ?? { version: 0 });
  db.data = data;
  return db;
}

let dbPromise: Promise<Low<NoitaDatabase>> | null = null;
export function getDb() {
  if (dbPromise === null) {
    dbPromise = getDatabase();
  }
  return dbPromise;
}

export interface StorageItem {
  readonly key: string;
  readonly value: string;
}

export type Gamemode = "coop" | "race" | "nemesis";

export interface Game {
  readonly id: string;
  name: string;
  readonly bank: BankItem[];
  gold: number;
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
  readonly storage: StorageItem[];
  readonly games: Game[];
}

// TODO: Put game path in storage
// TODO: Put world seed, all flags, onDeathKick and gold amount into games storage
// TODO: Put bank items into storage and reference the game and store their type (wand, spell, ...)
