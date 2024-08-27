exports.config = {
  runner: "local",
  baseUrl: "https://www.saucedemo.com",
  specs: ["./../tests/feature/**/*.feature"],

  maxInstances: 10,

  capabilities: [
    {
      maxInstances: 5,
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--headless", "--start-maximized"],
      },
      acceptInsecureCerts: true,
    },
    {
      maxInstances: 5,
      browserName: "MicrosoftEdge",
      "ms:edgeOptions": {
        args: ["--headless", "--start-maximized"],
      },
      acceptInsecureCerts: true,
    },
  ],
  logLevel: "warn",

  bail: 0,

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  framework: "cucumber",

  cucumberOpts: {
    require: ["./src/tests/step-definitions/steps.js"],
    timeout: 60000,
  },

  before: () => {
    browser.execute(() => {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker
          .getRegistrations()
          .then(function (registrations) {
            for (let registration of registrations) {
              registration.unregister();
            }
          });
      }
    });
  },
};
