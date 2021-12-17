import { assert } from "chai";
import clearInputField from "../../support/common_actions/clearInputFields";
import continueApplicationButton from "../../support/common_elements/continueApplicationButton";
import aboutYouAndWhereYouLive from "./aboutYouAndWhereYouLive.page";
import yourOccupationPage from "../pages/yourOccupation.page";
import yourFinancials from "./yourFinancials.page";
import progressBarData from "../../data/progressBar_constant";
import my_application_data from "../../data/my_application_screen_constants";
import verifyLeaveApplicationButtonText from "../../support/common_assertions/verifyLeaveApplicationButton";
import verifyContinueApplicationButtonText from "../../support/common_assertions/verifyContinueButton";
const timeOut = 40000;

const expect = require("chai").expect;

class CheckMyApplicationPage {
  /**
   * Define page elements
   */

  editButtonOnFinanceDetailSection() {
    return 'button[data-testid="edit-link-your-financial-details"]';
  }

  customerFullNameOnMyApp() {
    return "span[data-testid='name-summary-title']";
  }

  bankAccountDetailsOnFinanceSection() {
    return "form .disclaimer";
  }

  contentOneFinanceDetailSection() {
    return 'form p[data-testid="disclaimer-initial-paragraph"]';
  }

  contentTwoFinanceDetailSectionSpanOne() {
    return "form section.direct-debit-paragraph span:nth-child(1)";
  }

  contentTwoFinanceDetailSectionSpanTwo() {
    return "form section.direct-debit-paragraph span:nth-child(2)";
  }

  contentTwoFinanceDetailSectionSpanThree() {
    return "form section.direct-debit-paragraph span:nth-child(3)";
  }

  contentTwoFinanceDetailSection() {
    return "form section.direct-debit-paragraph span";
  }

  tickPointOneFinanceDetailSection() {
    return '[data-testid="disclaimer-item1"]';
  }
  tickPointTwoFinanceDetailSection() {
    return '[data-testid="disclaimer-item2"]';
  }

  tickPointThreeFinanceDetailSection() {
    return '[data-testid="disclaimer-item3"]';
  }

  bankAccountDirectDebitLink() {
    return "button#direct-debit-side-drawer-link";
  }

  directDebitSideDrawerComponent() {
    return 'form section.direct-debit-paragraph [data-testid="side-drawer-component"]';
  }

  directDebitSideDrawerHeadingOne() {
    return "h4#component-drawer-drawer-title";
  }

  directDebitSideDrawerBulletOne() {
    return 'section span p[data-testid="bullet-1"]';
  }

  directDebitSideDrawerBulletTwo() {
    return 'section span p[data-testid="bullet-2"]';
  }

  directDebitSideDrawerBulletThree() {
    return 'section span p[data-testid="bullet-3"]';
  }

  directDebitSideDrawerSubBullet() {
    return 'section span p[data-testid="sub-bullet-1"]';
  }

  directDebitSideDrawerBulletFour() {
    return 'section span p[data-testid="bullet-4"]';
  }

  directDebitSideDrawerCloseIcon() {
    return 'span [data-test="component-drawer-button-close"]';
  }

  directDebitSideDrawerCloseCTA() {
    return 'footer [data-test="component-button"]';
  }

  financeSectionDirectDebitSideDrawerCloseIconFocusState() {
    return 'section.direct-debit-paragraph button[data-autofocus="true"][data-test="component-drawer-button-close"]';
  }

  directDebitSideDrawerCloseStateOnFinanceSection() {
    return 'form section.direct-debit-paragraph [data-focus-lock-disabled="disabled"]';
  }

  directDebitSideDrawerLinkOriginalStateOnFinanceSection() {
    return 'form section.direct-debit-paragraph [data-focus-lock-disabled="disabled"]';
  }

  aboutYouEditLink() {
    return "[data-testid='edit-link-your-details']";
  }

  occupationEditLink() {
    return "[data-testid='edit-link-your-occupation']";
  }

  yourFinancialsEditLink() {
    return "[data-testid='edit-link-your-financial-details']";
  }

  occupationField() {
    return "//*[@id='occupationCode']";
  }

  occupationFieldGreyOut() {
    return "[data-testid =your-occupation-1]";
  }

  employmentStatus() {
    return "//*[@id='employmentStatusCode']";
  }

  employmentStatusNonEditedText() {
    return "[data-testid =your-occupation-0]";
  }

  doneButton() {
    return "[data-testid =done]";
  }

  employmentStatusText() {
    return "//*[text() ='Your occupation']";
  }

  financialDetailTitleText() {
    return "[data-testid='edit-link-your-financial-details']";
  }

  employmentNameText() {
    return "[data-testid='your-occupation-2']";
  }

  employerNameInputField() {
    return "input#employerName";
  }

  employerValidationError() {
    return "span#employerName-error-message";
  }

  progressBarNumApplicationScreen() {
    return "[data-test='component-progress-tracker-step-2'] div";
  }

  progressBarTextApplicationScreen() {
    return "[data-test='component-progress-tracker-step-2'] span";
  }

  myApplicationPageTitle() {
    return "h1";
  }

  myApplicationPageDescription() {
    return "[data-test='component-heading-intro']";
  }

  aboutYouText() {
    return "//*[contains(text(),'About you')]";
  }

  emailText() {
    return "[data-testid='your-details-0']";
  }

  mobileText() {
    return "[data-testid='your-details-1']";
  }

  dobText() {
    return "[data-testid='your-details-2']";
  }

  nationalityText() {
    return "[data-testid='your-details-3']";
  }

  martialStatusText() {
    return "[data-testid='your-details-4']";
  }

  noOfDependentText() {
    return "[data-testid='your-details-5']";
  }

  residentialStatusText() {
    return "[data-testid='residential-status-0']";
  }

  employmentStatusText() {
    return "[data-testid='your-occupation-0']";
  }

  occupationText() {
    return "[data-testid='your-occupation-1']";
  }

  yourFinancialsText() {
    return "//h2[contains(text(),'Your financials')]";
  }

  monthlyMortgageRentText() {
    return "[data-testid='financial-details-0']";
  }

  yearlyIncomeText() {
    return "[data-testid='financial-details-1']";
  }

  bankAccountTitleText() {
    return "[data-testid='bank-account-title']";
  }

  accountNumberText() {
    return "[data-testid='bank-account-0']";
  }

  sortCodeText() {
    return "[data-testid='bank-account-1']";
  }

  accountOpenText() {
    return "[data-testid='account-opened-0']";
  }

  previousAddressTitleText() {
    return "[data-testid='previous-address-title']";
  }

  previousAddressText() {
    return "[data-testid='previous-address-0']";
  }

  timeAtPreviousAddressText() {
    return "[data-testid='previous-address-1']";
  }

  doneButtonError() {
    return "//*[contains(text(),'Please confirm by clicking “Done”')]";
  }

  previousAddressField() {
    return "//*[@id='previousAddress.address.houseName']";
  }

  /**
   * Define page functions
   */

  verifyCheckMyApplicationPageUrl() {
    let expected_url = "/review-application";
    browser.waitUntil(() => browser.getUrl().includes(expected_url), {
      timeout: timeOut,
      timeoutMsg: `The expected URL did not include the following endpoint ${expected_url}`,
    });
    assert(
      browser.getUrl().includes(expected_url),
      `The expected URL endpoint name ${expected_url} is not included`
    );
    console.log(`The expected endpoint is ${expected_url}`);
  }

  verifyBankAccountDetailsOnFinanceSection() {
    let accountDetails = browser
      .$(this.bankAccountDetailsOnFinanceSection())
      .isExisting();
    browser
      .$(continueApplicationButton.continueApplicationButton())
      .scrollIntoView();
    browser
      .$(this.bankAccountDetailsOnFinanceSection())
      .waitForDisplayed({ timeout: timeOut });
    expect(accountDetails).to.eql(true);
    console.log(accountDetails);
  }

  verifyFinancialDetailsSectionTickPointOne(tickPointOne) {
    let bankAccountTickPointOne = browser
      .$(this.tickPointOneFinanceDetailSection())
      .isExisting();
    console.log(bankAccountTickPointOne);
    let bankAccountTickPointOneText = browser
      .$(this.tickPointOneFinanceDetailSection())
      .getText();
    console.log(bankAccountTickPointOneText);
    expect(bankAccountTickPointOneText).to.eql(tickPointOne);
  }

  verifyFinancialDetailsSectionTickPointTwo(tickPointTwo) {
    let bankAccountTickPointTwo = browser
      .$(this.tickPointTwoFinanceDetailSection())
      .isExisting();
    console.log(bankAccountTickPointTwo);
    let bankAccountTickPointTwoText = browser
      .$(this.tickPointTwoFinanceDetailSection())
      .getText();
    console.log(bankAccountTickPointTwoText);
    expect(bankAccountTickPointTwoText).to.eql(tickPointTwo);
  }

  verifyFinancialDetailsSectionTickPointThree(tickPointThree) {
    let bankAccountTickPointThree = browser
      .$(this.tickPointThreeFinanceDetailSection())
      .isExisting();
    console.log(bankAccountTickPointThree);
    let bankAccountTickPointThreeText = browser
      .$(this.tickPointThreeFinanceDetailSection())
      .getText();
    console.log(bankAccountTickPointThreeText);
    expect(bankAccountTickPointThreeText).to.eql(tickPointThree);
  }

  verifyFinancialDetailsSectionContentOne(contentOne) {
    let bankAccountContentOne = browser
      .$(this.contentOneFinanceDetailSection())
      .isExisting();
    console.log(bankAccountContentOne);
    let bankAccountContentOneText = browser
      .$(this.contentOneFinanceDetailSection())
      .getText();
    console.log(bankAccountContentOneText);
    expect(bankAccountContentOneText).to.eql(contentOne);
  }

  verifyFinancialDetailsSectionContentTwo(contentTwo) {
    let bankAccountContentTwoSpanOne = browser
      .$(this.contentTwoFinanceDetailSectionSpanOne())
      .isExisting();
    console.log(bankAccountContentTwoSpanOne);
    let bankAccountContentTwoSpanOneText = browser
      .$(this.contentTwoFinanceDetailSectionSpanOne())
      .getText();
    console.log(bankAccountContentTwoSpanOneText);
    expect(contentTwo).to.includes(bankAccountContentTwoSpanOneText);

    let bankAccountContentTwoSpanTwo = browser
      .$(this.contentTwoFinanceDetailSectionSpanTwo())
      .isExisting();
    console.log(bankAccountContentTwoSpanTwo);
    let bankAccountContentTwoSpanTwoText = browser
      .$(this.contentTwoFinanceDetailSectionSpanTwo())
      .getText();
    console.log(bankAccountContentTwoSpanTwoText);
    expect(contentTwo).to.includes(bankAccountContentTwoSpanTwoText);

    let bankAccountContentTwoSpanThree = browser
      .$(this.contentTwoFinanceDetailSectionSpanThree())
      .isExisting();
    console.log(bankAccountContentTwoSpanThree);
    let bankAccountContentTwoSpanThreeText = browser
      .$(this.contentTwoFinanceDetailSectionSpanThree())
      .getText();
    console.log(bankAccountContentTwoSpanThreeText);
    expect(contentTwo).to.includes(bankAccountContentTwoSpanThreeText);
  }

  clickOnDirectDebitGuaranteeLink() {
    browser.$(this.bankAccountDirectDebitLink()).click();
  }

  verifyYourFinancialsSectionDirectDebitLinkDisplay() {
    let directDebitLink = browser
      .$(this.bankAccountDirectDebitLink())
      .isExisting();
    console.log(directDebitLink);
  }

  verifyYourFinancialsSectionSideDrawerDisplay() {
    let directDebitSideDrawer = browser
      .$(this.directDebitSideDrawerComponent())
      .isExisting();
    console.log(directDebitSideDrawer);
  }

  verifyFinancialDetailsSideDrawerHeadingOne(headingOne) {
    let financeSectionSideDrawerHeadingOne = browser
      .$(this.directDebitSideDrawerHeadingOne())
      .isExisting();
    console.log(financeSectionSideDrawerHeadingOne);
    let financeSectionSideDrawerHeadingOneText = browser
      .$(this.directDebitSideDrawerHeadingOne())
      .getText();
    console.log(financeSectionSideDrawerHeadingOneText);
    expect(financeSectionSideDrawerHeadingOneText).to.eql(headingOne);
  }

  verifyFinancialDetailsSideDrawerBulletOne(bulletOne) {
    let financeSectionSideDrawerBulletOne = browser
      .$(this.directDebitSideDrawerBulletOne())
      .isExisting();
    console.log(financeSectionSideDrawerBulletOne);
    let financeSectionSideDrawerBulletOneText = browser
      .$(this.directDebitSideDrawerBulletOne())
      .getText();
    console.log(financeSectionSideDrawerBulletOneText);
    expect(financeSectionSideDrawerBulletOneText).to.eql(bulletOne);
  }

  verifyFinancialDetailsSideDrawerBulletTwo(bulletTwo) {
    let financeSectionSideDrawerBulletTwo = browser
      .$(this.directDebitSideDrawerBulletTwo())
      .isExisting();
    console.log(financeSectionSideDrawerBulletTwo);
    let financeSectionSideDrawerBulletTwoText = browser
      .$(this.directDebitSideDrawerBulletTwo())
      .getText();
    expect(financeSectionSideDrawerBulletTwoText).to.eql(bulletTwo);
  }

  verifyFinancialDetailsSideDrawerBulletThree(bulletThree) {
    let financeSectionSideDrawerBulletThree = browser
      .$(this.directDebitSideDrawerBulletThree())
      .isExisting();
    console.log(financeSectionSideDrawerBulletThree);
    let financeSectionSideDrawerBulletThreeText = browser
      .$(this.directDebitSideDrawerBulletThree())
      .getText();
    expect(financeSectionSideDrawerBulletThreeText).to.eql(bulletThree);
  }

  verifyFinancialDetailsSideDrawerSubBullet(subBullet) {
    let financeSectionSideDrawerSubBullet = browser
      .$(this.directDebitSideDrawerSubBullet())
      .isExisting();
    console.log(financeSectionSideDrawerSubBullet);
    let financeSectionSideDrawerSubBulletText = browser
      .$(this.directDebitSideDrawerSubBullet())
      .getText();
    expect(financeSectionSideDrawerSubBulletText).to.includes(subBullet);
  }

  verifyFinancialDetailsSideDrawerBulletFour(bulletFour) {
    let financeSectionSideDrawerBulletFour = browser
      .$(this.directDebitSideDrawerBulletFour())
      .isExisting();
    console.log(financeSectionSideDrawerBulletFour);
    let financeSectionSideDrawerBulletFourText = browser
      .$(this.directDebitSideDrawerBulletFour())
      .getText();
    expect(financeSectionSideDrawerBulletFourText).to.eql(bulletFour);
  }

  verifyFinancialDetailsSideDrawerCloseIcon() {
    let financeSectionSideDrawerCloseIcon = browser
      .$(this.directDebitSideDrawerCloseIcon())
      .isExisting();
    console.log(financeSectionSideDrawerCloseIcon);
  }

  verifyFinancialDetailsSideDrawerCloseCTA() {
    let financeSectionSideDrawerCloseCTA = browser
      .$(this.directDebitSideDrawerCloseCTA())
      .isExisting();
    console.log(financeSectionSideDrawerCloseCTA);
  }

  verifyDirectDebitSideDrawerCloseIconStateOnFinanceSection() {
    let financeSectionSideDrawerCloseIconState = browser
      .$(this.financeSectionDirectDebitSideDrawerCloseIconFocusState())
      .isExisting();
    expect(financeSectionSideDrawerCloseIconState).to.eql(true);
  }

  clickOnDirectDebitSideDrawerCloseCTAOnFinanceSection() {
    browser.$(this.directDebitSideDrawerCloseCTA()).click();
  }

  verifyDirectDebitSideDrawerComponentCloseStateOnFinanceSection() {
    let sideDrawerClosedState = browser
      .$(this.directDebitSideDrawerCloseStateOnFinanceSection())
      .isExisting();
    console.log(sideDrawerClosedState);
  }

  verifyDirectDebitSideDrawerLinkOriginalStateOnFinanceSection() {
    let directDebitSideDrawLinkFocusState = browser
      .$(this.directDebitSideDrawerLinkOriginalStateOnFinanceSection())
      .isExisting();
    console.log(directDebitSideDrawLinkFocusState);
  }

  checkEmploymentStatusErrorDisplays(message) {
    var expected_error_message = message;
    if (message.includes("Please enter your employer’s name.")) {
      let actual_employment_status_error_message = browser
        .$(this.employerValidationError())
        .getText();
      br;
      expect(actual_employment_status_error_message).equal(
        expected_error_message
      );
    }
  }

  clickOnAboutYouEditLink() {
    browser.$(this.aboutYouEditLink()).click();
  }

  clickOnOccupationEditLink() {
    browser.$(this.occupationEditLink()).scrollIntoView();
    browser.$(this.occupationEditLink()).click();
  }

  clickOnYourFinancialsEditLink() {
    browser.$(this.yourFinancialsEditLink()).click();
  }

  clickOnOccupationFieldButton() {
    browser.$(this.occupationFieldButton()).click();
  }

  selectOccupation(occupation) {
    browser.$(this.occupationField()).scrollIntoView();
    browser.$(this.occupationField()).selectByVisibleText(occupation);
  }

  selectEmploymentStatus(employment_status) {
    browser.$(this.employmentStatus()).waitForExist({ timeout: timeOut });
    browser.$(this.employmentStatus()).scrollIntoView();
    browser.$(this.employmentStatus()).selectByVisibleText(employment_status);
  }

  checkEmploymentStatus(expected_employment_status) {
    let actual_employment_status = browser
      .$(this.employmentStatusNonEditedText())
      .getText();
    expect(actual_employment_status).includes(expected_employment_status);
  }

  enterEmployerName(employer) {
    browser.$(this.employerNameInputField()).waitForExist({ timeout: timeOut });
    browser.$(this.employerNameInputField()).scrollIntoView();
    browser.$(this.employerNameInputField()).click();
    browser
      .$(this.employerNameInputField())
      .setValue(clearInputField(browser.$(this.employerNameInputField())));
    browser.$(this.employerNameInputField()).setValue(employer);
  }

  selectTimeAddressCurrentYearsMonths(years, months) {
    aboutYouAndWhereYouLive.enterTimeAtCurrentAddressYears(years);
    aboutYouAndWhereYouLive.enterTimeAtCurrentAddressMonths(months);
  }

  selectTimeAddressPreviousYearsMonths(years, months) {
    aboutYouAndWhereYouLive.enterTimeAtPreviousAddressYears(years);
    aboutYouAndWhereYouLive.enterTimeAtPreviousAddressMonths(months);
  }

  enterEmailAddress(email) {
    aboutYouAndWhereYouLive.enterEmailAddress(email);
  }

  enterMobileNumber(mobile) {
    aboutYouAndWhereYouLive.enterMobileNumber(mobile);
  }

  enterDateOfBirth(dd, mm, yyyy) {
    aboutYouAndWhereYouLive.enterDateOfBirth(dd, mm, yyyy);
  }

  clickOnDoneButton() {
    browser.$(this.doneButton()).waitForClickable();
    browser.$(this.doneButton()).scrollIntoView();
    browser.$(this.doneButton()).click();
    console.log("Clicking on done button");
  }

  verifyDoneButtonIsNotDisplayed() {
    expect(!browser.$(this.doneButton()).isExisting()).eql(true);
  }

  verifyDoneButtonIsDisplayed() {
    browser.$(this.doneButton()).scrollIntoView();
    expect(browser.$(this.doneButton()).isExisting()).eql(true);
  }

  verifyEditLinkIsDisplayed() {
    expect(browser.$(this.occupationEditLink()).isExisting()).eql(true);
  }

  verifyYourFinancialsEditLinkIsDisplayed() {
    expect(browser.$(this.yourFinancialsEditLink()).isExisting()).eql(true);
  }

  checkOccupationFieldIsGreyedOut() {
    expect(browser.$(this.occupationFieldGreyOut()).getText()).includes("");
  }

  checkEmployerFieldIsGreyedOut() {
    expect(browser.$(this.employmentNameText()).getText()).includes("");
  }

  checkEmployerErrorIsNotDisplayed() {
    expect(!browser.$(this.employerValidationError()).isDisplayed()).eql(true);
  }

  verifyEditLinkIsNotDisplayed(section) {
    switch (section) {
      case "About you":
        expect(!browser.$(this.aboutYouEditLink()).isExisting()).eql(true);
        break;
      case "Your occupation":
        expect(!browser.$(this.occupationEditLink()).isExisting()).eql(true);
        break;
      case "Your financials":
        expect(!browser.$(this.yourFinancialsEditLink()).isExisting()).eql(
          true
        );
        break;
      default:
        throw new IllegalStateException("Unexpected edit link: " + section);
    }
  }

  checkYourQuotePageIsLoaded() {
    let expected_url = "/your-quote";
    browser.waitUntil(() => browser.getUrl().includes(expected_url), {
      timeout: timeOut,
      timeoutMsg: `The expected URL did not include the following endpoint ${expected_url}`,
    });
    assert(
      browser.getUrl().includes(expected_url),
      `The expected URL endpoint name ${expected_url} is not included`
    );
    console.log(`The url is displaying the correct endpoint ${expected_url}`)
  }

  checkYourDetailsContentOnMyApplicationIsDisplayed() {
    aboutYouAndWhereYouLive.aboutYouText();
    aboutYouAndWhereYouLive.checkEmailAddressTitle();
    aboutYouAndWhereYouLive.checkEmailAddressInputFieldTitle();
    aboutYouAndWhereYouLive.checkMobilePhoneNumberTitle();
    aboutYouAndWhereYouLive.checkMobilePhoneNumberInputFieldTitle();
    aboutYouAndWhereYouLive.checkDateOfBirthTitle();
    aboutYouAndWhereYouLive.checkDateOfBirthDayFieldTitle();
    aboutYouAndWhereYouLive.checkDateOfBirthMonthFieldTitle();
    aboutYouAndWhereYouLive.checkDateOfBirthYearFieldTitle();
    aboutYouAndWhereYouLive.checkDateOfBirthDayInputTitle();
    aboutYouAndWhereYouLive.checkDateOfBirthMonthInputTitle();
    aboutYouAndWhereYouLive.checkDateOfBirthYearInputTitle();
    aboutYouAndWhereYouLive.checkNationalityTitle();
    aboutYouAndWhereYouLive.checkMaritalStatusTitleText();
    aboutYouAndWhereYouLive.checkNumberOfDependentsTitleText();
    aboutYouAndWhereYouLive.checkWhereYouLiveTitleText();
    aboutYouAndWhereYouLive.checkResidentialStatusTitleText();
    aboutYouAndWhereYouLive.checkTimeAtCurrentAddressTitleText();
    aboutYouAndWhereYouLive.checkTimeAtCurrentAddressYearTitleText();
    aboutYouAndWhereYouLive.checkTimeAtCurrentAddressMonthTitleText();
  }

  checkCustomerFullNameIsDisplayed(expected_full_name) {
    let customerName = browser.$(this.customerFullNameOnMyApp()).getText();
    assert(
      customerName.includes(expected_full_name),
      `Customer name ${customerName} does not include ${expected_full_name}`
    );
  }

  checkCorrectYourOccupationPageContentOnMyAppPageIsDisplayed() {
    yourOccupationPage.checkYourOccupationTitleText();
    yourOccupationPage.checkEmploymentStatusTitleText();
    yourOccupationPage.checkOccupationTitleText();
  }

  verifyEmployerInputFieldIsNotDisplayed() {
    yourOccupationPage.checkEmployerInputFieldIsNotDisplayed();
  }

  checkYourFinanceDetailsContentOnMyAppIsDisplayed() {
    yourFinancials.checkYourFinancialsTitle();
    yourFinancials.checkYourMonthlyMortgageRentTitle();
    yourFinancials.checkCurrencyLabel("Monthly mortgage / rent");
    yourFinancials.checkMonthlyMortgageRentInputFieldIsDisplayed();
    yourFinancials.checkYearlyIncomeBeforeTaxTitle();
    yourFinancials.checkYearlyIncomeBeforeTaxIsDisplayed();
    yourFinancials.checkCurrencyLabel("Yearly income before tax");
    yourFinancials.checkOtherHouseholdIncomeInputFieldIsNotDisplayed();
    yourFinancials.checkBankAccountDetailsTitle();
    yourFinancials.checkWhyDoYouNeedMyBankAccountNumberTitle();
    yourFinancials.checkSortCodeTitle();
    yourFinancials.checkSortCodeInputFieldsDisplayed();
    yourFinancials.checkBankAccountTitle();
    yourFinancials.checkBankAccountNumberInputFieldDisplayed();
    yourFinancials.checkWhenWasTheAccountOpenedTitle();
    yourFinancials.checkHintTextTitle();
    yourFinancials.checkWhenYourAccountOpenMonthText();
    yourFinancials.checkWhenYourAccountOpenYearText();
    yourFinancials.checkYearAndMonthInputFieldsDisplayed();
  }

  verifyProgressBarNumberIsHighlightedApplicationScreen(expBarStatusNumber) {
    let actualProgressBarNumberColor = browser
      .$(this.progressBarNumApplicationScreen())
      .getCSSProperty("background")["value"];
    let expProgressBarNumberBackgroundColour =
      progressBarData.progressBarData[0];
    expect(actualProgressBarNumberColor).to.includes(
      expProgressBarNumberBackgroundColour
    );

    let actualProgressBarNum = browser
      .$(this.progressBarNumApplicationScreen())
      .getText();
    expect(actualProgressBarNum).to.eql(expBarStatusNumber);
  }

  verifyProgressBarTextIsHighlightedApplicationScreen(expBarStatusText) {
    let actualProgressBarTextColor = browser
      .$(this.progressBarTextApplicationScreen())
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
      .$(this.progressBarTextApplicationScreen())
      .getText();
    expect(actualProgressBarText).to.eql(expBarStatusText);
  }

  checkPageTitleAndDescriptionIsDisplayed() {
    let expPageTitle = my_application_data.Application_page_title;
    let expPageDescription = my_application_data.Application_page_description;
    let actualPageTitle = browser.$(this.myApplicationPageTitle()).getText();
    let actualPageDescription = browser
      .$(this.myApplicationPageDescription())
      .getText();
    expect(actualPageTitle).to.eql(expPageTitle);
    expect(actualPageDescription).to.eql(expPageDescription);
  }

  verifyAboutYou() {
    let expAboutYouText = my_application_data.About_you;
    let expEmail = my_application_data.Email;
    let expMobile = my_application_data.Mobile_phone_number;
    let expDob = my_application_data.Date_of_birth;
    let expNationality = my_application_data.Nationality;
    let expMartialStatus = my_application_data.Marital_status;
    let expDependents = my_application_data.Number_of_dependant;
    expect(browser.$(this.aboutYouText()).getText()).to.eql(
      expAboutYouText
    );
    expect(browser.$(this.emailText()).getText()).to.eql(expEmail);
    expect(browser.$(this.mobileText()).getText()).to.eql(expMobile);
    expect(browser.$(this.dobText()).getText()).to.eql(expDob);
    expect(browser.$(this.nationalityText()).getText()).to.eql(expNationality);
    expect(browser.$(this.martialStatusText()).getText()).to.eql(
      expMartialStatus
    );
    expect(browser.$(this.noOfDependentText()).getText()).to.eql(expDependents);
  }

  verifyYourDetailsCustomerUpdates(email, mobile, dob) {
    expect(browser.$(this.emailText()).getText()).to.eql(email);
    expect(browser.$(this.mobileText()).getText()).to.eql(mobile);
    expect(browser.$(this.dobText()).getText()).to.eql(dob);
  }

  verifyWhereYouLive() {
    aboutYouAndWhereYouLive.checkWhereYouLiveTitleText();
    let expResidentialStatusText = my_application_data.Residential_status;
    expect(browser.$(this.residentialStatusText()).getText()).to.eql(
      expResidentialStatusText
    );
  }

  verifyOccupationDetails() {
    yourOccupationPage.checkYourOccupationTitleText();
    let expEmploymentStatusText = my_application_data.Employment_status;
    let expOccupationText = my_application_data.Occupation;
    expect(browser.$(this.employmentStatusText()).getText()).to.eql(
      expEmploymentStatusText
    );
    expect(browser.$(this.occupationText()).getText()).to.eql(
      expOccupationText
    );
  }

  verifyYourFinancials() {
    let expYourFinancialsText = my_application_data.Your_financials;
    expect(browser.$(this.yourFinancialsText()).getText()).to.eql(
      expYourFinancialsText
    );
    let expMonthlyMortgageRentText = my_application_data.Monthly_mortgage_rent;
    let expYearlyIncomeText = my_application_data.Yearly_income;
    let expBankAccountText = my_application_data.Bank_account;
    let expAccountNumberText = my_application_data.Account_number;
    let expSortCodeText = my_application_data.Sort_code;
    let expOpenedText = my_application_data.Opened;

    expect(browser.$(this.monthlyMortgageRentText()).getText()).to.eql(
      expMonthlyMortgageRentText
    );
    expect(browser.$(this.yearlyIncomeText()).getText()).to.eql(
      expYearlyIncomeText
    );
    expect(browser.$(this.bankAccountTitleText()).getText()).to.eql(
      expBankAccountText
    );
    expect(browser.$(this.accountNumberText()).getText()).to.eql(
      expAccountNumberText
    );
    expect(browser.$(this.sortCodeText()).getText()).to.eql(expSortCodeText);
    expect(browser.$(this.accountOpenText()).getText()).to.eql(expOpenedText);
  }

  verifyDoneErrorMessageIsDisplayed(error_message) {
    let actual_error_message = browser.$(this.doneButtonError()).getText();
    expect(browser.$(this.doneButtonError()).isExisting()).eql(true);
    expect(error_message).equal(actual_error_message);
  }
  checkContentOnMyApplicationWithCurrentAddressIsDisplayed() {
    this.verifyAboutYou();
    this.verifyWhereYouLive();
    this.verifyOccupationDetails();
    this.verifyYourFinancials();
    verifyLeaveApplicationButtonText();
    verifyContinueApplicationButtonText();
  }

  checkContentPreviousAddressIsDisplayed() {
    let expPreviousAddressTitle = my_application_data.Previous_address_title;
    let expPreviousAddressText = my_application_data.Previous_address;
    let expTimeAtPreviousAddressText =
      my_application_data.Time_at_previous_address;
    console.log(expPreviousAddressText);
    let actualPreviousAddressText = browser
      .$(this.previousAddressText())
      .getText()
      .split("\n            ")
      .join(" ");
    console.log(actualPreviousAddressText);
    expect(browser.$(this.previousAddressTitleText()).getText()).to.eql(
      expPreviousAddressTitle
    );
    expect(actualPreviousAddressText).to.includes(expPreviousAddressText);
    expect(browser.$(this.timeAtPreviousAddressText()).getText()).to.eql(
      expTimeAtPreviousAddressText
    );
  }

  checkContentPreviousAddressWithoutCountyIsDisplayed() {
    let expPreviousAddressTitle = my_application_data.Previous_address_title;
    let expPreviousAddressText =
      my_application_data.Previous_address_Without_County;
    let expTimeAtPreviousAddressText =
      my_application_data.Time_at_previous_address;
    console.log(expPreviousAddressText);
    let actualPreviousAddressText = browser
      .$(this.previousAddressText())
      .getText()
      .split("\n            ")
      .join(" ");
    console.log(actualPreviousAddressText);
    expect(browser.$(this.previousAddressTitleText()).getText()).to.eql(
      expPreviousAddressTitle
    );
    expect(actualPreviousAddressText).to.includes(expPreviousAddressText);
    expect(browser.$(this.timeAtPreviousAddressText()).getText()).to.eql(
      expTimeAtPreviousAddressText
    );
  }

  checkEditLinkIsDisplayed(section) {
    switch (section) {
      case "About you":
        expect(browser.$(this.aboutYouEditLink()).isExisting()).eql(true);
        break;
      case "Your occupation":
        browser.$(this.employmentStatusText()).scrollIntoView();
        expect(browser.$(this.occupationEditLink()).isExisting()).eql(true);
        break;
      case "Your financials":
        browser.waitUntil(
          () =>
            browser.$(this.yourFinancialsEditLink()).isExisting() === true,
          {
            timeout: timeOut,
          }
        );
        break;
      default:
        throw new IllegalStateException("Unexpected edit link: " + section);
    }
  }

  clearTheMonthField() {
    browser
      .$(yourFinancials.monthInputField())
      .setValue(
        clearInputField(browser.$(yourFinancials.monthInputField()))
      );
    console.log(`Cleared the Month Field`);
  }

  verifyYourFinancialsUpdatedCorrectly() {
    let expEditedMonthlyMortgageRentText =
      my_application_data.Edited_monthly_mortgage_rent;
    let expEditedYearlyIncomeText = my_application_data.Edited_yearly_income;
    let expEditedAccountNumberText = my_application_data.Edited_account_number;
    let expEditedSortCodeText = my_application_data.Edited_sort_code;
    let expEditedOpenedText = my_application_data.Edited_opened;

    expect(browser.$(this.monthlyMortgageRentText()).getText()).to.eql(
      expEditedMonthlyMortgageRentText
    );
    expect(browser.$(this.yearlyIncomeText()).getText()).to.eql(
      expEditedYearlyIncomeText
    );
    expect(browser.$(this.accountNumberText()).getText()).to.eql(
      expEditedAccountNumberText
    );
    expect(browser.$(this.sortCodeText()).getText()).to.eql(
      expEditedSortCodeText
    );
    expect(browser.$(this.accountOpenText()).getText()).to.eql(
      expEditedOpenedText
    );
  }

  editMonthlyMortgageRentField(monthly_mortgage_rent) {
    browser
      .$(yourFinancials.monthMortgageRentInputField())
      .setValue(
        clearInputField(
          browser.$(yourFinancials.monthMortgageRentInputField())
        )
      );
    browser
      .$(yourFinancials.monthMortgageRentInputField())
      .setValue(monthly_mortgage_rent);
    console.log(
      `Entering the mortgage rent amount of ${monthly_mortgage_rent}`
    );
  }

  editBankSortCodeField(bankSortCodeOne) {
    browser
      .$(yourFinancials.sortCodeFirstInput())
      .setValue(
        clearInputField(browser.$(yourFinancials.sortCodeFirstInput()))
      );
    browser
      .$(yourFinancials.sortCodeFirstInput())
      .setValue(bankSortCodeOne);
    console.log(`Entering the Bank Sort Code1 Value ${bankSortCodeOne}`);
  }

  verifyReviewApplicationPageUrl() {
    expect(browser.getUrl()).contains("/review-application");
  }

  verifyPreviousAddressFieldDisplayed() {
    expect(browser.$(this.previousAddressField()).isExisting()).eql(true);
  }

  verifyPreviousAddressDetailsReappear() {
    expect(browser.$(this.previousAddressField()).isExisting()).eql(true);
  }

  verifyPreviousAddressDetailsDisappear() {
    expect(!browser.$(this.previousAddressField()).isExisting()).eql(true);
  }
}
export default new CheckMyApplicationPage();
