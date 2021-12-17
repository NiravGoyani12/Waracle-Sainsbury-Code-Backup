import { assert } from "chai";

const expect = require("chai").expect;
const environment = require("../config/environments.conf");
const side_drawer = require("../../data/howweuseyourdata_screen_constants");
const constants = require("../../data/argos_info_constants");
const timeOut = 20000;



class howWeWillUseYourDataPage {
  /**
   * Define page elements
   */

  goToHowWeUseYourDataPage() {
    return browser.url("/how-we-use-your-data").getUrl;
  }

  howWeUseYourDataPageTitle() {
    return "//*[text()='How we will use your data']";
  }

  howWeUseYourDataMainPageTitle() {
    return "[data-test='header-1-content']";
  }
  howWeUseYourDataSubPageTitle() {
    return "[data-test='header-3-content']";
  }
  dataText() {
    return "p[data-testid='info-sidedrawer-statement']";
  }

  howWeWillUseYourDataLink() {
    return "[data-testid='how-we-will-use-your-data-side-drawer-link']";
  }

  get pageUrl() {
    return browser.getUrl();
  }

  checkbox() {
    return "label#declaration-label";
  }

  checkboxWrapper() {
    return "label .checkboxWrapper";
  }

  checkboxSelected() {
    return 'label#declaration-label[data-selected="true"]';
  }

  checkboxUnSelected() {
    return '#declaration-label[data-selected="false"]';
  }

  checkboxText() {
    return "[data-testid='checkbox-statement']";
  }

  bannerText() {
    return 'form span[data-testid="document-info-text"]';
  }

  leaveApplicationBtn() {
    return 'a[data-testid="leave-application"][role=button]';
  }

  agreementTextOne() {
    return "[data-testid='checkbox-statement-1']";
  }

  agreementTextTwo() {
    return "[data-testid='checkbox-statement-2']";
  }

  agreementTextThree() {
    return "[data-testid='checkbox-statement-3']";
  }

  errorMessage() {
    return 'form [data-testid="declaration-error"]';
  }

  checkboxDataErrorBorder() {
    return '#declaration-label[data-error="true"]';
  }

  sideDrawTitle() {
    return "//h4[@id='component-drawer-drawer-title']";
  }

  sideDrawContentOne() {
    return "[data-testid ='paragraph-1']";
  }
  sideDrawContentTwo() {
    return "[data-testid='personal-data-list']";
  }
  sideDrawContentThree() {
    return "[data-testid ='paragraph-2']";
  }

  sideDrawContentFour() {
    return "[data-testid ='paragraph-3']";
  }

  sideDrawCloseIcon() {
    return "[data-test='component-drawer-button-close'] > svg";
  }

  sideDrawCloseButton() {
    return "button[data-testid='close']";
  }

  sideDrawGroupPrivacyLink() {
    return "a[title='Sainsbury’s Group Privacy Hub']";
  }

  accessibleButtonLink() {
    return "button#accessible-document-request-button";
  }

  accessibleTitle() {
    return "//strong[contains(text(),'Accessible Communication?')]";
  }

  accessibleContentOne() {
    return "//*[contains(text(),'Thanks, we have updated your preference.')]";
  }

  accessibleContent() {
    return "//*[contains(text(),'If you would like to receive future Argos Monthly ')]";
  }
  accessibleNoneButton() {
    return "label#None-label  .POJpi.RadioListstyles__RadioOption-sc-1atiffa-4";
  }

  accessibleLargePrintButton() {
    return "label#Large_Print-label  .POJpi.RadioListstyles__RadioOption-sc-1atiffa-4";
  }

  accessibleBrailleButton() {
    return "label#Braille-label  .POJpi.RadioListstyles__RadioOption-sc-1atiffa-4";
  }

  accessibleAudioButton() {
    return "label#Audio_CD-label  .POJpi.RadioListstyles__RadioOption-sc-1atiffa-4";
  }

  accessibleConfirmButton() {
    return "//button[contains(text(),'Confirm')]";
  }
  accessibleCloseButton() {
    return "//*[text()='Close']";
  }

  accessibleXIcon() {
    return ".Drawerstyles__CloseButton-sc-7kh0ae-3.iRRqrO > svg";
  }

  /**
   * Define page functions
   */

  verifyHowWeUseYourDataUrl() {
    let endpoint = "how-we-use-your-data";
    if (browser.getUrl().includes(environment.dev1_env)) {
      expect(browser.getUrl()).to.eql(environment.dev1_env + endpoint);
    } else if (browser.getUrl().includes(environment.dev2_env)) {
      expect(browser.getUrl()).to.eql(environment.dev2_env + endpoint);
    } else if (browser.getUrl().includes(environment.dev3_env)) {
      expect(browser.getUrl()).to.eql(
        environment.dev3_env + "how-we-use-your-data"
      );
    } else if (browser.getUrl().includes(environment.local_url)) {
      expect(browser.getUrl()).to.eql(
        environment.local_url + "how-we-use-your-data"
      );
    } else {
      throw new Error("The environment is not recognized-" + browser.getUrl());
    }
  }

  checkHowWeUseYourDataPageTitleIsDisplayed() {
    let howWeUseYourDataTitle = browser
      .$(this.howWeUseYourDataPageTitle())
      .getText();
    let expected_howWeUseYourDataTitle = "How we will use your data";
    if (
      (expect(howWeUseYourDataTitle).to.eql(expected_howWeUseYourDataTitle),
      `How we use your data title - ${howWeUseYourDataTitle} does not include ${expected_howWeUseYourDataTitle}`)
    ) {
      console.log(`How we use your data title- is ${howWeUseYourDataTitle}`);
    }
  }

  checkHowWeUseYourDataInfoTextIsDisplayed() {
    let howWeUseYourDataInfo = browser.$(this.dataText()).getText();
    let expected_howWeUseYourDataInfo =
      "To understand how Argos uses your information please click the link below.";

    if (
      (expect(howWeUseYourDataInfo).to.eql(expected_howWeUseYourDataInfo),
      `How we use your data info text - ${howWeUseYourDataInfo} does not include ${expected_howWeUseYourDataInfo}`)
    ) {
      console.log(`How we use your data info text- is ${howWeUseYourDataInfo}`);
    }
  }

  checkHowWeUseYourDataLinkTextIsDisplayed() {
    let howWeUseYourDataInfoLink = browser
      .$(this.howWeWillUseYourDataLink())
      .getText();
    let expected_howWeUseYourDataInfoLink = "How we will use your data";

    if (
      (expect(howWeUseYourDataInfoLink).to.eql(
        expected_howWeUseYourDataInfoLink
      ),
      `How we use your data link text - ${howWeUseYourDataInfoLink} does not include ${expected_howWeUseYourDataInfoLink}`)
    ) {
      console.log(
        `How we use your data link text- is ${howWeUseYourDataInfoLink}`
      );
    }
  }

  checkHowWeUseYourDataLinkIsDisplayed() {
    assert(browser.$(this.howWeWillUseYourDataLink()).isExisting());
    console.log("The How we use your data link text is displayed");
  }

  checkHowWeUseYourDataMainPageTitleIsDisplayed() {
    let howWeUseYourDataMainTitle = browser
      .$(this.howWeUseYourDataMainPageTitle())
      .getText();
    let expected_howWeUseYourDataMainTitle =
      "Your data and future communications";

    if (
      (expect(howWeUseYourDataMainTitle).to.eql(
        expected_howWeUseYourDataMainTitle
      ),
      `How we use your data title - ${howWeUseYourDataMainTitle} does not include ${expected_howWeUseYourDataMainTitle}`)
    ) {
      console.log(
        `How we use your data title- is ${howWeUseYourDataMainTitle}`
      );
    }
  }

  checkHowWeUseYourDataSubPageTitleIsDisplayed() {
    let howWeUseYourDataSubTitle = browser
      .$(this.howWeUseYourDataSubPageTitle())
      .getText();
    let expected_howWeUseYourDataSubTitle = "How we will communicate with you";

    if (
      (expect(howWeUseYourDataSubTitle).to.eql(
        expected_howWeUseYourDataSubTitle
      ),
      `How we use your data title - ${howWeUseYourDataSubTitle} does not include ${expected_howWeUseYourDataSubTitle}`)
    ) {
      console.log(`How we use your data title- is ${howWeUseYourDataSubTitle}`);
    }
  }

  checkCorrectHowWeUseYourDataPageContentIsDisplayed() {
    this.checkHowWeUseYourDataMainPageTitleIsDisplayed();
    this.checkHowWeUseYourDataPageTitleIsDisplayed();
    this.checkHowWeUseYourDataInfoTextIsDisplayed();
    this.checkHowWeUseYourDataLinkTextIsDisplayed();
    this.checkHowWeUseYourDataLinkIsDisplayed();
  }

  verifyCheckbox() {
    browser.$(this.checkbox()).waitForDisplayed({ timeout: timeOut });
    let isExisting = browser.$(this.checkbox()).isExisting();
    expect(isExisting).eql(true);
  }

  verifyCheckboxText(text) {
    let textForCheckbox = browser.$(this.checkboxText()).getText();
    expect(textForCheckbox).to.includes(text);
    console.log(textForCheckbox);
  }

  verifyAgreementText(agreementTextNumber) {
    try {
      if (agreementTextNumber === 1) {
        let agreementTextOne = browser.$(this.agreementTextOne()).getText();
        expect(agreementTextOne).to.eql(constants.Agreement_Text1);
      }
      if (agreementTextNumber === 2) {
        let agreementTextTwo = browser.$(this.agreementTextTwo()).getText();
        expect(agreementTextTwo).to.includes(constants.Agreement_Text2);
      }
      if (agreementTextNumber === 3) {
        let agreementTextThree = browser.$(this.agreementTextThree()).getText();
        expect(agreementTextThree).to.includes(constants.Agreement_Text3);
      }
    } catch (error) {
      console.log("agreement match not found !!", error);
    }
  }

  verifyBannerText() {
    let bannerAlertText = browser.$(this.bannerText()).getText();
    let isExisting = browser.$(this.bannerText()).isExisting();
    expect(bannerAlertText).to.includes(constants.BannerText);
    console.log(bannerAlertText);
    console.log(isExisting);
  }

  verifyLeaveApplicationBtn() {
    let button = browser.$(this.leaveApplicationBtn()).getText();
    expect(button).to.eql("Leave application");
    console.log(browser.$(this.leaveApplicationBtn()).isExisting());
  }

  selectCheckbox() {
    browser.$(this.checkbox()).click();
  }

  verifyCheckboxSelectedState() {
    let isExisting = browser.$(this.checkboxSelected()).isExisting();
    expect(isExisting).to.equal(true);
    console.log(isExisting);
  }

  verifyCheckboxUnSelectedState() {
    browser.$(this.checkbox()).click();
    let isExisting = browser.$(this.checkboxUnSelected()).isExisting();
    expect(isExisting).to.equal(true);
    console.log(isExisting);
  }

  verifyErrorMessage(errorMessage) {
    browser.$(this.errorMessage()).waitForDisplayed({ timeout:timeOut });
    let declarationErrorMsg = browser.$(this.errorMessage()).isExisting();
    expect(declarationErrorMsg).to.eql(true);
    let declarationErrorMsgText = browser.$(this.errorMessage()).getText();
    expect(declarationErrorMsgText).to.includes(errorMessage);
  }

  verifyGroupPrivacyLink(expected_title) {
    let actual_data = browser.$(this.sideDrawGroupPrivacyLink()).getText();
    expect(actual_data).to.equal(expected_title);
  }

  clickOnHowWeUseYourDataLink() {
    browser
      .$(this.howWeWillUseYourDataLink())
      .waitForDisplayed({ timeout: timeOut });
    browser.$(this.howWeWillUseYourDataLink()).click();
  }

  verifySideDrawCloseIconIsDisplayed() {
    expect(browser.$(this.sideDrawCloseIcon()).isExisting()).to.eql(true);
  }

  verifySideDrawCloseButtonIsDisplayed() {
    expect(browser.$(this.sideDrawCloseIcon()).isExisting()).to.eql(true);
  }

  clickOnGroupPrivacyLink() {
    browser.$(this.sideDrawGroupPrivacyLink()).click();
  }

  clickOnAccessibleCommunicationLink() {
    browser.$(this.accessibleButtonLink()).click();
  }

  clickOnAccessibleCommunicationButton(button) {
    if (button === "Large Print") {
      browser.$(this.accessibleLargePrintButton()).click();
    } else if (button === "Braille") {
      browser.$(this.accessibleBrailleButton()).click();
    } else if (button === "Audio") {
      browser.$(this.accessibleAudioButton()).click();
    } else {
      throw new Error(`The ${button} you have selected is not available`);
    }
  }

  clickOnAccessibleCommunicationCloseButton() {
    browser.$(this.accessibleCloseButton()).click();
  }

  clickOnAccessibleCommunicationConfirmButton() {
    browser.$(this.accessibleConfirmButton()).click();
  }

  verifyTheModalIsNotDisplayed() {
    expect(browser.$(this.accessibleTitle()).isExisting()).to.eql(false);
  }

  verifyPrivacyGroupUrl(url) {
    const handle = browser.getWindowHandle();
    const handles = browser.getWindowHandles();
    if (handles[1] != handle) {
      browser.switchToWindow(handles[1]);
      browser.waitUntil(() => browser.getUrl().includes(url), {
        timeout: timeOut,
        timeoutMsg: `The expected URL did not include the following endpoint ${url}`,
      });
      expect(browser.getUrl()).contains(url);
    }
  }

  checkAccessibleCommunicationContent(content) {
    let actual_data;
    switch (content) {
      case "Accessible Communication?":
        actual_data = browser.$(this.accessibleTitle()).getText();
        expect(side_drawer.accessible_title).eql(actual_data);
        console.log(`The communication title displayed is ${actual_data}`);
        break;
      case "Communication content?":
        actual_data = browser.$(this.accessibleContent()).getText();
        expect(side_drawer.accessible_content).eql(actual_data);
        console.log(`The communication content displayed is: ${actual_data}`);
        break;
      case "Thanks, we have updated your preference.":
        actual_data = browser.$(this.accessibleContentOne()).getText();
        expect(side_drawer.accessible_content_one).eql(actual_data);
        console.log(`The communication content displayed is: ${actual_data}`);
        break;
      case "None radio button":
        expect(browser.$(this.accessibleNoneButton()).isExisting()).to.eql(
          true
        );
        break;
      case "Large Print radio button":
        expect(
          browser.$(this.accessibleLargePrintButton()).isExisting()
        ).to.eql(true);
        break;
      case "Braille radio button":
        expect(browser.$(this.accessibleBrailleButton()).isExisting()).to.eql(
          true
        );
        break;
      case "Audio radio button":
        expect(browser.$(this.accessibleAudioButton()).isExisting()).to.eql(
          true
        );
        break;
      case "Confirm button":
        expect(browser.$(this.accessibleConfirmButton()).isExisting()).to.eql(
          true
        );
        break;
      case "Close button":
        expect(browser.$(this.accessibleCloseButton()).isExisting()).to.eql(
          true
        );
        break;
      case "X icon":
        expect(browser.$(this.accessibleXIcon()).isExisting()).to.eql(true);
        break;
    }
  }

  checkSideDrawContent(content) {
    let actual_data;
    switch (content) {
      case "title":
        actual_data = browser.$(this.sideDrawTitle()).getText();
        expect(side_drawer.side_draw_title).eql(actual_data);
        break;
      case "content_one":
        actual_data = browser.$(this.sideDrawContentOne()).getText();
        expect(side_drawer.content_one).eql(actual_data);
        break;
      case "content_two":
        actual_data = browser.$(this.sideDrawContentTwo()).getText();
        expect(side_drawer.content_two).includes(
          actual_data.replace(/(\r\n|\n|\r)/gm, "").trimEnd()
        );
        break;
      case "content_three":
        actual_data = browser.$(this.sideDrawContentThree()).getText();
        expect(side_drawer.content_three).eql(actual_data);
        break;
      case "content_four":
        actual_data = browser.$(this.sideDrawContentFour()).getText();
        expect(side_drawer.content_four).eql(actual_data);
        break;
      default:
        console.log("The content that your comparing against does not exist");
        break;
    }
  }
}
export default new howWeWillUseYourDataPage();
