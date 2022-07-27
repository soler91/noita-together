import { DatabaseConnection } from "kysely";

/**
 * Config for the SQLite dialect.
 */
export interface SqliteDialectConfig {
  /**
   * An sqlite Database instance or a function that returns one.
   *
   * If a function is provided, it's called once when the first query is executed.
   *
   * https://github.com/JoshuaWise/better-sqlite3/blob/master/docs/api.md#new-databasepath-options
   */
  database: SqliteDatabase | (() => Promise<SqliteDatabase>);

  /**
   * Called once when the first query is executed.
   *
   * This is a Kysely specific feature and does not come from the `better-sqlite3` module.
   */
  onCreateConnection?: (connection: DatabaseConnection) => Promise<void>;
}

/**
 * This interface is the subset of node-sqlite3 driver's `Database` class that
 * kysely needs.
 */
export interface SqliteDatabase {
  close(callback?: (err: Error | null) => void): void;
  prepare(
    sql: string,
    callback?: (this: SqliteStatement, err: Error | null) => void
  ): SqliteStatement;
}

export interface SqliteStatement {
  //readonly reader: boolean;
  all(
    parameters: ReadonlyArray<unknown>,
    callback?: (this: SqliteRunResult, err: Error | null, rows: any[]) => void
  ): this;

  run(
    parameters: ReadonlyArray<unknown>,
    callback?: (this: SqliteRunResult, err: Error | null) => void
  ): this;

  finalize(callback?: (err: Error | null) => void): void;
}

export interface SqliteRunResult {
  lastID: number;
  changes: number;
}
