import { Low, JSONFile } from "lowdb";
import { join } from "path";
import { app } from "electron";

// TODO:
// Consider using https://github.com/mtth/avsc or https://github.com/kriszyp/msgpackr for serialization

const filePath = join(app.getPath("userData"), "/gamePath.json");
const adapter = new JSONFile<NoitaDatabase>(filePath);

export const useDb = new Promise<Low<NoitaDatabase>>((resolve, reject) => {
  const db = new Low(adapter);
  db.read().then(
    () => resolve(db),
    (error) => reject(error)
  );
});

export interface StorageItem {
  readonly key: string;
  readonly value: string;
}

export interface Game {
  readonly id: string;
}

export interface BankItem {
  readonly id: string;
}

export interface NoitaDatabase {
  /**
   * Acts like a local storage
   */
  readonly storage: StorageItem[];
  readonly games: Game[];
  readonlybanks: BankItem[];
}

// TODO: Put game path in storage
// TODO: Put world seed, all flags, onDeathKick and gold amount into games storage
// TODO: Put bank items into storage and reference the game and store their type (wand, spell, ...)
