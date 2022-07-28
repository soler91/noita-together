import type { Kysely } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable("storage_item")
    .addColumn("key", "text", (col) => col.primaryKey())
    .addColumn("value", "text", (col) => col.notNull())
    .execute();

  await db.schema
    .createTable("game_save")
    .addColumn("id", "integer", (col) => col.primaryKey())
    .addColumn("name", "text", (col) => col.notNull())
    .addColumn("gamemode", "integer", (col) => col.notNull())
    .addColumn("gold", "integer", (col) => col.notNull())
    .execute();

  await db.schema
    .createTable("bank_item")
    .addColumn("id", "text", (col) => col.primaryKey())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("storage_item").execute();
  await db.schema.dropTable("bank_item").execute();
  await db.schema.dropTable("game_save").execute();
}
