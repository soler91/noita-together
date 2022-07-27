import type { NT } from "./main/proto/messages";

/**
 * IPC methods that the main process supports
 */
export type MainIpc = {
  clientMessage<T extends NonNullable<NT.LobbyAction["action"]>>(data: {
    key: T;
    payload: NT.ILobbyAction[T];
  }): Promise<void>;
  setGamePath(path: string): Promise<void>;

  // TODO: Delete those dummy methods
  complexRet(b: number): Promise<{
    foo: string;
    bar: {
      baz: number;
    };
  }>;
  "get-emoji"(name: string): Promise<string>;
};

/**
 * IPC methods that our single render process supports.
 * Technically we could have multiple render processes, but we don't.
 */
export type RendererIpc = {
  // TODO: Delete those dummy methods
  "complex-payload"(a: string): Promise<{
    foo: string;
    bar: {
      baz: number;
    };
  }>;
};
