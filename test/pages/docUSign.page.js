const timeOut = 60000;
class DocUSignPage {
  /**
   * Define page elements
   */

  docSignContinueButton() {
    return "button#action-bar-btn-continue";
  }

  signButton() {
    return ".signature-tab-content.tab-button-yellow.v2";
  }
  adoptAndSign() {
    return ".footer > button:nth-of-type(1)";
  }

  finishButton() {
    return "#action-bar-btn-finish";
  }

  selectStyle() {
    return "//*[@id='tab-select-style']";
  }

  /**
   * Define page functions
   */

  verifyDocuSignUrl() {
    let expected_url = "demo.docusign.net/Signing/";
    browser.waitUntil(() => browser.getUrl().includes(expected_url), {
      timeout: timeOut,
      timeoutMsg: `The expected URL did not include the following endpoint ${expected_url}`,
    });
    expect(browser.getUrl()).contains(expected_url);
    console.log(`The docusign url is displayed with ${expected_url}`);
  }

  clickContinueBanner() {
    browser.$(this.docSignContinueButton()).waitForExist({ timeout: timeOut });
    browser.$(this.docSignContinueButton()).click();
    console.log("Clicking on docusign continue button");
  }

  signDoc() {
    browser.$(this.signButton()).waitForExist({ timeout: timeOut });
    browser.$(this.signButton()).scrollIntoView();
    browser.$(this.signButton()).click();
    console.log("Clicking on sign button");
  }
  clickAdoptAndSignButton() {
    if (browser.$(this.selectStyle()).isExisting()) {
      browser.$(this.selectStyle()).waitForExist({ timeout: timeOut });
      browser.$(this.selectStyle()).click();
      browser.$(this.adoptAndSign()).click();
    } else {
      browser.$(this.adoptAndSign()).waitForExist({ timeout: timeOut });
      browser.$(this.adoptAndSign()).click();
      console.log("Clicking on adopt button");
    }
  }
  clickFinishButton() {
    browser.waitUntil(
      () => browser.$(this.finishButton()).isExisting() === true
    ),
      {
        timeout: timeOut,
      };
   //browser.$(this.finishButton()).scrollIntoView();
    browser.$(this.finishButton()).click();
    console.log("Clicking on finish button");
  }
}
export default new DocUSignPage();
