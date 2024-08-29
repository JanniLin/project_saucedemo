exports.config = {
  runner: "local",

  baseUrl: "https://www.saucedemo.com",

  specs: ["./../tests/feature/**/*.feature"],

  maxInstances: 6,

  capabilities: [
    {
      maxInstances: 3,
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--headless", "--start-maximized"],
      },
      acceptInsecureCerts: true,
    },
    {
      maxInstances: 3,
      browserName: "MicrosoftEdge",
      "ms:edgeOptions": {
        args: ["--headless", "--start-maximized"],
      },
      acceptInsecureCerts: true,
    },
  ],
  logLevel: "error",

  bail: 0,

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  framework: "cucumber",

  cucumberOpts: {
    require: [
      "./src/tests/step-definitions/login.steps.js",
      "./src/tests/step-definitions/common.steps.js",
      "./src/tests/step-definitions/inventory.steps.js",
    ],
    timeout: 60000,
  },
  reporters: [
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
      },
    ],
  ],
}
