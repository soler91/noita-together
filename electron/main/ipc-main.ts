import type { SafeMainProcessIpc } from "../ipc-helpers";
import type { MainIpc, RendererIpc } from "../ipc";
import { ipcMain } from "electron-better-ipc";

/**
 * See ipc.ts for the definitions of the IPC functions.
 */
export const ipc = ipcMain as SafeMainProcessIpc<MainIpc, RendererIpc>;
