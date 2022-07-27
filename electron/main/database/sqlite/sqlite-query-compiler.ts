import { DefaultQueryCompiler } from "kysely";

export class SqliteQueryCompiler extends DefaultQueryCompiler {
  protected override getCurrentParameterPlaceholder() {
    return "?";
  }

  protected override getLeftIdentifierWrapper(): string {
    return '"';
  }

  protected override getRightIdentifierWrapper(): string {
    return '"';
  }

  protected override getAutoIncrement() {
    return "autoincrement";
  }
}
