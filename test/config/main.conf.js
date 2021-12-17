const dotenv = require("dotenv").config();
const { removeSync } = require("fs-extra");
const environment = require("./environments.conf");
const report = require("multiple-cucumber-html-reporter");
const cucumberJson = require("wdio-cucumberjs-json-reporter").default;

let today = new Date();
let date =
  today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
let startTime =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

let baseUrl = environment.dev3_env;

exports.config = {
  //
  // ====================
  // Runner Configuration
  // ====================
  //
  // WebdriverIO allows it to run your tests in arbitrary locations (e.g. locally or
  // on a remote machine).
  //runner: "local",
  //path: "/wd/hub",

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
  maxInstances: 1,

  capabilities: [
    {
      browserName: "firefox",
      "moz:firefoxOptions": {
        args: [
          "--headless",
          "user-agent=...",
          //"--disable-gpu",
          //  "--window-size=1800,1500",
          //  "--kiosk",
          // "--disable-notifications",
          // "--window-size=1920,1400",
        ],
      },
      "cjson:metadata": {
        browser: {
          name: "FF",
          version: "89.0.2 (64-bit)",
        },
        device: "OS X",
        platform: {
          name: "OS X",
          version: "Mojave",
        },
      },
    },

    {
      browserName: "safari",
    },

    {
      browserName: "chrome",

      "goog:chromeOptions": {
        args: [
          "--headless",
          "user-agent=...",
          "--disable-gpu",
          "--window-size=1800,1500",
        ],
        // args: [
        //   "--kiosk",
        //   "--window-size=1920,1400",
        //   "--disable-gpu",
        //   "--disable-notifications",
        // ],
      },
      "cjson:metadata": {
        browser: {
          name: "chrome",
          version: "latest-beta",
        },
        device: "OS X",
        platform: {
          name: "OS X",
          version: "Mojave",
        },
      },
    },
  ],

  // ===================
  // Test Configurations
  // ===================
  // Define all options that are relevant for the WebdriverIO instance here
  //
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  sync: true,
  logLevel: "error", // Level of logging verbosity: silent | verbose | command | data | result | error
  coloredLogs: true, // Enables colors for log output

  // If you only want to run your tests until a specific amount of tests have failed use
  // bail (default is 0 - don't bail, run all tests).
  bail: 0,

  baseUrl: baseUrl,

  // Default timeout for all waitFor* commands.
  waitForTimeout: 10000,
  //
  // Default timeout in milliseconds for request
  // if browser driver or grid doesn't send response
  connectionRetryTimeout: 120000,
  //
  // Default request retries count
  connectionRetryCount: 3,

  /**
   * The number of times to retry the entire spec file when it fails as a whole
   */
  //specFileRetries: 1,

  reporters: [
    [
      "spec",
      {
        addConsoleLogs: true,
      },
    ],
    [
      "cucumberjs-json",
      {
        jsonFolder: "./cucumber-reports/test/",
        language: "en",
      },
    ],
  ],

  services: ["selenium-standalone", "intercept"],

  framework: "cucumber",
  // If you are using Cucumber you need to specify the location of your step definitions.
  cucumberOpts: {
    timeout: 900000,
    requireModule: ["@babel/register"],
    strict: false, // <boolean> fail if there are any undefined or pending steps
    tagExpression: [], // <string> (expression) only execute the features or scenarios with tags matching the expression
    require: [
      "./test/step_definitions/**/given.js",
      "./test/step_definitions/**/when.js",
      "./test/step_definitions/**/then.js",
    ],
    ignoreUndefinedDefinitions: false,
  },

  //
  // =====
  // Hooks
  // =====

  onPrepare: () => {
    // Remove the `.tmp/` folder that holds the json and report files
    removeSync("./cucumber-reports/");
  },

  before: function () {
    /**
     * Setup the Chai assertion framework
     */

    browser.setTimeout({ pageLoad: 10000 });

    const chai = require("chai");
    global.expect = chai.expect;
    global.assert = chai.assert;
    global.should = chai.should();
  },

  /**
   * Runs before a Cucumber feature
   */
  beforeFeature: function (uri, feature) {
    //browser.maximizeWindow();
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
    browser.maximizeWindow();
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
    console.log(`\nStarting new scenario session!`);
    browser.execute("window.sessionStorage.clear()");
  },
  onComplete: function (capabilities, specs) {
    let today = new Date();
    let date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    let endTime =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    report.generate({
      jsonDir: "./cucumber-reports/test/",
      reportPath: "./cucumber-reports/",
      // openReportInBrowser: true,
      displayDuration: true,
      customMetadata: false,
      pageFooter: "FPP FE Auto Test",
      reportName: "FPP FE LOCAL TEST",
      customData: {
        title: "Automated Tests Local",
        data: [
          { label: "Project", value: "FPP" },
          { label: "Execution Start Time", value: date + startTime },
          { label: "Execution End Time", value: date + endTime },
        ],
      },
    });
  },
};
