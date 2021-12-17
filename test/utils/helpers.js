import applicationIdGenerator from "./applicationIdGenerator";
import footerPage from "../pages/footer.page";
import { assert } from "chai";
const mainConfig = require("../config/main.conf");
const timeOut = 90000;
let url;
class Helpers {
  /**
   * COMMON ACTIONS - STEPS
   */

  getUrl() {
    return url;
  }

  reviewApplicationHeader() {
    return 'h1[data-test="component-heading-content"]';
  }

  async navigate(pageToNavigate, parameter) {
    let url = mainConfig.config.baseUrl;
    pageToNavigate = pageToNavigate.toLowerCase();
    if (typeof parameter === "undefined" || parameter === null) {
      parameter = "";
    }

    {
      switch (pageToNavigate) {
        case "are you eligible":
          browser.url("/" + "are-you-eligible");
          break;

        case "what can you expect":
          browser.url(url + "what-can-you-expect");
          break;

        case "how we use your data":
          browser.url(url + "how-we-use-your-data");
          break;

        case "about you":
          await browser.url(url + "about-you");
          break;

        case "your details":
          browser.url(url + "your-details");
          break;

        case "your occupation":
          browser.url(url + "your-occupation");
          break;

        case "your financials":
          browser.url(url + "your-financials");
          break;

        case "review application":
          browser.url(url + "review-application");
          break;

        case "important information":
          browser.url(url + "important-information");
          break;

        case "idiq":
          browser.url(url + "idiq");
          break;

        case "its time to sign":
          browser.url(url + "time-to-sign");
          break;

        case "decline offer":
          browser.url(url + "my-quote");
          break;

          break;
        case "approval":
          browser.url(url + "approval/accepted");
          break;
        case "time to sign":
          browser.url(url + "time-to-sign");
          break;

        case "calculator":
          let data_c = await applicationIdGenerator.getApplicationId();
          browser.url(url + "repayment-calculator?applicationId=" + data_c);
          break;
        case "setup application state":
          const appId = await applicationIdGenerator.getApplicationId();
          await browser.url(
            url + "repayment-calculator?applicationId=" + appId
          );
          await browser.waitUntil(
            async () =>
              (await $("[data-testid='item-definition-4']").getText()) !== "0%",
            {
              timeout: timeOut,
              timeoutMsg: "expected application to be loaded after 5s",
            }
          );
      }
    }
  }

  clickOnFooterLink(link) {
    switch (link) {
      case "Privacy hub":
        footerPage.clickOnPrivacyHubLink();
        break;

      case "Privacy policy":
        footerPage.clickOnPrivacyPolicyLink();
        break;
      case "Cookies policy":
        footerPage.clickOnCookiesPolicyLink();
        break;

      case "List of cookies":
        footerPage.clickOnListOfCookiesLink();
        break;

      case "Terms & conditions":
        footerPage.clickOnTermsAndConditionsLink();
        break;

      default:
        console.log("==== There is no link to click ! ====");
        break;
    }
  }

  timeToWait(time) {
    let wait = time * 1000;
    console.log(
      `The time I am waiting is ${wait} milliseconds before I proceed`
    );
    browser.pause(wait);
  }

  checkPageUrl(page) {
    let currentBrowserUrl = browser.getUrl();
    expect(currentBrowserUrl.includes(page));
    console.log(`The current url contains the following endpoint: ${page}`);
  }

  stringLengthComparator(a, b) {
    return a.length < b.length || a.length > b.length
      ? true
      : b.length < a.length || b.length > a.length
      ? true
      : false;
  }
}
export default new Helpers();
