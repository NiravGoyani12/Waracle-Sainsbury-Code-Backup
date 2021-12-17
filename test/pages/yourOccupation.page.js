import { assert, expect } from "chai";
import verifyLeaveApplicationButtonText from "../../support/common_assertions/verifyLeaveApplicationButton";
import clickContinueApplicationButton from "../../support/common_actions/clickContinueApplication";
import verifyContinueApplicationButtonText from "../../support/common_assertions/verifyContinueButton";
import employmentStatusData from "../../data/employment_status_constants";
import occupationData from "../../data/occupation_constants";
import yourFinancials from "./yourFinancials.page";
import progressBarData from "../../data/progressBar_constant";
import my_occupation_constants from "../../data/my_occupation_colour_constants";
const timeOut = 6000;
class YourOccupationPage {
  /**
   * Define page elements
   */

  yourOccupationTitle() {
    return "//*[text()='Your occupation']";
  }

  employmentStatusTitle() {
    return "//*[text()='Employment status']";
  }

  employmentStatusFieldButton() {
    return "select#employmentStatusCode";
  }

  employmentStatusList() {
    return "//*[@id='employmentStatusCode']/option";
  }

  employmentStatus() {
    return "select#employmentStatusCode";
  }

  employmentStatusError() {
    return "//span[contains(text(),'Please select your employment status.')]";
  }
  occupationTitle() {
    return "//*[text()='Occupation']";
  }

  occupationFieldButton() {
    return "[data-testid='select-occupation']";
  }

  occupationList() {
    return "//*[@id='occupationCode']/option";
  }
  occupation() {
    return "//*[@id='occupationCode']";
  }

  occupationStatusError() {
    return "//*[text()='Please select your occupation.']";
  }
  employerNameTitle() {
    return "//*[@id='input-employerName-label']";
  }

  employerStatusError() {
    return "//*[text()='Please enter your employer’s name.']";
  }

  employerNameStatusError() {
    return "//*[@id='employerName-error-message']";
  }

  employerNameInputField() {
    return "input#employerName";
  }

  progressBarNumOccupationScreen() {
    return "[data-test='component-progress-tracker-step-1'] div";
  }

  progressBarTextOccupationScreen() {
    return "[data-test='component-progress-tracker-step-1'] span";
  }

  /**
   * Define page functions
   */

  goToYourOccupationPage() {
    return browser.url("/your-occupation");
  }

  checkYourOccupationTitleText() {
    browser
      .$(this.yourOccupationTitle())
      .waitForDisplayed({ timeout: timeOut });
    let yourOccupationTitleText = browser
      .$(this.yourOccupationTitle())
      .getText();
    let expected_yourOccupationTitleText = "Your occupation";
    assert(
      yourOccupationTitleText.includes(expected_yourOccupationTitleText),
      `Your occupation page title - ${yourOccupationTitleText} does not include ${expected_yourOccupationTitleText}`
    );
  }

  checkEmploymentStatusTitleText() {
    let employmentStatusTitleText = browser
      .$(this.employmentStatusTitle())
      .getText();
    let expected_employmentStatusTitleText = "Employment status";
    assert(
      employmentStatusTitleText.includes(expected_employmentStatusTitleText),
      `Your employment status title - ${employmentStatusTitleText} does not include ${expected_employmentStatusTitleText}`
    );
  }

  checkOccupationTitleText() {
    let occupationTitleText = browser.$(this.occupationTitle()).getText();
    let expected_occupationTitleTextTitleText = "Occupation";
    if (
      (assert(
        occupationTitleText.includes(expected_occupationTitleTextTitleText)
      ),
      `Your occupation title - ${occupationTitleText} does not include ${expected_occupationTitleTextTitleText}`)
    ) {
      console.log(
        `The occupation page title is displayed as ${occupationTitleText}`
      );
    }
  }

  checkEmployerNameTitleText() {
    let employerNameTitleText = this.employerNameTitle.getText();
    let expected_employerNameTitleText = "Employer name";
    if (
      (assert(employerNameTitleText.includes(expected_employerNameTitleText)),
      `Your Employer name title - ${employerNameTitleText} does not include ${expected_employerNameTitleText}`)
    ) {
      console.log(
        `The occupation page employer name title is displayed as ${employerNameTitleText}`
      );
    }
  }

  checkEmployerInputFieldIsNotDisplayed() {
    let employerNameInputFieldBox = browser.$(this.employerNameInputField());
    if (
      (assert(!employerNameInputFieldBox.isDisplayed()),
      "Employer name field is not displayed on the your occupation page")
    ) {
      console.log("The employer name input field is not displayed");
    }
  }

  checkEmploymentListDisplaysExpectedList() {
    for (let i = 0; i < employmentStatusData.employment_status.length; i++) {
      let data = employmentStatusData.employment_status[i];
      let expectedEmploymentStatus = browser
        .$$(this.employmentStatusList())
        [i].getText();
      if (expect(data).equal(expectedEmploymentStatus)) {
        console.log(
          `The employment status ${data} matches the applications employment status ${expectedEmploymentStatus}`
        );
      }
    }
  }

  checkOccupationListDisplaysExpectedList() {
    for (let i = 0; i < occupationData.occupation.length; i++) {
      let data = occupationData.occupation[i];
      let expectedOccupationData = browser
        .$$(this.occupationList())
        [i].getText();
      if (expect(data).equal(expectedOccupationData)) {
        console.log(
          `The occupation data ${data} matches the application occupation data ${expectedOccupationData}`
        );
      }
    }
  }
  verifyOccupationPageUrl() {
    expect(browser.getUrl()).contains("/your-occupation");
  }

  clickEmploymentList() {
    browser.$(this.employmentStatusFieldButton()).click();
  }

  clickOccupationList() {
    browser.$(this.occupationFieldButton()).click();
  }

  selectEmploymentStatus(employment_status) {
    browser.$(this.employmentStatus()).selectByVisibleText(employment_status);
  }

  selectOccupation(occupation) {
    browser.$(this.occupation()).selectByVisibleText(occupation);
  }

  enterEmployerName(employer) {
    browser.$(this.employerNameInputField()).setValue(employer);
  }

  clearEmployerName() {
    browser.$(this.employerNameInputField()).clearValue();
  }

  populateAllMandatoryOccupationFields(employment_status, occupation) {
    this.selectEmploymentStatus(employment_status);
    this.selectOccupation(occupation);
  }

  checkEmployerFieldIsGreyedOut() {
    let greyed_out_employer = browser
      .$(this.employerNameInputField())
      .isClickable();
    expect(greyed_out_employer).equal(false);
    let actualEmployerNameFieldColor = browser
      .$(this.occupation())
      .getCSSProperty("color")["value"];
    console.log(actualEmployerNameFieldColor);
    if (actualEmployerNameFieldColor === my_occupation_constants.Grey) {
      expect(actualEmployerNameFieldColor).eql(my_occupation_constants.Grey);
    } else if (
      actualEmployerNameFieldColor === my_occupation_constants.Chrome_grey
    ) {
      expect(actualEmployerNameFieldColor).eql(
        my_occupation_constants.Chrome_grey
      );
    } else {
      throw new Error("Check the constant values in the data folder");
    }
  }

  checkOccupationFieldIsGreyedOut() {
    let greyed_out_occupation = browser.$(this.occupation()).isClickable();
    console.log(greyed_out_occupation);
    expect(greyed_out_occupation).equal(false);
    let actualOccupationFieldColor = browser
      .$(this.occupation())
      .getCSSProperty("color")["value"];
    console.log(actualOccupationFieldColor);
    if (actualOccupationFieldColor === my_occupation_constants.Grey) {
      expect(actualOccupationFieldColor).eql(my_occupation_constants.Grey);
    } else if (
      actualOccupationFieldColor === my_occupation_constants.Chrome_grey
    ) {
      expect(actualOccupationFieldColor).eql(
        my_occupation_constants.Chrome_grey
      );
    } else {
      throw new Error("Check the constant values in the data folder");
    }
  }
  checkOccupationFieldIsNotSelectable() {
    let not_selectable_occupation = !browser.$(this.occupation()).isClickable;
    expect(not_selectable_occupation).equal(false);
  }

  checkEmployerFieldIsNotClickable() {
    let expected_disabled = true;
    let not_clickable_employer = !browser
      .$(this.employerNameInputField())
      .isClickable();
    expect(not_clickable_employer).equal(expected_disabled);
  }

  checkEmploymentStatusErrorDisplays(message) {
    var expectedErrorMessage = message;
    if (message.includes("employment")) {
      let actualEmploymentStatusErrorMessage = browser
        .$(this.employmentStatusError())
        .getText();
      expect(actualEmploymentStatusErrorMessage).equal(expected_error_message);
    } else if (message.includes("occupation")) {
      let actualOccupationStatusErrorMessage = browser
        .$(this.occupationStatusError())
        .getText();
      expect(actualOccupationStatusErrorMessage).equal(expectedErrorMessage);
    } else if (
      !message.includes("Please tell us") &&
      message.includes("employer")
    ) {
      let actualEmployerStatusErrorMessage = browser
        .$(this.employerStatusError())
        .getText();
      expect(actualEmployerStatusErrorMessage).equal(expectedErrorMessage);
    } else if (message.includes("Please tell us")) {
      let actualEmployerStatusErrorMessage = browser
        .$(this.employerNameStatusError())
        .getText();
      expect(actualEmployerStatusErrorMessage).equal(expectedErrorMessage);
    } else {
      throw new Error(
        "The expected error message for the this page does not exist"
      );
    }
  }

  continueToFinanceDetailsScreenAndVerifyPageTitle() {
    clickContinueApplicationButton();
    yourFinancials.checkYourFinancialsTitle();
  }

  checkEmployerAndOccupationFieldsCannotBePopulated() {
    this.checkOccupationFieldIsNotSelectable();
    this.checkEmployerFieldIsNotClickable();
  }

  checkOccupationFieldsCannotBePopulated() {
    this.checkOccupationFieldIsNotSelectable();
  }

  checkEmployerAndOccupationFieldsAreGreyedOut() {
    //this.checkEmployerFieldIsGreyedOut();
    this.checkOccupationFieldIsGreyedOut();
  }

  checkOccupationFieldsAreGreyedOut() {
    this.checkOccupationFieldIsGreyedOut();
  }

  checkCorrectYourOccupationPageContentIsDisplayed() {
    this.checkYourOccupationTitleText();
    this.checkEmploymentStatusTitleText();
    this.checkOccupationTitleText();
    this.checkEmployerInputFieldIsNotDisplayed();
    verifyLeaveApplicationButtonText();
    verifyContinueApplicationButtonText();
  }

  verifyProgressBarNumberIsHighlightedOccupationScreen(expBarStatusNumber) {
    let actualProgressBarNumberColor = browser
      .$(this.progressBarNumOccupationScreen())
      .getCSSProperty("background")["value"];
    let expProgressBarNumberBackgroundColour =
      progressBarData.progressBarData[0];
    expect(actualProgressBarNumberColor).to.includes(
      expProgressBarNumberBackgroundColour
    );

    let actualProgressBarNum = browser
      .$(this.progressBarNumOccupationScreen())
      .getText();
    expect(actualProgressBarNum).to.eql(expBarStatusNumber);
  }

  verifyProgressBarTextIsHighlightedOccupationScreen(expBarStatusText) {
    let actualProgressBarTextColor = browser
      .$(this.progressBarTextOccupationScreen())
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
      .$(this.progressBarTextOccupationScreen())
      .getText();
    expect(actualProgressBarText).to.eql(expBarStatusText);
  }

  verifyOccupationPageUrl() {
    expect(browser.getUrl()).contains("/your-occupation");
  }
}

export default new YourOccupationPage();
