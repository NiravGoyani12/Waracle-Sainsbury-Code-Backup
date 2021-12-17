const environment = require("../config/environments.conf");
import nextButton from "../../support/common_elements/nextButton";
const expect = require("chai").expect;

let areYouEligiblePageUrl = "/are-you-eligible";

class areYouEligiblePage {
  /**
   * define css locators
   */

  listOfItemsText() {
    return 'li[data-testid="fancy-list-item"] span';
  }

  listItemOneText() {
    return '[data-testid="eligible-item-1"]';
  }

  listItemTwoText() {
    return '[data-testid="eligible-item-2"]';
  }

  listItemThreeText() {
    return '[data-testid="eligible-item-3"]';
  }

  listItemFourText() {
    return '[data-testid="eligible-item-4"]';
  }

  listItemFiveText() {
    return '[data-testid="eligible-item-5"]';
  }

  listItemSixText() {
    return '[data-testid="eligible-item-6"]';
  }

  pageHeader() {
    return "[data-test='component-heading-content']";
  }

  youCanApplyText() {
    return '[data-test="component-heading-intro"] p';
  }

  listOfItemText() {
    return 'li[data-testid="fancy-list-item"] span';
  }

  sideDrawerLink() {
    return "#side-drawer-link";
  }

  nextBtn() {
    return '[data-testid="next"][role=button]';
  }

  whatCanIExpectPageHeading() {
    return 'h1[data-test="component-heading-content"]';
  }

  leaveApplicationBtn() {
    return 'a[data-testid="leave-application"][role=button]';
  }

  argosTrolleyPage() {
    return "#basket-content  h1";
  }

  goToAreYouEligiblePage() {
    return browser.url(areYouEligiblePageUrl);
  }

  sideDrawerHeaderTitle() {
    return "#component-drawer-drawer-title";
  }

  sideDrawerHeaderText() {
    return "#component-drawer-drawer-title strong";
  }

  sideDrawerContent() {
    return "[data-testid='side-drawer-content']";
  }

  sideDrawerComponent() {
    return '[data-testid="side-drawer-component"]';
  }

  sideDrawerCloseIcon() {
    return 'button[data-test="component-drawer-button-close"]';
  }

  sideDrawerCloseButton() {
    return 'footer button[data-testid="close"]';
  }

  sideDrawerCloseIconFocusState() {
    return 'button[data-autofocus="true"][data-test="component-drawer-button-close"]';
  }

  noticeOfCorrectionLinkState() {
    return '[data-focus-lock-disabled="disabled"]';
  }

  SideDrawerOpenState() {
    return '[data-focus-lock-disabled="false"]';
  }

  SideDrawerCloseState() {
    return '[data-focus-lock-disabled="disabled"]';
  }

  verifyPageHeader() {
    let isExisting = browser.$(this.pageHeader()).isExisting();
    console.log(isExisting);
    let headerText = browser.$(this.pageHeader()).getText();
    expect(headerText).to.eql("Are you eligible?");
    console.log(headerText);
  }

  verifyText() {
    let text = browser.$(this.youCanApplyText()).getText();
    expect(text).to.eql("You can apply if you:");
  }

  verifyNextBtn() {
    let isExisting = browser.$(nextButton.nextButtons()).isExisting();
    console.log(isExisting);
  }

  verifyListOfItemsText(listItemNum, text) {
    try {
      if (listItemNum === "List Item 1") {
        let listOfItemOneText = browser.$(this.listItemOneText()).getText();
        expect(listOfItemOneText).to.eql(text);
        console.log(listOfItemOneText);
      }
      if (listItemNum === "List Item 2") {
        let listOfItemTwoText = browser.$(this.listItemTwoText()).getText();
        console.log(listOfItemTwoText);
        expect(listOfItemTwoText).to.eql(text);
      }
      if (listItemNum === "List Item 3") {
        let listOfItemThreeText = browser.$(this.listItemThreeText()).getText();
        console.log(listOfItemThreeText);
        expect(listOfItemThreeText).to.eql(text);
      }
      if (listItemNum === "List Item 4") {
        let listOfItemFourText = browser.$(this.listItemFourText()).getText();
        console.log(listOfItemFourText);
        expect(listOfItemFourText).to.eql(text);
      }

      if (listItemNum === "List Item 5") {
        let listOfItemFiveText = browser.$(this.listItemFiveText()).getText();
        console.log(listOfItemFiveText);
        expect(listOfItemFiveText).to.eql(text);
      }
      if (listItemNum === "List Item 6") {
        let listOfItemSixText = browser.$(this.listItemSixText()).getText();
        console.log(listOfItemSixText);
        expect(listOfItemSixText).to.eql(text);
      } else if (listItemNum === null) {
        throw new Error(
          `List item number ${listItemNum} not found and there is no match ${text}`
        );
      }
    } catch (e) {
      console.log(e);
    }
  }

  verifyListLinkText(linkText) {
    let isExisting = browser.$(this.sideDrawerLink()).isExisting();
    console.log(isExisting);
    let sideDrawerLinkText = browser.$(this.sideDrawerLink()).getText();
    console.log(sideDrawerLinkText);
    expect(sideDrawerLinkText).to.eql(linkText);
  }

  verifySideDrawerDisplayed() {
    let sideDrawer = browser.$(this.sideDrawerComponent()).isExisting();
    expect(sideDrawer).to.equal(true);
    console.log(sideDrawer);
  }

  verifySideDrawerTitle(sideDrawerTitle) {
    let h1 = browser.$(this.sideDrawerHeaderText()).getText();
    console.log(h1);
    expect(h1).to.eql(sideDrawerTitle);
  }

  verifySideDrawerContent() {
    let sideDrawerText = browser.$(this.sideDrawerContent()).getText();
    let actualSideDrawerText1 =
      "A Notice of Correction is essentially a short statement that you can add to individual items included in your credit report. It should be no more than 200 words, but it explains why a debt is showing up and why this is not reflective of your general approach to meeting repayments.";
    let actualSideDrawerText2 =
      "At that point, if any lenders are considering your application with a view to lending you money, they have a legal obligation to read the Notice of Correction. However, they are not obliged to take this into account when deciding whether or not to allow you to borrow.";
    expect(sideDrawerText).to.includes(actualSideDrawerText1);
    expect(sideDrawerText).to.includes(actualSideDrawerText2);
  }

  verifyCloseIconOnSideDrawer() {
    let isExisting = browser.$(this.sideDrawerCloseIcon()).isExisting();
    expect(isExisting).to.eql(true);
    console.log(isExisting);
  }

  verifyCloseButtonOnSideDrawer() {
    let isExisting = browser.$(this.sideDrawerCloseButton()).isExisting();
    expect(isExisting).to.eql(true);
    console.log(isExisting);
  }

  verifyCloseIconFocusState() {
    let isExisting = browser
      .$(this.sideDrawerCloseIconFocusState())
      .isExisting();
    expect(isExisting).to.eql(true);
    console.log(isExisting);
  }

  verifySideDrawerComponentCloseState() {
    let sideDrawerClosed = browser.$(this.SideDrawerCloseState()).isExisting();
    let sideDrawerOpened = browser.$(this.SideDrawerOpenState()).isExisting();
    expect(sideDrawerClosed).to.eql(true);
  }

  verifyNoticeOfCorrectionLinkState() {
    let noticeOfCorrectionLinkFocusState = browser
      .$(this.noticeOfCorrectionLinkState())
      .isExisting();
    expect(noticeOfCorrectionLinkFocusState).to.eql(true);
  }

  clickSideDrawLink() {
    browser.$(this.sideDrawerLink()).click();
  }

  closeSideDraw() {
    browser.$(this.sideDrawerCloseButton()).click();
  }
}
export default new areYouEligiblePage();
