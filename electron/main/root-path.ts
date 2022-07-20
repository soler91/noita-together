import { join } from "path";
import { app } from "electron";

export const publicFolder = join(
  __dirname,
  app.isPackaged ? "../.." : "../../../public"
);

export const distFolder = join(__dirname, "../..");
