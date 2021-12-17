const expect = require("chai").expect;
const environment = require("../config/environments.conf");
const timeOut = 30000;

class basketPage {
  /**
   *** define css locators
   */

  get pageUrl() {
    return browser.getUrl();
  }

  acceptAllCookies() {
    return "button#consent_prompt_submit";
  }

  basketPageHeader() {
    return 'h3[data-e2e="basket-emptytitle"]';
  }

  verifyAcceptAllCookiesDisplayed() {
    browser.$(this.acceptAllCookies()).waitForDisplayed({ timeout: timeOut });
    let isExisting = browser.$(this.acceptAllCookies()).isExisting();
    //expect(isExisting).to.eql(true);
    if (isExisting === true) {
      browser.$(this.acceptAllCookies()).click();
    }
  }

 verifyPageUrl() {
    let expected_url = environment.argos_basket;
     browser.waitUntil(()=> browser.getUrl().includes(expected_url), {
      timeout: timeOut,
      timeoutMsg: `The expected URL did not include the following endpoint ${expected_url}
        the url currently is ${browser.getUrl()}`,
    });
    expect(browser.getUrl()).to.include(expected_url);
  }

  verifyCheckOutUrl() {
    let expected_url = "/basket";
    browser.waitUntil(() => browser.getUrl().includes(expected_url), {
      timeout: timeOut,
      timeoutMsg: `The expected URL did not include the following endpoint ${expected_url}`,
    });
    expect(browser.getUrl()).to.include(expected_url);
  }
}
export default new basketPage();
