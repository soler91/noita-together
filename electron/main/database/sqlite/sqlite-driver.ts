import { DatabaseConnection, QueryResult } from "kysely";
import { Driver } from "kysely";
import { CompiledQuery } from "kysely";
import { freeze, isFunction } from "kysely/dist/esm/util/object-utils.js";
import {
  SqliteDatabase,
  SqliteDialectConfig,
} from "./sqlite-dialect-config.js";

export class SqliteDriver implements Driver {
  readonly #config: SqliteDialectConfig;
  readonly #connectionMutex = new ConnectionMutex();

  #db?: SqliteDatabase;
  #connection?: DatabaseConnection;

  constructor(config: SqliteDialectConfig) {
    this.#config = freeze({ ...config });
  }

  async init(): Promise<void> {
    this.#db = isFunction(this.#config.database)
      ? await this.#config.database()
      : this.#config.database;

    this.#connection = new SqliteConnection(this.#db);

    if (this.#config.onCreateConnection) {
      await this.#config.onCreateConnection(this.#connection);
    }
  }

  async acquireConnection(): Promise<DatabaseConnection> {
    // SQLite only has one single connection. We use a mutex here to wait
    // until the single connection has been released.
    await this.#connectionMutex.lock();
    return this.#connection!;
  }

  async beginTransaction(connection: DatabaseConnection): Promise<void> {
    await connection.executeQuery(CompiledQuery.raw("begin"));
  }

  async commitTransaction(connection: DatabaseConnection): Promise<void> {
    await connection.executeQuery(CompiledQuery.raw("commit"));
  }

  async rollbackTransaction(connection: DatabaseConnection): Promise<void> {
    await connection.executeQuery(CompiledQuery.raw("rollback"));
  }

  async releaseConnection(): Promise<void> {
    this.#connectionMutex.unlock();
  }

  async destroy(): Promise<void> {
    const self = this;
    return new Promise((resolve, reject) => {
      if (self.#db) {
        self.#db.close(function (error) {
          if (error) {
            reject(error);
          } else {
            self.#db = undefined;
            resolve();
          }
        });
      } else {
        resolve();
      }
    });
  }
}

class SqliteConnection implements DatabaseConnection {
  readonly #db: SqliteDatabase;

  constructor(db: SqliteDatabase) {
    this.#db = db;
  }

  executeQuery<O>(compiledQuery: CompiledQuery): Promise<QueryResult<O>> {
    const { sql, parameters } = compiledQuery;

    return new Promise((resolve, reject) => {
      const stmt = this.#db.prepare(sql, function (error) {
        if (error) {
          reject(error);
        }
      });

      if (!stmt) {
        reject(new Error("Statement is null"));
        return;
      }

      stmt.all(parameters, function (error, rows) {
        if (error) {
          reject(error);
        } else {
          const changes = this.changes;
          const lastInsertRowid = this.lastID;

          stmt.finalize(function (error) {
            if (error) {
              reject(error);
            }
          });

          resolve({
            numUpdatedOrDeletedRows:
              changes !== undefined && changes !== null
                ? BigInt(changes)
                : undefined,
            insertId:
              lastInsertRowid !== undefined && lastInsertRowid !== null
                ? BigInt(lastInsertRowid)
                : undefined,
            rows: rows ?? [],
          });
        }
      });
    });
  }

  async *streamQuery<R>(): AsyncIterableIterator<QueryResult<R>> {
    throw new Error("Sqlite driver doesn't support streaming");
  }
}

class ConnectionMutex {
  #promise?: Promise<void>;
  #resolve?: () => void;

  async lock(): Promise<void> {
    while (this.#promise) {
      await this.#promise;
    }

    this.#promise = new Promise((resolve) => {
      this.#resolve = resolve;
    });
  }

  unlock(): void {
    const resolve = this.#resolve;

    this.#promise = undefined;
    this.#resolve = undefined;

    resolve?.();
  }
}
