import type { Gamemode } from "./main/database";
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

  getGameSaves(): Promise<
    {
      id: string;
      name: string;
      gamemode: Gamemode;
    }[]
  >;
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
