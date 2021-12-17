const expect = require("chai").expect;
const environment = require("../config/environments.conf");
const timeOut = 20000;

class itsTimeToSignPage {
  /**
   * Define page elements
   */

  pageTitleOne() {
    return "[data-test='component-heading-content']";
  }

  pageContentOne() {
    return "#root .logo-container p.prefix";
  }

  pageContentTwo() {
    return "#root  p.complete-application";
  }

  pageTitleTwo() {
    return '#root .logo-container img[alt="Docusign Logo"]';
  }

  pageContentThree() {
    return 'ul li:nth-child(1)[data-testid="fancy-list-item"] span';
  }

  pageContentFour() {
    return 'ul li:nth-child(2)[data-testid="fancy-list-item"] span';
  }

  continueToDocuSignBtn() {
    return '#root button[data-testid="continue-to-docusign"]';
  }

  leaveApplicationBtn() {
    return '#root a[data-testid="leave-application"]';
  }

  /**
   * Define page functions
   */

  verifyTimeToSignPageUrl() {
    let expected_url = "time-to-sign";
    browser.waitUntil(() => browser.getUrl().includes(expected_url), {
      timeout: timeOut,
      timeoutMsg: `The expected URL did not include the following endpoint ${expected_url}`,
    });
    expect(browser.getUrl()).contains(expected_url);
  }

  verifyTimeToSignPageTitleOne(pageTitleOne) {
    let TitleOne = browser.$(this.pageTitleOne()).isExisting();
    console.log(TitleOne);
    let titleText = browser.$(this.pageTitleOne()).getText();
    console.log(titleText);
    expect(titleText).to.eql(pageTitleOne);
  }
  verifyTimeToSignPageContentOne(pageContentOne) {
    let contentOne = browser.$(this.pageContentOne()).isExisting();
    console.log(contentOne);
    let contentOneText = browser.$(this.pageContentOne()).getText();
    console.log(contentOneText);
    expect(contentOneText).to.eql(pageContentOne);
  }

  verifyTimeToSignPageTitleTwo(pageTitleTwo) {
    let titleTwo = browser.$(this.pageTitleTwo()).isExisting();
    console.log(titleTwo);
    let titleTwoText = browser.$(this.pageTitleTwo()).getAttribute("alt");
    console.log(titleTwoText);
    expect(titleTwoText).to.eql(pageTitleTwo);
  }

  verifyTimeToSignPageContentTwo(pageContentTwo) {
    let contentTwo = browser.$(this.pageContentTwo()).isExisting();
    console.log(contentTwo);
    let contentText = browser.$(this.pageContentTwo()).getText();
    expect(contentText).eql(pageContentTwo);
  }

  verifyTimeToSignPageContentThree(pageContentThree) {
    let contentThree = browser.$(this.pageContentThree()).isExisting();
    console.log(contentThree);
    let contentThreeText = browser.$(this.pageContentThree()).getText();
    console.log(contentThreeText);
    expect(contentThreeText).to.eql(pageContentThree);
  }

  verifyTimeToSignPageContentFour(pageContentFour) {
    let contentFour = browser.$(this.pageContentFour()).isExisting();
    console.log(contentFour);
    let contentFourText = browser.$(this.pageContentFour()).getText();
    console.log(contentFourText);
    expect(contentFourText).to.eql(pageContentFour);
  }

  verifyTimeToSignPageCTAOne(continueDocuSignBtn) {
    let continueToDocSigBtn = browser
      .$(this.continueToDocuSignBtn())
      .isExisting();
    console.log(continueToDocSigBtn);
    let continueButtonText = browser.$(this.continueToDocuSignBtn()).getText();
    console.log(continueButtonText);
    expect(continueButtonText).to.eql(continueDocuSignBtn);
  }

  verifyTimeToSignPageCTATwo(leaveApplicationBtn) {
    let leaveApplicationButton = browser
      .$(this.leaveApplicationBtn())
      .isExisting();
    console.log(leaveApplicationButton);
    let leaveApplicationButtonText = browser
      .$(this.leaveApplicationBtn())
      .getText();
    console.log(leaveApplicationButtonText);
    expect(leaveApplicationButtonText).to.eql(leaveApplicationBtn);
  }
  clickContinueToDocuSign() {
    browser.$(this.continueToDocuSignBtn()).click();
  }
}

export default new itsTimeToSignPage();
