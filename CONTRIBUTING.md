# Contributing Guide

Welcome, interested person! Contributions are welcome. If you're ever unsure, feel free to open an issue.

Preferably, features are developed in another branch or fork. After the feature is ready, a pull request to the master branch should be opened.

## Prerequisites

- [Node 16 or greater](https://nodejs.org/en/). Don't install Chocolatey.
- A code editor (see below)

## Setup

1. Fork the repository
2. Clone your fork
3. Create a `.env` file and set the required variables
4. `npm install`
5. `npm run dev`

## Recommended Tooling

I recommend using [Visual Studio Code](https://code.visualstudio.com/) with

- [Prettier Extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) to format your files
- Settings &rarr; Format On Save &rarr; Enable (`"editor.formatOnSave": true,`)
  - If you are using autosave: Settings &rarr; Autosave &rarr; On Focus Change (`"files.autoSave": "onFocusChange",`)
- [Vue Language Features (Volar) Extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar) for Vue.js
- [TypeScript Vue Plugin (Volar) Extension](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) for Vue.js. Take-over mode is *not* recommended, so just get this plugin.
- [(optional)Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) to see all the errors inline with the code
- [(optional)TODO Highlight Extension](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight)
- [(optional)Eslint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) to automatically show lots of little warnings


As for settings, I personally am a fan of those "inlay hints".


## Used Libraries

The most important ones are

- [Electron](https://www.electronjs.org/) - Build desktop apps with web technologies
- [Typescript](https://www.typescriptlang.org/) - Typesafe Javascript
- [Vue 3](https://github.com/vuejs/vue-next/) - Vue 3 with [the composition API](https://vuejs.org/guide/extras/composition-api-faq.html#what-is-composition-api)

We are also using

- [Vite](https://github.com/vuejs/vite) - a speedy Vue.js framework
- Protobuf


For more, check out the `package.json`

## Additional commands
### Building


```sh
npm run build
```

or if there are a million Typescript errors and you can't fix them all

```sh
npm run build-force
```

### Linting your code

```sh
npm run lint
```

### Re-generating Protobuf Types

```sh
npm run type-gen
```

## Code Structure

- master branch: Electron app
- mod branch: Noita together lua mod


### File Structure

- `electron/main` main thread
- `electron/main/database` deals with saving and loading a room, *make sure to always add migrations when you're changing the format!*
- `electron/main/proto` deals with the protobuf stuff, you can recreate the messages by running `npm run type-gen`
- `electron/main/index` entry point of the application
- `electron/ipc` type definitions for the improved IPC module
- `src` renderer thread

# Stuff from the template

## 🚨 `dependencies` vs `devDependencies`

**Put Node.js packages in `dependencies`**

**e.g.** `electron-store` `sqlite3` `serilaport` `mongodb` ...others

**Put Web packages in `devDependencies`**

**e.g.** `vue` `vue-router` `vuex` `pinia` `element-plus` `ant-design-vue` `axios` ...others

See more 👉 [dependencies vs devDependencies](https://github.com/electron-vite/vite-plugin-electron-renderer#dependencies-vs-devdependencies)

## 🚨 Node.js ESM packages

**e.g.** `node-fetch` `execa` `got` ...

[👉 Using Node.js ESM packages in Electron-Renderer](https://github.com/electron-vite/vite-plugin-electron-renderer#-nodejs-esm-packages)
