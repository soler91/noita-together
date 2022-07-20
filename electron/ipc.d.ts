/**
 * IPC methods that the main process supports
 */
export type MainIpc = {
  noPayload(a: number): void;
  simplePlayload(cat: number): string;
  complexRet(b: number): {
    foo: string;
    bar: {
      baz: number;
    };
  };
  "get-emoji"(name: string): string;
};

/**
 * IPC methods that our single render process supports.
 * Technically we could have multiple render processes, but we don't.
 */
export type RendererIpc = {
  "complex-payload"(a: string): {
    foo: string;
    bar: {
      baz: number;
    };
  };
};
