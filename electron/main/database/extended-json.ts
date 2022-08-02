import { Adapter, TextFile } from "lowdb";

// https://stackoverflow.com/a/73155667/3492994

function stringifyReplacer(key: string, value: any) {
  if (typeof value === "object" && value !== null) {
    if (value instanceof Map) {
      return {
        _meta: { type: "map" },
        value: Array.from(value.entries()),
      };
    } else if (value instanceof Set) {
      return {
        _meta: { type: "set" },
        value: Array.from(value.values()),
      };
    } else if ("_meta" in value) {
      // Escape "_meta" properties
      return {
        ...value,
        _meta: {
          type: "escaped-meta",
          value: value["_meta"],
        },
      };
    }
  }
  return value;
}

function parseReviver(key: string, value: any) {
  if (typeof value === "object" && value !== null) {
    if ("_meta" in value) {
      if (value._meta.type === "map") {
        return new Map(value.value);
      } else if (value._meta.type === "set") {
        return new Set(value.value);
      } else if (value._meta.type === "escaped-meta") {
        return {
          ...value,
          _meta: value._meta.value,
        };
      } else {
        console.warn("Unexpected meta", value._meta);
      }
    }
  }
  return value;
}

export class ExtendedJSONFile<T> implements Adapter<T> {
  #adapter: TextFile;

  constructor(filename: string) {
    this.#adapter = new TextFile(filename);
  }

  async read(): Promise<T | null> {
    const data = await this.#adapter.read();
    if (data === null) {
      return null;
    } else {
      return JSON.parse(data, parseReviver) as T;
    }
  }

  write(obj: T): Promise<void> {
    return this.#adapter.write(JSON.stringify(obj, stringifyReplacer));
  }
}
