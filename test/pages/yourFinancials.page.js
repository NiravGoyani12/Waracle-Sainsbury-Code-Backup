import { assert, expect } from "chai";
import verifyLeaveApplicationButtonText from "../../support/common_assertions/verifyLeaveApplicationButton";
import verifyContinueApplicationButtonText from "../../support/common_assertions/verifyContinueButton";
import clearInputField from "../../support/common_actions/clearInputFields";
import financial_details_constant from "../../data/financial_details_constant";
const timeOut = 20000;

class YourFinancialsPage {
  /**
   * Define page elements
   */

  goToFinancialsPage() {
    return browser.url("/your-financials");
  }

  financialsPageTitle() {
    return "//h1[contains(text(),'Your financials')]";
  }

  monthMortgageRentTitle() {
    return "#input-monthlyMortgageRent-label";
  }

  monthMortgageRentInputField() {
    return "input#monthlyMortgageRent";
  }

  monthMortgageRentCurrencyLabel() {
    return "[data-testid='monthly-mortgage-money-label']";
  }

  yearlyIncomeBeforeTaxTitle() {
    return "#input-preTaxIncome-label";
  }

  yearlyIncomeBeforeTaxInputField() {
    return "#preTaxIncome";
  }

  yearlyIncomeBeforeTaxCurrencyLabel() {
    return "[data-testid='pre-tax-income-money-label']";
  }

  otherHouseholdIncomeTitle() {
    return "label#input-otherIncome-label";
  }

  otherHouseholdIncomeInputField() {
    return "input#otherIncome";
  }

  otherHouseholdIncomeCurrencyLabel() {
    return "[data-testid='other-income-money-label']";
  }

  bankAccountDetailsTitle() {
    return "//h2[contains(text(),'Bank account details')]";
  }

  whyDoYouNeedMyBankAccountNumberTitle() {
    return "[data-testid='bank-details-side-drawer-link']";
  }

  sortCodeTitle() {
    return "[data-testid='sort-code-title']";
  }

  sortCodeFirstInput() {
    return "#sortCodeSection1";
  }

  sortCodeSecondInput() {
    return "#sortCodeSection2";
  }

  sortCodeThirdInput() {
    return "#sortCodeSection3";
  }

  bankAccountNumberTitle() {
    return "#input-bankAccountNumber-label";
  }

  bankAccountNumberInputField() {
    return "input#bankAccountNumber";
  }

  whenWasTheAccountOpenedTitle() {
    return "[data-testid='acct-open-title']";
  }

  hintTextTitle() {
    return "[data-testid='acct-open-subtitle']";
  }

  monthTitleLabel() {
    return "#input-monthOpened-label";
  }

  monthInputField() {
    return "#monthOpened";
  }

  yearTitleLabel() {
    return "#input-yearOpened-label";
  }

  yearInputField() {
    return "#yearOpened";
  }

  yearlyIncomeWarning() {
    return "//*[contains(text(),'Please ensure this value is correct.')]";
  }

  accountOpenWarning() {
    return "[data-testid='account-opened-errors']";
  }

  accountMortgageWarning() {
    return "span#monthlyMortgageRent-error-message";
  }

  yearlyIncomeLimitWarning() {
    return "span#preTaxIncome-error-message";
  }

  otherIncomeLimitWarning() {
    return "span#otherIncome-error-message";
  }

  bankAccountSideDrawerLink() {
    return 'button[data-testid="bank-details-side-drawer-link"]';
  }

  bankAccountSideDrawerComponent() {
    return 'form [data-testid="side-drawer-component"]';
  }

  bankAccountSideDrawerOpenState() {
    return 'form [data-focus-lock-disabled="false"]';
  }

  bankAccountSideDrawerCloseState() {
    return 'form [data-focus-lock-disabled="disabled"]';
  }

  bankAccountSideDrawerTitle() {
    return "#component-drawer-drawer-title strong";
  }

  bankAccountSideDrawerText() {
    return 'form [data-testid="side-drawer-component"] p';
  }

  bankAccountSideDrawerCloseIcon() {
    return 'button[data-test="component-drawer-button-close"]';
  }

  bankAccountSideDrawerCloseBtn() {
    return 'footer button[data-testid="close"]';
  }

  bankAccountSideDrawerCloseIconFocusState() {
    return 'button[data-autofocus="true"][data-test="component-drawer-button-close"]';
  }

  bankAccountSideDrawerLinkState() {
    return 'form [data-focus-lock-disabled="disabled"]';
  }

  bankAccountDetailSection() {
    return "form .disclaimer";
  }

  directDebitLink() {
    return "#direct-debit-side-drawer-link";
  }

  bankAccountContent1() {
    return "[data-testid='disclaimer-initial-paragraph']";
  }

  tickPointOneText() {
    return '[data-testid="disclaimer-item1"]';
  }

  tickPointTwoText() {
    return '[data-testid="disclaimer-item2"]';
  }

  tickPointThreeText() {
    return '[data-testid="disclaimer-item3"]';
  }

  bankAccountContentTwo() {
    return 'form section[data-testid="link-container"] span';
  }

  contentTwoBankAccountSpanOne() {
    return "form section.direct-debit-paragraph span:nth-child(1)";
  }

  contentTwoBankAccountSpanTwo() {
    return "form section.direct-debit-paragraph span:nth-child(2)";
  }

  contentTwoBankAccountSpanThree() {
    return "form section.direct-debit-paragraph span:nth-child(3)";
  }

  directDebitSideDrawerComponent() {
    return 'form [data-testid="side-drawer-component"]';
  }

  directDebitLink() {
    return 'form [data-testid="direct-debit-side-drawer-link"]';
  }

  bankAccountContentOne() {
    return 'form p[data-testid="disclaimer-initial-paragraph"]';
  }

  directDebitSideDrawerComponent() {
    return 'form [data-testid="side-drawer-component"]';
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

  bankAccountSideDrawerLinkState() {
    return 'form [data-focus-lock-disabled="disabled"]';
  }

  bankAccountDetailSection() {
    return "form .disclaimer";
  }

  directDebitSideDrawerCloseIcon() {
    return 'span [data-test="component-drawer-button-close"]';
  }
  directDebitSideDrawerCloseCTA() {
    return "//*[@role='button']";
  }

  directDebitSideDrawerCloseIconFocusState() {
    return 'section.direct-debit-paragraph button[data-autofocus="true"][data-test="component-drawer-button-close"]';
  }

  directDebitSideDrawerCloseState() {
    return 'form section.direct-debit-paragraph [data-focus-lock-disabled="disabled"]';
  }

  directDebitSideDrawerLinkOriginalState() {
    return 'form section.direct-debit-paragraph [data-focus-lock-disabled="disabled"]';
  }

  getSortCodeErrorText() {
    return "//*[contains(text(),'Please enter your sort code.')]";
  }

  getSortCodeValidationErrorText() {
    return "//*[contains(text(),'Please enter a valid sort code.')]";
  }

  getBankAccountNumberErrorText() {
    return "#bankAccountNumber-error-message";
  }

  validateInvalidAccountNumberAndSortCodeWarningText() {
    return "//*[contains(text(),'Please ensure you enter your account number and sort code correctly. Or try another account.')]";
  }

  validateRetryInvalidAccountNumberAndSortCodeWarningText() {
    return "//p[contains(text(),'sorry,')]";
  }

  // alternativePaymentWarningMessage() {
  //   return ".error-container > div > p:nth-of-type(2)";
  // }

  validateOptionalPaymentWarningText() {
    return "//*[contains(text(),'You can always choose another way to pay from the checkout.')]";
  }

  goToCheckOutButton() {
    return "//button[contains(text(),'Go to checkout')]";
  }

  /**
   * Define page functions
   */

  checkYourFinancialsTitle() {
    let yourFinancialsTitleText = browser
      .$(this.financialsPageTitle())
      .getText();
    let expected_yourFinancialsTitleText = "Your financials";

    assert(
      yourFinancialsTitleText.includes(expected_yourFinancialsTitleText),
      `Your financials page title - ${yourFinancialsTitleText} does not include ${expected_yourFinancialsTitleText}`
    );
  }

  checkYourMonthlyMortgageRentTitle() {
    let yourMonthlyMortgageRentTitle = browser
      .$(this.monthMortgageRentTitle())
      .getText();
    let expected_yourMonthlyMortgageRentTitle = "Monthly mortgage / rent";

    if (
      (expect(yourMonthlyMortgageRentTitle).to.eql(
        expected_yourMonthlyMortgageRentTitle
      ),
      `Your monthly mortgage / rent title - ${yourMonthlyMortgageRentTitle} does not include ${expected_yourMonthlyMortgageRentTitle}`)
    ) {
      console.log(
        `Your monthly mortgage / rent title - is ${yourMonthlyMortgageRentTitle}`
      );
    }
  }

  checkCurrencyLabel(currency_area) {
    let expected_CurrencyLabel = "£";
    if (currency_area === "Monthly mortgage / rent") {
      let yourMonthlyMortgageRentCurrencyLabel = browser
        .$(this.monthMortgageRentCurrencyLabel())
        .getText();
      if (
        (expect(yourMonthlyMortgageRentCurrencyLabel).to.eql(
          expected_CurrencyLabel
        ),
        `Your monthly mortgage / rent title currency label ${yourMonthlyMortgageRentCurrencyLabel} does not include ${expected_CurrencyLabel}`)
      ) {
        console.log(
          `Your monthly mortgage / rent title currency label is ${yourMonthlyMortgageRentCurrencyLabel}`
        );
      }
    } else if (currency_area === "Yearly income before tax") {
      let yourYearlyIncomeBeforeTaxCurrencyLabel = browser
        .$(this.yearlyIncomeBeforeTaxCurrencyLabel())
        .getText();
      if (
        (expect(yourYearlyIncomeBeforeTaxCurrencyLabel).to.eql(
          expected_CurrencyLabel
        ),
        `Your Yearly income before tax currency label ${yourYearlyIncomeBeforeTaxCurrencyLabel} does not include ${expected_CurrencyLabel}`)
      ) {
        console.log(
          `Your Yearly income before tax currency label is ${yourYearlyIncomeBeforeTaxCurrencyLabel}`
        );
      }
    } else if (currency_area === "Other household income") {
      let yourOtherHouseholdIncomeLabel = browser
        .$(this.otherHouseholdIncomeCurrencyLabel())
        .getText();
      if (
        (expect(yourOtherHouseholdIncomeLabel).to.eql(expected_CurrencyLabel),
        `Your Other household income label ${yourOtherHouseholdIncomeLabel} does not include ${expected_CurrencyLabel}`)
      ) {
        console.log(
          `Your Other household income label is ${yourOtherHouseholdIncomeLabel}`
        );
      }
    } else {
      throw new Error("The currency area you have specified does not exist");
    }
  }

  checkMonthlyMortgageRentInputFieldIsDisplayed() {
    assert(browser.$(this.monthMortgageRentInputField()).isExisting());
    console.log("The monthly /rent input field is displayed");
  }

  checkYearlyIncomeBeforeTaxTitle() {
    let yourYearlyIncomeBeforeTaxTitle = browser
      .$(this.yearlyIncomeBeforeTaxTitle())
      .getText();
    let expected_yourYearlyIncomeBeforeTaxTitle = "Yearly income before tax";

    if (
      (expect(yourYearlyIncomeBeforeTaxTitle).to.eql(
        expected_yourYearlyIncomeBeforeTaxTitle
      ),
      `Your Yearly income before tax title - ${yourYearlyIncomeBeforeTaxTitle} does not include ${expected_yourYearlyIncomeBeforeTaxTitle}`)
    ) {
      console.log(
        `Your Yearly income before tax title- is ${yourYearlyIncomeBeforeTaxTitle}`
      );
    }
  }

  checkYearlyIncomeBeforeTaxIsDisplayed() {
    assert(browser.$(this.yearlyIncomeBeforeTaxInputField()).isExisting());
    console.log("The yearly income before tax input field is displayed");
  }

  checkOtherHouseholdIncomeTitle() {
    let yourOtherHouseholdIncomeTitle = browser
      .$(this.otherHouseholdIncomeTitle())
      .getText();
    let expected_yourOtherHouseholdIncomeTitle = "Other household income";

    if (
      (expect(yourOtherHouseholdIncomeTitle).to.be.eql(
        expected_yourOtherHouseholdIncomeTitle
      ),
      `Other household income - ${yourOtherHouseholdIncomeTitle} does not include ${expected_yourOtherHouseholdIncomeTitle}`)
    ) {
      console.log(
        `Your Yearly income before tax title- is ${yourOtherHouseholdIncomeTitle}`
      );
    }
  }

  checkOtherHouseholdIncomeInputFieldIsNotDisplayed() {
    assert(!browser.$(this.otherHouseholdIncomeInputField()).isDisplayed());
  }

  checkBankAccountDetailsTitle() {
    let yourBankAccountDetailsTitle = browser
      .$(this.bankAccountDetailsTitle())
      .getText();
    let expected_yourBankAccountDetailsTitle = "Bank account details";

    if (
      (expect(yourBankAccountDetailsTitle).to.eql(
        expected_yourBankAccountDetailsTitle
      ),
      `Bank account details title - ${yourBankAccountDetailsTitle} does not include ${expected_yourBankAccountDetailsTitle}`)
    ) {
      console.log(
        `Bank account details title- is ${yourBankAccountDetailsTitle}`
      );
    }
  }

  checkWhyDoYouNeedMyBankAccountNumberTitle() {
    let whyDoYouNeedMyBankAccountNumberTitle = browser
      .$(this.whyDoYouNeedMyBankAccountNumberTitle())
      .getText();
    let expected_whyDoYouNeedMyBankAccountNumberTitle =
      "Why do you need my bank account number?";

    if (
      (expect(whyDoYouNeedMyBankAccountNumberTitle).to.eql(
        expected_whyDoYouNeedMyBankAccountNumberTitle
      ),
      `Why do you need my bank account title - ${whyDoYouNeedMyBankAccountNumberTitle} does not include ${expected_whyDoYouNeedMyBankAccountNumberTitle}`)
    ) {
      console.log(
        `Why do you need my bank account title- is ${whyDoYouNeedMyBankAccountNumberTitle}`
      );
    }
  }

  checkSortCodeTitle() {
    let yourSortCodeTitle = browser.$(this.sortCodeTitle()).getText();
    let expected_sortCodeTitle = "Sort code";

    if (
      (assert(yourSortCodeTitle.includes(expected_sortCodeTitle)),
      `My sort code title - ${yourSortCodeTitle} does not include ${expected_sortCodeTitle}`)
    ) {
      console.log(`My sort code title- is ${yourSortCodeTitle}`);
    }
  }

  checkSortCodeInputFieldsDisplayed() {
    assert(browser.$(this.sortCodeFirstInput()).isExisting());
    console.log("The first sort code input field is displayed");
    assert(browser.$(this.sortCodeSecondInput()).isExisting());
    console.log("The second sort code input field is displayed");
    assert(browser.$(this.sortCodeThirdInput()).isExisting());
    console.log("The third sort code input field is displayed");
  }

  checkBankAccountTitle() {
    let yourBankAccountTitle = browser
      .$(this.bankAccountNumberTitle())
      .getText();
    let expected_yourBankAccountTitle = "Bank account number";

    if (
      (expect(yourBankAccountTitle).to.eql(expected_yourBankAccountTitle),
      `My bank account number title - ${yourBankAccountTitle} does not include ${expected_yourBankAccountTitle}`)
    ) {
      console.log(`My bank account number title- is ${yourBankAccountTitle}`);
    }
  }

  checkBankAccountNumberInputFieldDisplayed() {
    assert(browser.$(this.bankAccountNumberInputField()).isExisting());
    console.log("The Bank Account Number input field is displayed");
  }

  checkWhenWasTheAccountOpenedTitle() {
    let yourWhenWasTheAccountOpenedTitle = browser
      .$(this.whenWasTheAccountOpenedTitle())
      .getText();
    let expected_yourWhenWasTheAccountOpenedTitle =
      "When was the account opened?";

    if (
      (expect(yourWhenWasTheAccountOpenedTitle).to.includes(
        expected_yourWhenWasTheAccountOpenedTitle
      ),
      `When was the account opened title- ${yourWhenWasTheAccountOpenedTitle} does not include ${expected_yourWhenWasTheAccountOpenedTitle}`)
    ) {
      console.log(
        `When was the account opened title- is ${yourWhenWasTheAccountOpenedTitle}`
      );
    }
  }

  checkHintTextTitle() {
    let yourHintTextTitle = browser.$(this.hintTextTitle()).getText();
    let expected_yourHintTextTitle = "For example, 12 2007";

    if (
      (assert(yourHintTextTitle.includes(expected_yourHintTextTitle)),
      `The hint text - ${yourHintTextTitle} does not include ${expected_yourHintTextTitle}`)
    ) {
      console.log(`The hint text title- is ${yourHintTextTitle}`);
    }
  }

  checkWhenYourAccountOpenMonthText() {
    let yourAccountOpenMonthText = browser.$(this.monthTitleLabel()).getText();
    let expected_yourAccountOpenMonthText = "Month";

    if (
      (assert(
        yourAccountOpenMonthText.includes(expected_yourAccountOpenMonthText)
      ),
      `The month title - ${yourAccountOpenMonthText} does not include ${expected_yourAccountOpenMonthText}`)
    ) {
      console.log(`The month title- is ${yourAccountOpenMonthText}`);
    }
  }

  checkWhenYourAccountOpenYearText() {
    let yourAccountOpenYearText = browser.$(this.yearTitleLabel()).getText();
    let expected_yourAccountOpenYearText = "Year";

    if (
      (assert(
        yourAccountOpenYearText.includes(expected_yourAccountOpenYearText)
      ),
      `The year title - ${yourAccountOpenYearText} does not include ${expected_yourAccountOpenYearText}`)
    ) {
      console.log(`The year title- is ${yourAccountOpenYearText}`);
    }
  }

  checkYearAndMonthInputFieldsDisplayed() {
    assert(browser.$(this.monthInputField()).isExisting());
    console.log(
      "The month input field on your finance details page is displayed"
    );
    assert(browser.$(this.yearInputField()).isExisting());
    console.log(
      "The year input field on your finance details page is displayed"
    );
  }

  checkMonthlyMortgageRentInputFieldIsDisplayed() {
    assert(browser.$(this.monthMortgageRentInputField()).isExisting());
    console.log("The monthly /rent input field is displayed");
  }

  checkYearlyIncomeBeforeTaxTitle() {
    let yourYearlyIncomeBeforeTaxTitle = browser
      .$(this.yearlyIncomeBeforeTaxTitle())
      .getText();
    let expected_yourYearlyIncomeBeforeTaxTitle = "Yearly income before tax";

    if (
      (expect(yourYearlyIncomeBeforeTaxTitle).to.eql(
        expected_yourYearlyIncomeBeforeTaxTitle
      ),
      `Your Yearly income before tax title - ${yourYearlyIncomeBeforeTaxTitle} does not include ${expected_yourYearlyIncomeBeforeTaxTitle}`)
    ) {
      console.log(
        `Your Yearly income before tax title- is ${yourYearlyIncomeBeforeTaxTitle}`
      );
    }
  }

  checkYearlyIncomeBeforeTaxIsDisplayed() {
    assert(browser.$(this.yearlyIncomeBeforeTaxInputField()).isExisting());
    console.log("The yearly income before tax input field is displayed");
  }

  checkOtherHouseholdIncomeTitle() {
    let yourOtherHouseholdIncomeTitle = browser
      .$(this.otherHouseholdIncomeTitle())
      .getText();
    let expected_yourOtherHouseholdIncomeTitle = "Other household income";

    if (
      (expect(yourOtherHouseholdIncomeTitle).to.be.eql(
        expected_yourOtherHouseholdIncomeTitle
      ),
      `Other household income - ${yourOtherHouseholdIncomeTitle} does not include ${expected_yourOtherHouseholdIncomeTitle}`)
    ) {
      console.log(
        `Your Yearly income before tax title- is ${yourOtherHouseholdIncomeTitle}`
      );
    }
  }

  verifyApplicationReviewPageUrl() {
    expect(browser.getUrl()).contains("/review-application");
    console.log("Now on the review application page");
  }

  checkStatusPageValidationErrorDisplays(message) {
    var expected_error_message = message;
    if (message.includes("Please ensure this value is correct.")) {
      browser.$(this.yearlyIncomeWarning()).scrollIntoView();
      let actual_income_amount_hint_message = browser
        .$(this.yearlyIncomeWarning())
        .getText();
      expect(actual_income_amount_hint_message).equal(expected_error_message);
    } else if (message.includes("Please enter a valid date.")) {
      let actual_bank_opening_warning_message = browser
        .$(this.accountOpenWarning())
        .getText();
      browser.waitUntil(
        () =>
          browser.$(this.accountOpenWarning()).getText() ===
          "Please enter a valid date.",
        {
          timeout: timeOut,
        }
      );

      browser.$(this.accountOpenWarning()).scrollIntoView();
      expect(actual_bank_opening_warning_message).equal(expected_error_message);
    } else if (
      message.includes(
        "Please enter a valid amount in whole pounds, up to 6 digits, without decimals."
      )
    ) {
      let actual_mortgage_warning_message = browser
        .$(this.accountMortgageWarning())
        .getText();
      browser.$(this.accountMortgageWarning()).scrollIntoView();
      expect(actual_mortgage_warning_message).equal(expected_error_message);
    } else if (
      message.includes(
        "Please enter a valid amount in whole pounds, up to 7 digits, without decimals."
      )
    ) {
      let actual_limit_warning_message;
      if (browser.$(this.yearlyIncomeLimitWarning()).isExisting()) {
        actual_limit_warning_message = browser
          .$(this.yearlyIncomeLimitWarning())
          .getText();
        browser.$(this.yearlyIncomeLimitWarning()).scrollIntoView();
        expect(actual_limit_warning_message).equal(expected_error_message);
      } else if (browser.$(this.otherIncomeLimitWarning()).isExisting()) {
        actual_limit_warning_message = browser
          .$(this.otherIncomeLimitWarning())
          .getText();
        browser.$(this.otherIncomeLimitWarning()).scrollIntoView();
        expect(actual_limit_warning_message).equal(expected_error_message);
      }
    } else if (message.includes("Please enter your sort code.")) {
      let actual_sort_code_warning_message = browser
        .$(this.getSortCodeErrorText())
        .getText();
      browser.$(this.sortCodeTitle()).scrollIntoView();
      expect(actual_sort_code_warning_message).equal(expected_error_message);
    } else if (message.includes("Please enter a valid sort code.")) {
      let actual_sort_code_validation_warning_message = browser
        .$(this.getSortCodeValidationErrorText())
        .getText();
      browser.$(this.sortCodeTitle()).scrollIntoView();
      expect(actual_sort_code_validation_warning_message).equal(
        expected_error_message
      );
    } else if (message.includes("Please enter a valid bank account number.")) {
      let invalid_bank_account_warning_message = browser
        .$(this.getBankAccountNumberErrorText())
        .getText();
      browser.$(this.sortCodeTitle()).scrollIntoView();
      expect(invalid_bank_account_warning_message).equal(
        expected_error_message
      );
    } else if (financial_details_constant.Content_One.includes(message)) {
      let invalid_bank_account_and_sort_code_warning_message = browser
        .$(this.validateInvalidAccountNumberAndSortCodeWarningText())
        .getText();
      expect(
        invalid_bank_account_and_sort_code_warning_message.replace(/\n|\r/g, "")
      ).equal(financial_details_constant.Content_One);
    } else if (financial_details_constant.Content_Two.includes(message)) {
      browser
        .$(this.validateRetryInvalidAccountNumberAndSortCodeWarningText())
        .waitForDisplayed({ timeout: timeOut });
      let invalid_retry_bank_account_and_sort_code_warning_message = browser
        .$(this.validateRetryInvalidAccountNumberAndSortCodeWarningText())
        .getText();
      expect(
        invalid_retry_bank_account_and_sort_code_warning_message.replace(
          /\n|\r/g,
          ""
        )
      ).equal(financial_details_constant.Content_Two);
    } else if (message.includes(financial_details_constant.Content_Three)) {
      browser
        .$(this.validateOptionalPaymentWarningText())
        .waitForDisplayed({ timeout: timeOut });
      // browser.$(this.validateOptionalPaymentWarningText()).scrollIntoView();
      let alternative_payment_warning_message = browser
        .$(this.validateOptionalPaymentWarningText())
        .getText();
      expect(alternative_payment_warning_message).equal(expected_error_message);
    } else {
      throw new Error(
        "The message is: " + message + "but this is not displayed"
      );
    }
  }

  populateFields(
    monthlyMortgageRent,
    yearlyIncome,
    sortCodeOne,
    sortCodeTwo,
    sortCodeThree,
    bankAccountNumber,
    bankMonthOpen,
    bankYearOpen
  ) {
    browser
      .$(this.monthMortgageRentInputField())
      .setValue(clearInputField(browser.$(this.monthMortgageRentInputField())));
    browser.$(this.monthMortgageRentInputField()).setValue(monthlyMortgageRent);
    console.log(`Entering the mortgage rent amount of ${monthlyMortgageRent}`);
    browser
      .$(this.yearlyIncomeBeforeTaxInputField())
      .setValue(
        clearInputField(browser.$(this.yearlyIncomeBeforeTaxInputField()))
      );
    browser.$(this.yearlyIncomeBeforeTaxInputField()).setValue(yearlyIncome);
    console.log(`Entering the yearly income amount of ${yearlyIncome}`);
    browser.$(this.sortCodeFirstInput()).scrollIntoView();
    browser
      .$(this.sortCodeFirstInput())
      .setValue(clearInputField(browser.$(this.sortCodeFirstInput())));
    browser.$(this.sortCodeFirstInput()).setValue(sortCodeOne);
    console.log(`Entering the first part of the sort code as ${sortCodeOne}`);
    browser
      .$(this.sortCodeSecondInput())
      .setValue(clearInputField(browser.$(this.sortCodeSecondInput())));
    browser.$(this.sortCodeSecondInput()).setValue(sortCodeTwo);
    console.log(`Entering the second part of the sort code as ${sortCodeTwo}`);
    browser.$(this.sortCodeThirdInput()).scrollIntoView();
    browser
      .$(this.sortCodeThirdInput())
      .setValue(clearInputField(browser.$(this.sortCodeThirdInput())));
    browser.$(this.sortCodeThirdInput()).setValue(sortCodeThree);
    console.log(`Entering the third part of the sort code as ${sortCodeThree}`);
    browser.$(this.bankAccountNumberInputField()).scrollIntoView();
    browser
      .$(this.bankAccountNumberInputField())
      .setValue(clearInputField(browser.$(this.bankAccountNumberInputField())));
    browser.$(this.bankAccountNumberInputField()).setValue(bankAccountNumber);
    console.log(`Entering the bank account number as ${bankAccountNumber}`);
    browser.$(this.monthInputField()).scrollIntoView();
    browser
      .$(this.monthInputField())
      .setValue(clearInputField(browser.$(this.monthInputField())));
    browser.$(this.monthInputField()).setValue(bankMonthOpen);
    console.log(
      `Entering the month the bank account opened as ${bankMonthOpen}`
    );
    browser
      .$(this.yearInputField())
      .setValue(clearInputField(browser.$(this.yearInputField())));
    browser.$(this.yearInputField()).setValue(bankYearOpen);
    console.log(
      `Entering the month the bank account opened as ${bankYearOpen}`
    );
  }

  checkYourFinancialsContentIsDisplayed() {
    this.checkYourFinancialsTitle();
    this.checkYourMonthlyMortgageRentTitle();
    this.checkCurrencyLabel("Monthly mortgage / rent");
    this.checkMonthlyMortgageRentInputFieldIsDisplayed();
    this.checkYearlyIncomeBeforeTaxTitle();
    this.checkYearlyIncomeBeforeTaxIsDisplayed();
    this.checkCurrencyLabel("Yearly income before tax");
    this.checkOtherHouseholdIncomeInputFieldIsNotDisplayed();
    this.checkBankAccountDetailsTitle();
    this.checkWhyDoYouNeedMyBankAccountNumberTitle();
    this.checkSortCodeTitle();
    this.checkSortCodeInputFieldsDisplayed();
    this.checkBankAccountTitle();
    this.checkBankAccountNumberInputFieldDisplayed();
    this.checkWhenWasTheAccountOpenedTitle();
    this.checkHintTextTitle();
    this.checkWhenYourAccountOpenMonthText();
    this.checkWhenYourAccountOpenYearText();
    this.checkYearAndMonthInputFieldsDisplayed();
    verifyContinueApplicationButtonText();
    verifyLeaveApplicationButtonText();
  }

  clickOnSideDrawerLink() {
    browser.$(this.bankAccountSideDrawerLink()).click();
  }

  verifySideDrawerComponent() {
    browser.waitUntil(
      () => browser.$(this.bankAccountSideDrawerComponent()).isExisting(),
      {
        timeout: timeOut,
      }
    );
    let sideDrawerState = browser
      .$(this.bankAccountSideDrawerComponent())
      .isExisting();
    expect(sideDrawerState).to.eql(true);
    if (sideDrawerState === true) {
      console.log(sideDrawerState);
    }
  }

  verifySideDrawerTitle(sideDrawerTitle) {
    let sideDrawerTitleText = browser
      .$(this.bankAccountSideDrawerTitle())
      .isExisting();
    expect(sideDrawerTitleText).to.eql(true);
    expect(browser.$(this.bankAccountSideDrawerTitle()).getText()).to.eql(
      sideDrawerTitle
    );
  }

  verifyTextOnSideDrawer(sideDrawerText) {
    let textOnSideDrawer = browser
      .$(this.bankAccountSideDrawerText())
      .isExisting();
    expect(textOnSideDrawer).to.eql(true);
    let bankAccountSideDrawerText = browser
      .$(this.bankAccountSideDrawerText())
      .getText();
    expect(bankAccountSideDrawerText.replace(/(\r\n|\n|\r)/gm, "")).to.include(
      sideDrawerText
    );
  }

  verifyCloseIcon() {
    let isExisting = browser
      .$(this.bankAccountSideDrawerCloseIcon())
      .isExisting();
    expect(isExisting).to.eql(true);
    console.log(isExisting);
  }

  verifyCloseBtnOnSideDrawer() {
    browser.waitUntil(
      () => browser.$(this.bankAccountSideDrawerCloseBtn()).isExisting(),
      {
        timeout: timeOut,
      }
    );
    let isExisting = browser
      .$(this.bankAccountSideDrawerCloseBtn())
      .isExisting();
    expect(isExisting).to.eql(true);
    console.log(isExisting);
  }

  verifyCloseIconState() {
    browser.waitUntil(
      () => browser.$(this.bankAccountSideDrawerCloseBtn()).isExisting(),
      {
        timeout: timeOut,
      }
    );
    let sideDrawerCloseIconState = browser
      .$(this.bankAccountSideDrawerCloseIconFocusState())
      .isExisting();
    expect(sideDrawerCloseIconState).to.eql(true);
  }

  clickOnBankAccountCloseBtn() {
    browser.$(this.bankAccountSideDrawerCloseBtn()).click();
  }

  verifyBankAccountSideDrawerLinkState() {
    browser.waitUntil(
      () => browser.$(this.bankAccountSideDrawerLinkState()).isExisting(),
      {
        timeout: timeOut,
      }
    );
    let bankAccountSideDrawLinkFocusState = browser
      .$(this.bankAccountSideDrawerLinkState())
      .isExisting();
    expect(bankAccountSideDrawLinkFocusState).eql(true);
    if (bankAccountSideDrawLinkFocusState === true) {
      console.log(bankAccountSideDrawLinkFocusState);
    } else {
      console.log(bankAccountSideDrawLinkFocusState);
    }
  }

  verifySideDrawerComponentCloseState() {
    browser.waitUntil(
      () => browser.$(this.bankAccountSideDrawerLinkState()).isExisting(),
      {
        timeout: timeOut,
      }
    );
    let sideDrawerClosed = browser
      .$(this.bankAccountSideDrawerCloseState())
      .isExisting();
    expect(sideDrawerClosed).eql(true);
    if (sideDrawerClosed === true) {
      console.log(sideDrawerClosed);
    } else {
      console.log(sideDrawerClosed);
    }
  }

  verifyBankAccountDetailsSection() {
    browser.$(this.directDebitLink()).scrollIntoView();
    let bankAccountDetailSection = browser
      .$(this.bankAccountDetailSection())
      .isExisting();
    browser.waitUntil(
      () => browser.$(this.bankAccountDetailSection()).isExisting(),
      {
        timeout: timeOut,
      }
    );
    expect(bankAccountDetailSection).to.eql(true);
    console.log(bankAccountDetailSection);
  }

  clickOnDirectDebitGuaranteeLink() {
    browser.$(this.directDebitLink()).scrollIntoView();
    browser.execute("arguments[0].click();", browser.$(this.directDebitLink()));
  }

  verifyBankAccountContentOne(contentOne) {
    let bankAccountContentOneText = browser
      .$(this.bankAccountContentOne())
      .isExisting();
    console.log(bankAccountContentOneText);
    let contentOneText = browser.$(this.bankAccountContentOne()).getText();
    expect(contentOneText).to.eql(contentOne);
  }

  verifyBankAccountTickPointOne(tickPointTextOne) {
    let tickPointOne = browser.$(this.tickPointOneText()).isExisting();
    console.log(tickPointOne);
    let tickPointText = browser.$(this.tickPointOneText()).getText();
    expect(tickPointText).to.eql(tickPointTextOne);
  }

  verifyBankAccountTickPointTwo(tickPointTextTwo) {
    let tickPointTwo = browser.$(this.tickPointTwoText()).isExisting();
    console.log(tickPointTwo);
    let tickPointTwoText = browser.$(this.tickPointTwoText()).getText();
    expect(tickPointTwoText).to.eql(tickPointTextTwo);
  }

  verifyBankAccountTickPointThree(tickPointTextThree) {
    let tickPointThree = browser.$(this.tickPointThreeText()).isExisting();
    console.log(tickPointThree);
    let tickPointThreeText = browser.$(this.tickPointThreeText()).getText();
    expect(tickPointThreeText).eql(tickPointTextThree);
  }

  verifyBankAccountContentTwo(contentTwo) {
    let contentTwoSpanOne = browser
      .$(this.contentTwoBankAccountSpanOne())
      .isExisting();
    console.log(contentTwoSpanOne);
    let contentTwoSpanOneText = browser
      .$(this.contentTwoBankAccountSpanOne())
      .getText();
    console.log(contentTwoSpanOneText);
    expect(contentTwo).to.includes(contentTwoSpanOneText);
    let contentTwoSpanTwo = browser
      .$(this.contentTwoBankAccountSpanTwo())
      .isExisting();
    console.log(contentTwoSpanTwo);
    let contentTwoSpanTwoText = browser
      .$(this.contentTwoBankAccountSpanTwo())
      .getText();
    console.log(contentTwoSpanTwoText);
    expect(contentTwo).to.includes(contentTwoSpanTwoText);
    let contentTwoSpanThree = browser
      .$(this.contentTwoBankAccountSpanThree())
      .isExisting();
    console.log(contentTwoSpanThree);
    let contentTwoSpanThreeText = browser
      .$(this.contentTwoBankAccountSpanThree())
      .getText();
    console.log(contentTwoSpanThreeText);
    expect(contentTwo).to.includes(contentTwoSpanThreeText);
  }

  verifyDirectDebitGuaranteeLink() {
    browser.waitUntil(() => browser.$(this.directDebitLink()).isExisting(), {
      timeout: timeOut,
    });
    let directDebitLink = browser.$(this.directDebitLink()).isExisting();
    expect(directDebitLink).to.eql(true);
    console.log(directDebitLink);
  }

  verifyDirectDebitGuaranteeSideDrawerDisplay() {
    browser.$(this.directDebitSideDrawerComponent()).scrollIntoView();
    let directDebitSideDrawer = browser
      .$(this.directDebitSideDrawerComponent())
      .isExisting();
    expect(directDebitSideDrawer).to.eql(true);
    console.log(directDebitSideDrawer);
  }

  verifySideDrawerHeadingOne(headingOne) {
    let sideDrawerHeadingOne = browser
      .$(this.directDebitSideDrawerHeadingOne())
      .isExisting();
    console.log(sideDrawerHeadingOne);
    expect(sideDrawerHeadingOne).to.eql(true);
    let sideDrawerHeadingOneText = browser
      .$(this.directDebitSideDrawerHeadingOne())
      .getText();
    console.log(sideDrawerHeadingOneText);
    expect(sideDrawerHeadingOneText).to.eql(headingOne);
  }

  verifySideDrawerBulletOne(bulletOne) {
    let sideDrawerBulletOne = browser
      .$(this.directDebitSideDrawerBulletOne())
      .isExisting();
    console.log(sideDrawerBulletOne);
    expect(sideDrawerBulletOne).to.eql(true);
    let sideDrawerBulletOneText = browser
      .$(this.directDebitSideDrawerBulletOne())
      .getText();
    console.log(sideDrawerBulletOneText);
    expect(sideDrawerBulletOneText).to.eql(bulletOne);
  }

  verifySideDrawerBulletTwo(bulletTwo) {
    let sideDrawerBulletTwo = browser
      .$(this.directDebitSideDrawerBulletTwo())
      .isExisting();
    console.log(sideDrawerBulletTwo);
    let sideDrawerBulletTwoText = browser
      .$(this.directDebitSideDrawerBulletTwo())
      .getText();
    console.log(sideDrawerBulletTwoText);
    expect(sideDrawerBulletTwoText).to.eql(bulletTwo);
  }

  verifySideDrawerBulletThree(bulletThree) {
    let sideDrawerBulletThree = browser
      .$(this.directDebitSideDrawerBulletThree())
      .isExisting();
    console.log(sideDrawerBulletThree);
    let sideDrawerBulletThreeText = browser
      .$(this.directDebitSideDrawerBulletThree())
      .getText();
    console.log(sideDrawerBulletThreeText);
    expect(sideDrawerBulletThreeText).to.eql(bulletThree);
  }

  verifySideDrawerSubBullet(subBullet) {
    let sideDrawerSubBullet = browser
      .$(this.directDebitSideDrawerSubBullet())
      .isExisting();
    console.log(sideDrawerSubBullet);
    let sideDrawerSubBulletText = browser
      .$(this.directDebitSideDrawerSubBullet())
      .getText();
    console.log(sideDrawerSubBulletText);
    expect(sideDrawerSubBulletText).to.includes(subBullet);
  }

  verifySideDrawerBulletFour(bulletFour) {
    let sideDrawerBulletFour = browser
      .$(this.directDebitSideDrawerBulletFour())
      .isExisting();
    console.log(sideDrawerBulletFour);
    let sideDrawerBulletFourText = browser
      .$(this.directDebitSideDrawerBulletFour())
      .getText();
    console.log(sideDrawerBulletFourText);
    expect(sideDrawerBulletFourText).to.eql(bulletFour);
  }

  verifySideDrawerCloseIcon() {
    browser
      .$(this.directDebitSideDrawerCloseIcon())
      .waitForDisplayed({ timeout: timeOut });
    let closeIcon = browser
      .$(this.directDebitSideDrawerCloseIcon())
      .isExisting();
    expect(closeIcon).to.eql(true);
    console.log(closeIcon);
  }

  verifySideDrawerCloseCTA() {
    browser.waitUntil(
      () =>
        browser.$(this.directDebitSideDrawerCloseCTA()).isExisting() === true,
      {
        timeout: timeOut,
      }
    );
    let closeCTA = browser.$(this.directDebitSideDrawerCloseCTA()).isExisting();
    expect(closeCTA).to.eql(true);
    console.log(closeCTA);
  }

  verifyDirectDebitSideDrawerCloseIconState() {
    browser.waitUntil(
      () =>
        browser
          .$(this.directDebitSideDrawerCloseIconFocusState())
          .isExisting() === true,
      {
        timeout: timeOut,
      }
    );
    let sideDrawerCloseIconState = browser
      .$(this.directDebitSideDrawerCloseIconFocusState())
      .isExisting();
    expect(sideDrawerCloseIconState).to.eql(true);
  }

  verifyDirectDebitSideDrawerComponentState() {
    let sideDrawerClosedState = browser
      .$(this.directDebitSideDrawerCloseState())
      .isExisting();
    console.log(sideDrawerClosedState);
  }

  verifyOriginalStateOfDirectDebitLink() {
    browser.$(this.directDebitSideDrawerLinkOriginalState()).waitForDisplayed({
      timeout: timeOut,
    });
    let directDebitSideDrawLinkFocusState = browser
      .$(this.directDebitSideDrawerLinkOriginalState())
      .isExisting();
    expect(directDebitSideDrawLinkFocusState).to.eql(true);
    console.log(directDebitSideDrawLinkFocusState);
  }

  verifyGoToCheckOutButtonIsDisplayed() {
    let goToCheckOutButtonText = browser.$(this.goToCheckOutButton()).getText();
    expect(goToCheckOutButtonText).to.eql(
      financial_details_constant.go_to_check_out_text
    );
    console.log(goToCheckOutButtonText);
  }

  clickOnDirectDebitSideDrawerCloseCTA() {
    browser.waitUntil(
      () =>
        browser.$(this.directDebitSideDrawerCloseCTA()).isExisting() === true,
      {
        timeout: timeOut,
      }
    );
    browser.execute(
      "arguments[0].click();",
      browser.$(this.directDebitSideDrawerCloseCTA())
    );
  }
}

export default new YourFinancialsPage();
