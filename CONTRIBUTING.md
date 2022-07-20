# Contributing


master branch: Electron app
mod branch: Noita together mod


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
