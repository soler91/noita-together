import type { BrowserWindow } from "electron";

// We have functions with at most one argument
type IpcTypeSchema = { [key: string]: (...args: [any]) => any };

/**
 * MIT License

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
export interface SafeMainProcessIpc<
  MainType extends IpcTypeSchema,
  RendererType extends IpcTypeSchema
> {
  /**
	Send a message to the given window.

	In the renderer process, use `ipcRenderer.answerMain` to reply to this message.

	@param browserWindow - The window to send the message to.
	@param channel - The channel to send the message on.
	@param data - The data to send to the receiver.
	@returns - The reply from the renderer process.

	@example
	```
	import {BrowserWindow} from 'electron';
	import {ipcMain as ipc} from 'electron-better-ipc';

	const browserWindow = BrowserWindow.getFocusedWindow();

	const emoji = await ipc.callRenderer(browserWindow!, 'get-emoji', 'unicorn');
	console.log(emoji);
	//=> '🦄'
	```
	*/
  callRenderer<Channel extends keyof RendererType>(
    browserWindow: BrowserWindow,
    channel: Channel,
    ...data: Parameters<RendererType[Channel]>
  ): Promise<ReturnType<RendererType[Channel]>>;

  /**
	Send a message to the focused window, as determined by `electron.BrowserWindow.getFocusedWindow`.

	In the renderer process, use `ipcRenderer.answerMain` to reply to this message.

	@param channel - The channel to send the message on.
	@param data - The data to send to the receiver.
	@returns - The reply from the renderer process.

	@example
	```
	import {ipcMain as ipc} from 'electron-better-ipc';

	const emoji = await ipc.callFocusedRenderer('get-emoji', 'unicorn');
	console.log(emoji);
	//=> '🦄'
	```
	*/
  callFocusedRenderer<Channel extends keyof RendererType>(
    channel: Channel,
    ...data: Parameters<RendererType[Channel]>
  ): Promise<ReturnType<RendererType[Channel]>>;

  /**
	This method listens for a message from `ipcRenderer.callMain` defined in a renderer process and replies back.

	@param channel - The channel to send the message on.
	@param callback - The return value is sent back to the `ipcRenderer.callMain` in the renderer process.
	@returns A function, that when called, removes the listener.

	@example
	```
	import {ipcMain as ipc} from 'electron-better-ipc';

	ipc.answerRenderer('get-emoji', async emojiName => {
		const emoji = await getEmoji(emojiName);
		return emoji;
	});
	```
	*/
  answerRenderer<Channel extends keyof MainType>(
    channel: Channel,
    callback: (
      data: Parameters<MainType[Channel]>[0],
      browserWindow: BrowserWindow
    ) =>
      | ReturnType<MainType[Channel]>
      | PromiseLike<ReturnType<MainType[Channel]>>
  ): () => void;

  /**
	This method listens for a message from `ipcRenderer.callMain` defined in the given BrowserWindow's renderer process and replies back.

	@param browserWindow - The window for which to expect the message.
	@param channel - The channel to send the message on.
	@param callback - The return value is sent back to the `ipcRenderer.callMain` in the renderer process.
	@returns A function, that when called, removes the listener.

	@example
	```
	import {ipcMain as ipc} from 'electron-better-ipc';

	ipc.answerRenderer('get-emoji', async emojiName => {
		const emoji = await getEmoji(emojiName);
		return emoji;
	});
	```
	*/
  answerRenderer<Channel extends keyof MainType>(
    browserWindow: BrowserWindow,
    channel: Channel,
    callback: (
      data: Parameters<MainType[Channel]>[0],
      browserWindow: BrowserWindow
    ) =>
      | ReturnType<MainType[Channel]>
      | PromiseLike<ReturnType<MainType[Channel]>>
  ): () => void;

  /**
	Send a message to all renderer processes (windows).

	@param channel - The channel to send the message on.
	@param data - The data to send to the receiver.
	*/
  sendToRenderers<Channel extends keyof RendererType>(
    channel: Channel,
    data?: Parameters<RendererType[Channel]>[0]
  ): void;
}

export interface SafeRendererProcessIpc<
  MainType extends IpcTypeSchema,
  RendererType extends IpcTypeSchema
> {
  /**
	Send a message to the main process.

	In the main process, use `ipcMain.answerRenderer` to reply to this message.

	@param channel - The channel to send the message on.
	@param data - The data to send to the receiver.
	@returns The reply from the main process.

	@example
	```
	import {ipcRenderer as ipc} from 'electron-better-ipc';

	const emoji = await ipc.callMain('get-emoji', 'unicorn');
	console.log(emoji);
	//=> '🦄'
	```
	*/
  callMain<Channel extends keyof MainType>(
    channel: Channel,
    ...data: Parameters<MainType[Channel]>
  ): Promise<ReturnType<MainType[Channel]>>;

  /**
	This method listens for a message from `ipcMain.callRenderer` defined in the main process and replies back.

	@param channel - The channel to send the message on.
	@param callback - The return value is sent back to the `ipcMain.callRenderer` in the main process.
	@returns A function, that when called, removes the listener.

	@example
	```
	import {ipcRenderer as ipc} from 'electron-better-ipc';

	ipc.answerMain('get-emoji', async emojiName => {
		const emoji = await getEmoji(emojiName);
		return emoji;
	});
	```
	*/
  answerMain<Channel extends keyof RendererType>(
    channel: Channel,
    callback: (
      data: Parameters<RendererType[Channel]>[0]
    ) =>
      | ReturnType<RendererType[Channel]>
      | PromiseLike<ReturnType<RendererType[Channel]>>
  ): () => void;
}
