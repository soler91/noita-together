/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config = {
  appId: "NoitaTogether",
  asar: true,
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
};

module.exports = config;
