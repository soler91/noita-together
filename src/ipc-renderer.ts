import type { SafeRendererProcessIpc } from "../electron/ipc-helpers";
import type { MainIpc, RendererIpc } from "../electron/ipc";
import { ipcRenderer } from "electron-better-ipc";

export const ipc = ipcRenderer as SafeRendererProcessIpc<MainIpc, RendererIpc>;
