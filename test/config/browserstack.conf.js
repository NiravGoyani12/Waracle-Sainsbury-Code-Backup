const { removeSync } = require("fs-extra");
const dotenv = require("dotenv").config();
const environment = require("./environments.conf");
const browserstack = require("browserstack-local");
const bs_credentials = require("./browserstack.credentials");
const report = require("multiple-cucumber-html-reporter");
const cucumberJson = require("wdio-cucumberjs-json-reporter").default;
const localIdentifier = `${Math.round(Math.random() * 100)}_${Date.now()}`;

let baseUrl = environment.dev3_env;

let bs_local;

const today = new Date();
const date =
  today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
const startTime =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

exports.config = {
  host: "hub-cloud.browserstack.com",
  runner: "local",
  user:
    bs_credentials.BROWSERSTACK_USERNAME || process.env.BROWSERSTACK_USERNAME,
  key:
    bs_credentials.BROWSERSTACK_ACCESS_KEY ||
    process.env.BROWSERSTACK_ACCESS_KEY,

    specs: ["./test/features/**/fpp257-**.feature"],

  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],

  suites: {
    regression: ["./test/features/regression/*.feature"],
    smoke: ["./test/features/smoke/*.feature"],
  },

  // ============
  // Capabilities
  // ============
  commonCapabilities: {
    name: " FPP BS TESTS ",
    build: " FPP BS Test " + date,
    "browserstack.local": "true",
    "browserstack.debug": "true",
    "browserstack.console": "errors",
    "browserstack.networkLogs": "true",
    "browserstack.idleTimeout": "300",
    "browserstack.use_w3c": "true",
    "browserstack.wsLocalSupport": "true",
  },

  maxInstances: 5,

  capabilities: [
    {
      browserName: "chrome",
      browser_version: "90.0",
      os: "OS X",
      os_version: "Big Sur",
    },

    {
      browserName: "chrome",
      browser_version: "90.0",
      os: "Windows",
      os_version: "10",
    },

    {
      browserName: "chrome",
      browser_version: "latest",
      os: "Windows",
      os_version: "11",
    },

    {
      os: "OS X",
      os_version: "Monterey",
      browserName: "Edge",
      browser_version: "latest",
      "browserstack.selenium_version": "3.5.2",
    },
    {
      os: "OS X",
      os_version: "Catalina",
      browserName: "Firefox",
      browser_version: "latest",
      "browserstack.selenium_version": "3.10.0",
    },
  ],

  // ===================
  // Test Configurations
  // ===================
  sync: true,
  logLevel: "silent", // Level of logging verbosity: silent | verbose | command | data | result | error
  coloredLogs: true, // Enables colors for log output
  baseUrl: baseUrl,
  // Default request retries count
  connectionRetryCount: 2,

  /**
   * The number of times to retry the entire spec file when it fails as a whole
   */
  // specFileRetries: 2,

  reporters: [
    "spec",
    [
      "cucumberjs-json",
      {
        jsonFolder: "./cucumber-browserstack-reports/test/",
        language: "en",
      },
    ],
  ],

  services: ["browserstack", "intercept"],

  framework: "cucumber",
  // If you are using Cucumber you need to specify the location of your step definitions.
  cucumberOpts: {
    timeout: 900000,
    requireModule: ["@babel/register"],
    require: [
      "./test/step_definitions/**/given.js",
      "./test/step_definitions/**/when.js",
      "./test/step_definitions/**/then.js",
    ],
  },

  //
  // =====
  // Hooks
  // =====

  onPrepare: () => {
    // Remove the `.tmp/` folder that holds the json and report files
    removeSync(".cucumber-browserstack-reports/");
  },

  before: function () {
    /**
     * Setup the Chai assertion framework
     */

    browser.setTimeout({ pageLoad: 10000 });
    const chai = require("chai");
    const chaiAsPromised = require("chai-as-promised");
    chai.use(chaiAsPromised);
    global.expect = chai.expect;
    global.assert = chai.assert;
    global.should = chai.should();
    //browser.url("");
  },

  /**
   * Runs before a Cucumber feature
   */
  beforeFeature: function (uri, feature) {
    browser.maximizeWindow();
    console.log(
      `The feature that is executing is: ${feature.name.toUpperCase()}`
    );
  },

  afterStep: function (stepResult, stepData) {
    if (stepResult.status !== "passed") {
      cucumberJson.attach(browser.takeScreenshot(), "image/png");
    }
  },

  beforeScenario: function (world) {
    const scenario_name = world.pickle.name.toUpperCase();
    console.log(`The scenario that is starting is: ${scenario_name}`);
  },

  afterScenario: function (world, result, context) {
    const status = world.result?.status.toUpperCase();
    if (status === "passed" || "failed" || "skipped") {
      console.log(
        `\nThe scenario has finished and the result of the test is: ${status}`
      );
    }
    browser.execute("window.sessionStorage.clear()");
    console.log(`\nStarting new scenario session!`);
  },
  afterFeature: function () {
    try {
      browser.closeWindow();
    } catch (e) {
      console.log(e);
    }
  },

  // Code to start browserstack local before start of test
  onPrepare: (config, capabilities) => {
    console.log("Connecting BrowserStack Local...");
    return new Promise(function (resolve, reject) {
      exports.bs_local = new browserstack.Local();
      exports.bs_local.start(
        {
          key: exports.config.key,
          forceLocal: "true",
          localIdentifier: localIdentifier,
        },
        function (error) {
          if (error) return reject(error);
          console.log("Connected. Now testing...");

          resolve();
        }
      );
    });
  },
  // Code to stop browser stack local after end of test
  afterLaunch: () => {
    return new Promise(function (resolve, reject) {
      exports.bs_local.stop(resolve);
    });
  },

  onComplete: function (capabilities, specs) {
    const today = new Date();
    const date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    const endTime =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    report.generate({
      jsonDir: "./cucumber-browserstack-reports/test/",
      reportPath: "./cucumber-browserstack-reports/",
      // openReportInBrowser: true,
      displayDuration: true,
      customMetadata: false,
      pageFooter: "FPP Browserstack AUTO TEST",
      reportName: "FPP BS TESTS",
      customData: {
        title: "BrowserStack Automated Tests info",
        data: [
          { label: "Project", value: "FPP" },
          { label: "Execution Start Time", value: date + startTime },
          { label: "Execution End Time", value: date + endTime },
        ],
      },
    });
  },
};

// Code to support common capabilities
exports.config.capabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
