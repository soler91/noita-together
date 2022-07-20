if (process.env.VITE_APP_VERSION === undefined) {
  const now = new Date();
  process.env.VITE_APP_VERSION = `${now.getUTCFullYear() -
    2000}.${now.getUTCMonth() + 1}.${now.getUTCDate()}-${now.getUTCHours() *
    60 +
    now.getUTCMinutes()}`;
}

/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config = {
  appId: "NoitaTogether",
  asar: true,
  nodeIntegration: true,
  externals: ["keytar"],
  productName: "Noita Together",
  win: {
    target: [
      {
        target: "nsis",
        arch: ["x64"],
      },
    ],
    requestedExecutionLevel: "requireAdministrator", //eugh
    artifactName: "${productName}_${version}.${ext}",
  },
  nsis: {
    perMachine: true,
    oneClick: false,
    allowToChangeInstallationDirectory: true,
  },
  directories: {
    output: "release/${version}",
  },
  files: ["dist"],
  extraMetadata: {
    version: process.env.VITE_APP_VERSION,
  },
};

module.exports = config;
