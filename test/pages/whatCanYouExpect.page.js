import { assert } from "chai";

const config = require("../config/main.conf.js");
const expect = require("chai").expect;
const environment = require("../config/environments.conf");
let timeOut = 30000;

let whatCanYouExpectPageUrl = "what-can-i-expect";

class whatCanYouExpectPage {
  /**
   * Define page elements
   */

  listOfItemsText() {
    return 'li[data-testid="fancy-list-item"] span';
  }

  bannerInfoText() {
    return '#root [data-testid="notification"]';
  }

  listItemOneText() {
    return '[data-testid="expect-item-1"]';
  }
  listItemTwoText() {
    return '[data-testid="expect-item-2"]';
  }
  listItemThreeText() {
    return '[data-testid="expect-item-3"]';
  }

  listItemFourText() {
    return '[data-testid="expect-item-3"] span strong';
  }

  pageHeader() {
    return 'h1[data-test="component-heading-content"]';
  }

  pageUrl() {
    return browser.getUrl();
  }

  leaveApplicationBtn() {
    return 'a[data-testid="leave-application"][role=button]';
  }

  navigateTo(url) {
    return browser.navigateTo(environment.dev1_env + "what-can-you-expect");
  }

  sideDrawerLink() {
    return "[data-testid='refunds-link']";
  }

  /**
   * Define page functions
   */

  verifyLeaveApplicationBtn() {
    let button = browser.$(this.leaveApplicationBtn()).getText();
    expect(button).to.eql("Leave application");
    console.log(browser.$(this.leaveApplicationBtn()).isExisting()); // true
  }

  verifyPageHeader() {
    let headerText = browser.$(this.pageHeader()).getText();
    expect(headerText).to.eql("What can you expect?");
    console.log(headerText);
  }

  verifyPageUrl() {
    let expected_url = environment.dev3_env + "what-can-you-expect";
    browser.waitUntil(() => browser.getUrl().includes(expected_url), {
      timeout: timeOut,
      timeoutMsg: `The expected URL did not include the following endpoint ${expected_url}`,
    });
    expect(browser.getUrl()).to.eql(expected_url);
  }

  goToWhatCanYouExpectPage() {
    return browser.url("/" + whatCanIExpectPageUrl);
  }

  verifyListOfItemsText(listItemNum, text) {
    try {
      if (listItemNum === "List Item 1") {
        let listOfItemOneText = browser.$(this.listItemOneText()).getText();
        expect(listOfItemOneText).to.eql(text);
        console.log(browser.$(this.listItemOneText()).getText());
      }
      if (listItemNum === "List Item 2") {
        let listOfItemTwoText = browser.$(this.listItemTwoText()).getText();
        console.log(browser.$(this.listItemTwoText()).getText());
        expect(listOfItemTwoText).to.eql(text);
      }
      if (listItemNum === "List Item 3") {
        let listOfItemThreeTexts = browser
          .$(this.listItemThreeText())
          .getText();
        let listOfItemThreeTextTrim = listOfItemThreeTexts
          .replace(/(\r\n|\n|\r|)/gm, "")
          .trimEnd();
        let textTrim = text.replace(/(\r\n|\n|\r)/gm, "").trimEnd();
        console.log(listOfItemThreeTextTrim);
        console.log(textTrim);
        expect(listOfItemThreeTextTrim).eql(textTrim)
      } else if (listItemNum === null) {
        throw new Error(
          `List item number not ${listItemNum} found and there is no match ${text}`
        );
      }
    } catch (e) {
      console.log(e);
    }
  }

  verifyBannerInfoText(text) {
    let bannerText = browser.$(this.bannerInfoText()).getText();
    let isExisting = browser.$(this.bannerInfoText()).isExisting();
    console.log(isExisting);
    expect(bannerText).to.eql(text);
  }

  verifySideDrawerLink() {
    browser.$(this.sideDrawerLink()).scrollIntoView();
    let sideDrawerLink = browser.$(this.sideDrawerLink()).isExisting();
    expect(sideDrawerLink).to.eql(true);
    console.log(sideDrawerLink);
  }

  clickOnSideDrawerLink() {
    browser.$(this.sideDrawerLink()).click();
  }
}
export default new whatCanYouExpectPage();
