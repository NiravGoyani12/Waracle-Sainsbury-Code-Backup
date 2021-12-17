import { assert, expect } from "chai";
import verifyNextButtonText from "../../support/common_assertions/verifyNextButton";
import verifyLeaveApplicationButtonText from "../../support/common_assertions/verifyLeaveApplicationButton";
import environment from "../config/environments.conf";
import progressBarData from "../../data/progressBar_constant";
class YourNameAndAddressPage {
  /**
   * Define page elements
   */

  goToYourNameAndAddressPage() {
    return browser.url("/about-you");
  }

  pageUrl() {
    return browser.getUrl();
  }

  yourNameAndAddressPageTitle() {
    return "h2[data-test='heading-1-content']";
  }

  customerFullName() {
    return "[data-testid='name-summary-title'] strong";
  }

  titleTwo() {
    return "h2[data-test='heading-2-content']";
  }

  currentAddressTitle() {
    return "[data-testid='address-summary-title'] strong";
  }

  addressLineOne() {
    return "dd[data-testid='address-summary-0']";
  }

  addressLineTwo() {
    return "dd[data-testid='address-summary-1']";
  }

  postCode() {
    return "dd[data-testid='address-summary-2']";
  }

  dontLiveAtAddressTitle() {
    return "[data-testid='change-details-text']";
  }

  changeYourDetailsLink() {
    return "[data-testid='leave-application-link']";
  }

  bannerInfoOne() {
    return "[data-test='component-alert']";
  }

  progressBarNumNameAndAddress() {
    return "[data-test='component-progress-tracker-step-0'] div";
  }

  progressBarTextNameAndAddress() {
    return "[data-test='component-progress-tracker-step-0'] span";
  }

  /**
   * Define page functions
   */

  checkPageUrl() {
    expect(browser.getUrl()).to.eql(environment.dev3_env + "about-you");
  }

  checkYourNamePageTitleText() {
    let yourNameAndAddressPageTitleText = browser
      .$(this.yourNameAndAddressPageTitle())
      .getText();
    let expected_yourNameAndAddressPageTitle = "Your name";
    assert(
      yourNameAndAddressPageTitleText.includes(
        expected_yourNameAndAddressPageTitle
      ),
      ` Your name and address title - ${yourNameAndAddressPageTitleText} does not include ${expected_yourNameAndAddressPageTitle}`
    );
    console.log(`Your name and address title is:${yourNameAndAddressPageTitleText}`);
  }

  checkCustomerFullName(expected_full_name) {
    let customerName = browser.$(this.customerFullName()).getText();
    assert(
      customerName.includes(expected_full_name),
      `Customer name ${customerName} does not include ${expected_full_name}`
    );
  }

  checkYourAddressTitleText() {
    let titleTwoText = browser.$(this.titleTwo()).getText();
    let expectedTitleTwoText = "Your address";
    assert(
      titleTwoText.includes(expectedTitleTwoText),
      ` Your address title - ${titleTwoText} does not include ${expectedTitleTwoText}`
    );
    console.log(`Your address title is:${titleTwoText}`);
  }

  checkCurrentAddressSubTitleText() {
    let currentAddressSubTitleText = browser
      .$(this.currentAddressTitle())
      .getText();
    let expectedCurrentAddressSubTitleText = "Current address:";

    assert(
      currentAddressSubTitleText.includes(expectedCurrentAddressSubTitleText),
      `Current Address - ${currentAddressSubTitleText} does not include ${expectedCurrentAddressSubTitleText}`
    );
    console.log(`Current Address title is:${currentAddressSubTitleText}`)
  }

  checkCustomerAddressLineOne(expectedAddressLineOne) {
    let addressLineOne = browser.$(this.addressLineOne()).getText();
    assert(
      addressLineOne.includes(expectedAddressLineOne),
      `Customer last name ${addressLineOne} does not include ${expectedAddressLineOne}`
    );
  }

  checkCustomerAddressLineTwo(expectedAddressLineTwo) {
    if (expectedAddressLineTwo === null) {
      console.log("Customer does not have a second address line");
    } else {
      let addressLineTwo = browser.$(this.addressLineTwo()).getText();
      assert(
        addressLineTwo.includes(expectedAddressLineTwo),
        `Customers town address ${addressLineTwo} does not match ${expectedAddressLineTwo}`
      );
    }
  }

  checkCustomerPostCode(expectedPostcode) {
    let customerPostCode = browser.$(this.postCode()).getText();
    assert(
      customerPostCode.includes(expectedPostcode),
      `Customer last name ${customerPostCode} does not include ${expectedPostcode}`
    );
  }

  checkThePresencesOfDontLiveAtAddressLinkText() {
    let doNotLiveAtAddress = browser.$(this.dontLiveAtAddressTitle()).getText();
    let expectedDoNotLiveAtAddressText = "Don’t live at this address?";
    assert(
      doNotLiveAtAddress.includes(expectedDoNotLiveAtAddressText),
      `Dont Live At Address ${doNotLiveAtAddress} does not include ${expectedDoNotLiveAtAddressText}`
    );
    console.log(`The dont live at address subtitle is: ${doNotLiveAtAddress}`)
  }

  checkThePresencesOfChangeYourDetailsLinkText() {
    let changeYourDetailsLinkText = browser
      .$(this.changeYourDetailsLink())
      .getText();
    let expectedChangeYourDetailsText = "Go back and change your details";
    assert(
      changeYourDetailsLinkText.includes(expectedChangeYourDetailsText),
      `dontLiveAtAddress change your details link ${changeYourDetailsLinkText} does not include ${expectedChangeYourDetailsText}`
    );
    console.log(`The change your details link is:${changeYourDetailsLinkText}` )
  }

  checkThePresencesOfBannerInfoOneText() {
    let bannerInfoOne = browser.$(this.bannerInfoOne()).getText();
    let expectedBannerInfoOneText =
      "For security reasons, we have to use the name and address registered to your Argos account for your application.";
    assert(
      bannerInfoOne.includes(expectedBannerInfoOneText),
      `dontLiveAtAddress banner info ${bannerInfoOne} does not include ${expectedBannerInfoOneText}`
    );
  }

  checkCorrectYourNameAndYourAddressPageContentIsDisplayed() {
    this.checkYourNamePageTitleText();
    this.checkYourAddressTitleText();
    this.checkCurrentAddressSubTitleText();
    this.checkThePresencesOfDontLiveAtAddressLinkText();
    this.checkThePresencesOfChangeYourDetailsLinkText();
    this.checkThePresencesOfBannerInfoOneText();
    verifyNextButtonText();
    verifyLeaveApplicationButtonText();
  }

  checkCorrectCustomerNameDetailsAreDisplayed(expectedFullname) {
    this.checkCustomerFullName(expectedFullname);
  }

  checkCorrectCustomerAddressDetailsAreDisplayed(
    expectedAddressLineOne,
    expectedAddressLineTwo,
    expectedPostCode
  ) {
    this.checkCustomerAddressLineOne(expectedAddressLineOne);
    this.checkCustomerAddressLineTwo(expectedAddressLineTwo);
    this.checkCustomerPostCode(expectedPostCode);
  }

  verifyProgressBarNumberIsHighlighted(expBarStatusNumber) {
    let actualProgressBarNumberColor = browser
      .$(this.progressBarNumNameAndAddress())
      .getCSSProperty("background")["value"];
    let expProgressBarNumberBackgroundColour =
      progressBarData.progressBarData[0];
    expect(actualProgressBarNumberColor).to.includes(
      expProgressBarNumberBackgroundColour
    );

    let actualProgressBarNum = browser
      .$(this.progressBarNumNameAndAddress())
      .getText();
    expect(actualProgressBarNum).to.eql(expBarStatusNumber);
  }

  verifyProgressBarTextIsHighlighted(expBarStatusText) {
    let actualProgressBarTextColor = browser
      .$(this.progressBarTextNameAndAddress())
      .getCSSProperty("font-weight")["value"];
    let expProgressBarTextColourSafari = progressBarData.progressBarData[1];
    let expProgressBarTextColour = progressBarData.progressBarData[2];
    if (actualProgressBarTextColor === expProgressBarTextColourSafari) {
      expect(actualProgressBarTextColor).to.equal(
        expProgressBarTextColourSafari
      );
    } else
      expect(actualProgressBarTextColor).to.equal(expProgressBarTextColour);

    let actualProgressBarText = browser
      .$(this.progressBarTextNameAndAddress())
      .getText();
    expect(actualProgressBarText).to.eql(expBarStatusText);
  }
}
export default new YourNameAndAddressPage();
