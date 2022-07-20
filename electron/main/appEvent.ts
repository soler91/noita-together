import { webContents } from "electron";
export const appEvent = (event, data) => {
  webContents.getAllWebContents().forEach((content) => {
    content.send(event, data);
  });
};
