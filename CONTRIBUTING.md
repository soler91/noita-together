# Contributing


master branch: Electron app
mod branch: Noita together mod

## Getting started

Clone this repository and do

```sh
npm install
```

### Developing

```sh
npm run dev
```

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



## Directory

```diff
+ ├─┬ electron
+ │ ├─┬ main
+ │ │ └── index.ts    entry of Electron-main
+ │ └─┬ preload
+ │   └── index.ts    entry of Electron-preload
  ├─┬ src
  │ └── main.ts       entry of Electron-renderer
  ├── index.html
  ├── package.json
  └── vite.config.ts
```

## 🚨 `dependencies` vs `devDependencies`

**Put Node.js packages in `dependencies`**

**e.g.** `electron-store` `sqlite3` `serilaport` `mongodb` ...others

**Put Web packages in `devDependencies`**

**e.g.** `vue` `vue-router` `vuex` `pinia` `element-plus` `ant-design-vue` `axios` ...others

See more 👉 [dependencies vs devDependencies](https://github.com/electron-vite/vite-plugin-electron-renderer#dependencies-vs-devdependencies)

## 🚨 Node.js ESM packages

**e.g.** `node-fetch` `execa` `got` ...

[👉 Using Node.js ESM packages in Electron-Renderer](https://github.com/electron-vite/vite-plugin-electron-renderer#-nodejs-esm-packages)
