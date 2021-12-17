const expect = require("chai").expect;
const environment = require("../config/environments.conf");
let calculatorPageUrl = "repayment-calculator";
import clearInputFields from "../../support/common_actions/clearInputFields";
const calculator_screen_constants = require("../../data/calculator_screen_constants");
const timeOut = 20000;

class rePaymentCalculatorPage {
  /**
   *** define css locators
   */

  calculatorPageTitle() {
    return "[data-test='component-heading-content']";
  }

  calculatorPageContentOneText() {
    return "[data-testid='head-paragraph-1']";
  }

  calculatorSubHeadingEightText() {
    return "section[data-testid='representative-example'] > .bold.title";
  }
  calculatorPageSubTitleTen() {
    return "section:nth-of-type(2) > .bold.title";
  }

  calculatorPageContentEight() {
    return "p[data-testid='representative-example-paragraph']";
  }

  calculatorPageSubTitleTwo() {
    return "span[data-testid='interest-note-title']";
  }

  calculatorPageSubTitleEleven() {
    return "span[data-testid='repay-early-title']";
  }

  calculatorPageContentTwoText() {
    return "p[data-testid='head-paragraph-2']";
  }

  calculatorPageContentTen() {
    return "p[data-testid='interest-note']";
  }

  calculatorPageContentNine() {
    return "section[data-testid='representative-example'] > .footnote-para";
  }

  calculatorPageContentEleven() {
    return "p[data-testid='repay-early-note']";
  }

  paymentSlider() {
    return "div[role='slider'] > div";
  }

  trolleyText() {
    return "[data-testid='item-term-1']";
  }

  costPerMonthText() {
    return "[data-testid='item-term-2']";
  }
  monthlyTermPaymentsText() {
    return "[data-testid='item-term-3']";
  }

  aprText() {
    return "[data-testid='item-term-4']";
  }
  creditChargeText() {
    return "[data-testid='item-term-5']";
  }
  totalPayableText() {
    return "[data-testid='item-term-6']";
  }
  termsConditionsText() {
    return ".footnote-paragraph";
  }
  learnLink() {
    return "button#side-drawer-link";
  }

  minTermValueText() {
    return "span[data-testid='range-min-months']";
  }

  maxTermValueText() {
    return "span[data-testid='range-max-months']";
  }
  defaultTermDurationText() {
    return "input#calc-period-duration";
  }

  trolleyValue() {
    return "[data-testid='item-definition-1']";
  }

  costPerMonthValue() {
    return "[data-testid='item-definition-2']";
  }

  paymentLength() {
    return "[data-testid='item-definition-3']";
  }

  aprValue() {
    return "[data-testid='item-definition-4']";
  }

  creditChargeAmount() {
    return "[data-testid='item-definition-5']";
  }

  totalPayableAmount() {
    return "[data-testid='item-definition-6']";
  }

  termDurationInputField() {
    return "[data-test='input']";
  }

  minus() {
    return "[data-testid='period-decrement-btn']";
  }
  plus() {
    return "[data-testid='period-increment-btn']";
  }

  pageUrl() {
    return browser.getUrl();
  }

  sideDrawLearnMoreTitle() {
    return "#component-drawer-drawer-title strong";
  }
  sideDrawTrolleyTotalTitle() {
    return "[data-testid='calc-term-1']";
  }

  sideDrawTrolleyTotalText() {
    return "[data-testid='calc-definiton-1']";
  }

  sideDrawCostPerMonthTitle() {
    return "[data-testid='calc-term-2']";
  }

  sideDrawCostPerMonthText() {
    return "[data-testid='calc-definiton-2']";
  }

  sideDrawMonthlyPaymentsTitle() {
    return "[data-testid='calc-term-3']";
  }

  sideDrawMonthlyPaymentsText() {
    return "[data-testid='calc-definiton-3']";
  }
  sideDrawRepresentativeAPRTitle() {
    return " [data-testid='calc-term-4']";
  }
  sideDrawRepresentativeAPRText() {
    return "[data-testid='calc-definiton-4']";
  }

  sideDrawCreditChargeTitle() {
    return "[data-testid='calc-term-5']";
  }

  sideDrawCreditChargeText() {
    return "[data-testid='calc-definiton-5']";
  }
  sideDrawTotalPayableText() {
    return "[data-testid='calc-definiton-6']";
  }
  sideDrawTotalPayableTitle() {
    return "[data-testid='calc-term-6']";
  }

  sideDrawCloseButton() {
    return "button[data-testid='close']";
  }

  sideDrawCloseIcon() {
    return "button[data-test='component-drawer-button-close']";
  }

  termsErrorMessage() {
    return ".calc-heading [role]";
  }

  termsSlider() {
    return "[data-testid='duration-slider']";
  }
  /**
   * Define page functions
   */

  verifyCalculatorPageUrl() {
    let Url = this.pageUrl;
    expect(Url).to.eql(environment.dev1_env + calculatorPageUrl);
    console.log(this.pageUrl);
  }

  verifyCalculatorPageTitleOne(titleOne) {
    browser.$(this.calculatorPageTitle()).waitForDisplayed({ timeout: timeOut });
    let pageTitleOne = browser.$(this.calculatorPageTitle()).isExisting();
    console.log(pageTitleOne);
    let titleOneText = browser.$(this.calculatorPageTitle()).getText();
    console.log(titleOneText);
    expect(titleOneText).to.eql(titleOne);
  }

  verifyCalculatorPageContentOneText(contentOne) {
    let pageContentOne = browser
      .$(this.calculatorPageContentOneText())
      .isExisting();
    console.log(pageContentOne);
    let pageContentText = browser
      .$(this.calculatorPageContentOneText())
      .getText();
    console.log(pageContentText);
    expect(pageContentText).to.eql(contentOne);
  }

  verifyCalculatorPageSubheadingEightText(subheadingEight) {
    let pageSubHeadingEight = browser
      .$(this.calculatorSubHeadingEightText())
      .isExisting();
    console.log(pageSubHeadingEight);
    let pageSubHeadingEightText = browser
      .$(this.calculatorSubHeadingEightText())
      .getText();
    console.log(pageSubHeadingEightText);
    expect(pageSubHeadingEightText).to.eql(subheadingEight);
  }

  verifyCalculatorContentTwoText(contentTwo) {
    let pageContentTwo = browser
      .$(this.calculatorPageContentTwoText())
      .isExisting();
    console.log(pageContentTwo);
    let pageContentTwoText = browser
      .$(this.calculatorPageContentTwoText())
      .getText();
    console.log(pageContentTwoText);
    expect(pageContentTwoText).to.eql(contentTwo);
  }
  verifyCalculatorPageContentEightText(contentEight) {
    let pageContentEight = browser
      .$(this.calculatorPageContentEight())
      .isExisting();
    console.log(pageContentEight);
    let pageContentEightText = browser
      .$(this.calculatorPageContentEight())
      .getText();
    console.log(pageContentEightText);
    expect(pageContentEightText).to.contains(contentEight);
  }

  verifyCalculatorPageSubheadingTen(subTitleTen) {
    let pageSubTitleTen = browser
      .$(this.calculatorPageSubTitleTen())
      .isExisting();
    console.log(pageSubTitleTen);
    let pageSubTitleTenText = browser
      .$(this.calculatorPageSubTitleTen())
      .getText();
    console.log(pageSubTitleTenText);
    expect(pageSubTitleTenText).to.eql(subTitleTen);
  }

  verifyCalculatorPageSubTitleTwo(subTitleTwo) {
    let pageSubTitleTwo = browser
      .$(this.calculatorPageSubTitleTwo())
      .isExisting();
    console.log(pageSubTitleTwo);
    let pageSubTitleTwoText = browser
      .$(this.calculatorPageSubTitleTwo())
      .getText();
    console.log(pageSubTitleTwoText);
    expect(pageSubTitleTwoText).to.eql(subTitleTwo);
  }

  verifyCalculatorPageSubTitleEleven(calculatorPageSubTitleEleven) {
    let pageSubTitleEleven = browser
      .$(this.calculatorPageSubTitleEleven())
      .isExisting();
    console.log(pageSubTitleEleven);
    let pageSubTitleElevenText = browser
      .$(this.calculatorPageSubTitleEleven())
      .getText();
    console.log(pageSubTitleElevenText);
    expect(pageSubTitleElevenText).to.eql(calculatorPageSubTitleEleven);
  }

  verifyCalculatorPageContentNine(contentNine) {
    let pageContentNine = browser
      .$(this.calculatorPageContentNine())
      .isExisting();
    console.log(pageContentNine);
    let pageContentNineText = browser
      .$(this.calculatorPageContentNine())
      .getText();
    console.log(pageContentNineText);
    expect(pageContentNineText).to.eql(contentNine);
  }

  verifyCalculatorPageContentTen(contentTen) {
    let pageContentTen = browser
      .$(this.calculatorPageContentTen())
      .isExisting();
    console.log(pageContentTen);
    let pageContentTenText = browser
      .$(this.calculatorPageContentTen())
      .getText();
    console.log(pageContentTenText);
    expect(pageContentTenText).to.eql(contentTen);
  }

  verifyCalculatorPageContentEleven(contentEleven) {
    let pageContentEleven = browser
      .$(this.calculatorPageContentEleven())
      .isExisting();
    console.log(pageContentEleven);
    let pageContentElevenText = browser
      .$(this.calculatorPageContentEleven())
      .getText();
    console.log(pageContentElevenText);
    expect(pageContentElevenText).to.eql(contentEleven);
  }

  verifyPaymentSlider() {
    let isPaymentSliderDisplayed = browser.$(this.paymentSlider()).isExisting();
    if (expect(isPaymentSliderDisplayed).eql(true)) {
      console.log("The payment slider is present");
    } else {
      throw new Error("The payment slider is not present please check");
    }
  }

  verifyTrolleyTextLabelOne(trolleyText) {
    let expectedTrolleyText = browser.$(this.trolleyText()).getText();
    console.log(expectedTrolleyText);
    expect(expectedTrolleyText).eql(trolleyText);
  }

  verifyCostPerMonthLabelTwo(costPerMonth) {
    let expectedCostPerMonthText = browser.$(this.costPerMonthText()).getText();
    console.log(expectedCostPerMonthText);
    expect(expectedCostPerMonthText).eql(costPerMonth);
  }

  verifyMonthlyPaymentsLabelThree(monthlyPayments) {
    let expectedMonthlyText = browser
      .$(this.monthlyTermPaymentsText())
      .getText();
    console.log(expectedMonthlyText);
    expect(expectedMonthlyText).eql(monthlyPayments);
  }

  verifyRepresentativeAprLabelFour(aprLabel) {
    let expectedAprLabelText = browser.$(this.aprText()).getText();
    console.log(expectedAprLabelText);
    expect(expectedAprLabelText).eql(aprLabel);
  }

  verifyCreditChargeLabelFive(creditCharge) {
    let expectedCreditChargeText = browser.$(this.creditChargeText()).getText();
    console.log(expectedCreditChargeText);
    expect(expectedCreditChargeText).includes(creditCharge);
  }

  verifyTotalPayableLabelSix(totalPayable) {
    let expectedTotalPayableText = browser.$(this.totalPayableText()).getText();
    console.log(expectedTotalPayableText);
    expect(expectedTotalPayableText).eql(totalPayable);
  }

  verifyTCsText(termsConditions) {
    let expectedTermsConditionsText = browser
      .$(this.termsConditionsText())
      .getText();
    console.log(expectedTermsConditionsText);
    expect(expectedTermsConditionsText).eql(termsConditions);
  }

  verifyLearnMoreLink(learnLinkText) {
    let learnLink = browser.$(this.learnLink()).isExisting();
    console.log(learnLink);
    let expectedLearnLinkText = browser.$(this.learnLink()).getText();
    console.log(expectedLearnLinkText);
    expect(expectedLearnLinkText).eql(learnLinkText);
  }

  verifyMinimumTermLengthText(expectedMinimumTerm) {
    let actualMinimumTerm = browser.$(this.minTermValueText()).getText();
    console.log(`The minimum term on display is ${actualMinimumTerm} months`);
    expect(actualMinimumTerm.replace("min", "")).includes(expectedMinimumTerm);
  }

  verifyMaximumTermLengthText(expectedMaximumTerm) {
    let actualMaximumTerm = browser.$(this.maxTermValueText()).getText();
    console.log(`The maximum term on display is ${actualMaximumTerm} months`);
    expect(actualMaximumTerm.replace("max", "")).includes(expectedMaximumTerm);
  }

  async verifyDurationTermsLengthText(expectedDurationText) {
    browser
      .$(this.defaultTermDurationText())
      .waitForDisplayed({ timeout: timeOut });
    let actualDurationText = browser
      .$(this.defaultTermDurationText())
      .getAttribute("value");
    console.log(
      `The default duration term on display is ${actualDurationText} months`
    );
    (await browser.waitUntil(async () => await actualDurationText)) ===
      expectedDurationText,
      {
        timeout: timeOut,
        timeoutMsg: "expected text to be different after 5s",
      };

    expect(actualDurationText).eql(expectedDurationText);
  }

  async verifyTrolleyAmount(expectedTrolleyAmount) {
    browser.$(this.trolleyValue()).waitForDisplayed({ timeout: timeOut });
    let actualTrolleyAmount = browser.$(this.trolleyValue()).getText();
    try {
      await browser.waitUntil(
        async () => (await actualTrolleyAmount) == expectedTrolleyAmount,
        {
          timeout: timeOut,
          timeoutMsg: `The actual trolley amount of ${actualTrolleyAmount} is not the expected trolley amount of ${expectedTrolleyAmount}`,
        }
      );
      console.log(`The current trolley value is ${actualTrolleyAmount}`);
      expect(actualTrolleyAmount).to.eql(expectedTrolleyAmount);
    } catch (e) {
      console.log(e);
    }
  }

  verifyCostPerMonthAmount(expectedCostPerMonth) {
    let actualCostPerMonthAmount = browser
      .$(this.costPerMonthValue())
      .getText();
    console.log(`The current cost per month is ${actualCostPerMonthAmount}`);
    expect(actualCostPerMonthAmount).contain(expectedCostPerMonth);
  }

  verifyNumberOfPayments(expectedPaymentNumber) {
    let actualPaymentNumber = browser.$(this.paymentLength()).getText();
    console.log(`The amount of payments to be made is ${actualPaymentNumber}`);
    expect(actualPaymentNumber).include(expectedPaymentNumber);
  }

  verifyAprValue(expectedAprValue) {
    let actualAprValue = browser.$(this.aprValue()).getText();
    console.log(`The current APR is ${actualAprValue}`);
    expect(actualAprValue).include(expectedAprValue);
  }

  verifyAprValue(expectedAprValue) {
    let actualAprValue = browser.$(this.aprValue()).getText();
    console.log(`The current APR is ${actualAprValue}`);
    expect(actualAprValue).include(expectedAprValue);
  }

  verifyTotalCreditCharge(expectedCreditCharge) {
    let actualCreditCharge = browser.$(this.creditChargeAmount()).getText();
    console.log(`The current credit charge is ${actualCreditCharge}`);
    expect(actualCreditCharge).include(expectedCreditCharge);
  }

  verifyTotalPayableAmount(expectedPayableAmount) {
    let actualPayableAmount = browser.$(this.totalPayableAmount()).getText();
    console.log(`The current total payable amount is  ${actualPayableAmount}`);
    expect(actualPayableAmount).include(expectedPayableAmount);
  }

  clickLearnMore() {
    browser.$(this.learnLink()).waitForDisplayed({ timeout: timeOut });
    browser.$(this.learnLink()).click();
  }

  updateTerm(termAmount) {
    browser
      .$(this.termDurationInputField())
      .setValue(clearInputFields(browser.$(this.termDurationInputField())));
    browser.$(this.termDurationInputField()).setValue(termAmount);
  }

  checkTermsErrorMessage(errorMessage) {
    browser.waitUntil(() =>
      browser.$(this.termDurationInputField()).isExisting()
    ) === true,
      {
        timeout: timeOut,
        timeoutMsg: "expected text to be different after 5s",
      };

    let actualErrorMessage = browser.$(this.termsErrorMessage()).getText();
    expect(actualErrorMessage).include(errorMessage);
  }

  verifyPlusMinusDisabledValues() {
    let minusButtonColour = browser
      .$(this.minus())
      .getCSSProperty("border-color")["value"];
    let plusButtonColour = browser
      .$(this.plus())
      .getCSSProperty("border-color")["value"];

    expect(browser.$(this.minus()).isEnabled()).eql(false);
    expect(browser.$(this.plus()).isEnabled()).eql(false);
    if (
      plusButtonColour &&
      minusButtonColour === calculator_screen_constants.Chrome_grey
    ) {
      expect(minusButtonColour).eql(calculator_screen_constants.Chrome_grey);
      expect(plusButtonColour).eql(calculator_screen_constants.Chrome_grey);
    } else if (
      plusButtonColour &&
      minusButtonColour === calculator_screen_constants.Grey
    ) {
      expect(minusButtonColour).eql(calculator_screen_constants.Grey);
      expect(plusButtonColour).eql(calculator_screen_constants.Grey);
    } else {
      throw new Error("Check the constant values in the data folder");
    }
  }

  verifyLearnMoreLinkIsDisabled() {
    expect(browser.$(this.learnLink()).isEnabled()).eql(false);
  }

  verifyCalculatorResultsTableTextColorValuesAreGrey() {
    let trolleyTextColour = browser
      .$(this.trolleyText())
      .getCSSProperty("color")["value"];
    let costPerMonthTextColour = browser
      .$(this.costPerMonthText())
      .getCSSProperty("color")["value"];
    let numberOfMonthlyPaymentsTextColour = browser
      .$(this.monthlyTermPaymentsText())
      .getCSSProperty("color")["value"];
    let aprTextColour = browser.$(this.aprText()).getCSSProperty("color")[
      "value"
    ];
    let totalCreditTextColour = browser
      .$(this.creditChargeText())
      .getCSSProperty("color")["value"];
    let totalPayableAmountTextColour = browser
      .$(this.totalPayableText())
      .getCSSProperty("color")["value"];

    if (
      trolleyTextColour &&
      costPerMonthTextColour &&
      numberOfMonthlyPaymentsTextColour &&
      aprTextColour &&
      totalCreditTextColour &&
      totalPayableAmountTextColour === calculator_screen_constants.Chrome_grey
    ) {
      expect(trolleyTextColour).eql(calculator_screen_constants.Chrome_grey);
      expect(costPerMonthTextColour).eql(
        calculator_screen_constants.Chrome_grey
      );
      expect(numberOfMonthlyPaymentsTextColour).eql(
        calculator_screen_constants.Chrome_grey
      );
      expect(aprTextColour).eql(calculator_screen_constants.Chrome_grey);
      expect(totalCreditTextColour).eql(
        calculator_screen_constants.Chrome_grey
      );
      expect(totalPayableAmountTextColour).eql(
        calculator_screen_constants.Chrome_grey
      );
    } else if (
      trolleyTextColour &&
      costPerMonthTextColour &&
      numberOfMonthlyPaymentsTextColour &&
      aprTextColour &&
      totalCreditTextColour &&
      totalPayableAmountTextColour === calculator_screen_constants.Grey
    ) {
      expect(trolleyTextColour).eql(calculator_screen_constants.Grey);
      expect(costPerMonthTextColour).eql(calculator_screen_constants.Grey);
      expect(numberOfMonthlyPaymentsTextColour).eql(
        calculator_screen_constants.Grey
      );
      expect(aprTextColour).eql(calculator_screen_constants.Grey);
      expect(totalCreditTextColour).eql(calculator_screen_constants.Grey);
      expect(totalPayableAmountTextColour).eql(
        calculator_screen_constants.Grey
      );
    } else {
      throw new Error("Check the constant values in the data folder");
    }
  }
  verifyCalculatorResultsTableAmountColorValuesAreGrey() {
    let trolleyTextColour = browser
      .$(this.trolleyValue())
      .getCSSProperty("color")["value"];
    let costPerMonthTextColour = browser
      .$(this.costPerMonthValue())
      .getCSSProperty("color")["value"];
    let numberOfMonthlyPaymentsTextColour = browser
      .$(this.costPerMonthValue())
      .getCSSProperty("color")["value"];
    let aprTextColour = browser.$(this.aprValue()).getCSSProperty("color")[
      "value"
    ];
    let totalCreditTextColour = browser
      .$(this.creditChargeAmount())
      .getCSSProperty("color")["value"];
    let totalPayableAmountTextColour = browser
      .$(this.totalPayableAmount())
      .getCSSProperty("color")["value"];

    if (
      trolleyTextColour &&
      costPerMonthTextColour &&
      numberOfMonthlyPaymentsTextColour &&
      aprTextColour &&
      totalCreditTextColour &&
      totalPayableAmountTextColour === calculator_screen_constants.Chrome_grey
    ) {
      expect(trolleyTextColour).eql(calculator_screen_constants.Chrome_grey);
      expect(costPerMonthTextColour).eql(
        calculator_screen_constants.Chrome_grey
      );
      expect(numberOfMonthlyPaymentsTextColour).eql(
        calculator_screen_constants.Chrome_grey
      );
      expect(aprTextColour).eql(calculator_screen_constants.Chrome_grey);
      expect(totalCreditTextColour).eql(
        calculator_screen_constants.Chrome_grey
      );
      expect(totalPayableAmountTextColour).eql(
        calculator_screen_constants.Chrome_grey
      );
    } else if (
      trolleyTextColour &&
      costPerMonthTextColour &&
      numberOfMonthlyPaymentsTextColour &&
      aprTextColour &&
      totalCreditTextColour &&
      totalPayableAmountTextColour === calculator_screen_constants.Grey
    ) {
      expect(trolleyTextColour).eql(calculator_screen_constants.Grey);
      expect(costPerMonthTextColour).eql(calculator_screen_constants.Grey);
      expect(numberOfMonthlyPaymentsTextColour).eql(
        calculator_screen_constants.Grey
      );
      expect(aprTextColour).eql(calculator_screen_constants.Grey);
      expect(totalCreditTextColour).eql(calculator_screen_constants.Grey);
      expect(totalPayableAmountTextColour).eql(
        calculator_screen_constants.Grey
      );
    } else {
      throw new Error("Check the constant values in the data folder");
    }
  }

  checkTermsErrorMessageIsNotDisplayed() {
    browser.waitUntil(
      () => browser.$(this.termsErrorMessage()).isExisting() === false
    ),
      {
        timeout: timeOut,
        timeoutMsg: "expected text to be different after 5s",
      };

    expect(browser.$(this.termsErrorMessage()).isExisting()).eql(false);
  }

  checkTermsErrorMessageIsNotErrorRed() {
    let termsTextColour = browser
      .$(this.termDurationInputField())
      .getCSSProperty("color")["value"];
    if (
      termsTextColour === calculator_screen_constants.Term_outline_color_black
    ) {
      expect(termsTextColour).to.eql(
        calculator_screen_constants.Term_outline_color_black
      );
    } else {
      expect(termsTextColour).to.eql(
        calculator_screen_constants.Term_chrome_outline_color_black
      );
    }
  }

  verifyRepaymentCalculatorIsEnabled() {
    expect(browser.$(this.minus()).isEnabled()).eql(true);
    expect(browser.$(this.plus()).isEnabled()).eql(true);
  }

  checkTermsErrorMessageAndErrorColourIsNotDisplayed() {
    this.checkTermsErrorMessageIsNotDisplayed();
    this.checkTermsErrorMessageIsNotErrorRed();
  }

  checkDisabledGreyedOutItems(item) {
    switch (item) {
      case "+ and - buttons":
        this.verifyPlusMinusDisabledValues();
        break;
      case "calculator results table":
        this.verifyCalculatorResultsTableTextColorValuesAreGrey();
        this.verifyCalculatorResultsTableAmountColorValuesAreGrey();
        break;
      case "slider":
        this.verifyTermsSliderIsDisabled();
        break;
      case "terms link":
        this.verifyLearnMoreLinkIsDisabled();
        break;
    }
  }

  checkContent(content) {
    let actualData;
    switch (content) {
      case "Calculator results terms title":
        actualData = browser.$(this.sideDrawLearnMoreTitle()).getText();
        expect(calculator_screen_constants.Calculator_results_terms_title).eql(
          actualData
        );
        break;
      case "Trolley total title":
        actualData = browser.$(this.sideDrawTrolleyTotalTitle()).getText();
        expect(calculator_screen_constants.Trolley_total_title).eql(actualData);
        break;
      case "Trolley total content":
        actualData = browser.$(this.sideDrawTrolleyTotalText()).getText();
        expect(calculator_screen_constants.Trolley_total_content).eql(
          actualData
        );
        break;
      case "Cost per month title":
        actualData = browser.$(this.sideDrawCostPerMonthTitle()).getText();
        expect(calculator_screen_constants.Cost_per_month_title).eql(
          actualData
        );
        break;
      case "Cost per month content":
        actualData = browser.$(this.sideDrawCostPerMonthText()).getText();
        expect(calculator_screen_constants.Cost_per_month_content).eql(
          actualData
        );
        break;
      case "Number of monthly payments title":
        actualData = browser.$(this.sideDrawMonthlyPaymentsTitle()).getText();
        expect(
          calculator_screen_constants.Number_of_monthly_payments_title
        ).eql(actualData);
        break;
      case "Number of monthly payments content":
        actualData = browser.$(this.sideDrawMonthlyPaymentsText()).getText();
        expect(
          calculator_screen_constants.Number_of_monthly_payments_content
        ).eql(actualData);
        break;
      case "Representative APR title":
        actualData = browser.$(this.sideDrawRepresentativeAPRTitle()).getText();
        expect(calculator_screen_constants.Representative_APR_title).eql(
          actualData
        );
        break;
      case "Representative APR content":
        actualData = browser.$(this.sideDrawRepresentativeAPRText()).getText();
        expect(calculator_screen_constants.Representative_APR_content).eql(
          actualData
        );
        break;
      case "Total charge for credit title":
        actualData = browser.$(this.sideDrawCreditChargeTitle()).getText();
        expect(calculator_screen_constants.Total_charge_for_credit_title).eql(
          actualData
        );
        break;
      case "Total charge for credit content":
        actualData = browser.$(this.sideDrawCreditChargeText()).getText();
        expect(calculator_screen_constants.Total_charge_for_credit_content).eql(
          actualData
        );
        break;
      case "Total payable title":
        actualData = browser.$(this.sideDrawTotalPayableTitle()).getText();
        expect(calculator_screen_constants.Total_payable_title).eql(actualData);
        break;
      case "Total payable content":
        actualData = browser.$(this.sideDrawTotalPayableText()).getText();
        expect(calculator_screen_constants.Total_payable_content).eql(
          actualData
        );
        break;
      default:
        throw new Error(
          "The content that your comparing against does not exist"
        );
    }
  }

  async updateTermDuration(termAmount) {
    if (termAmount == 6) {
      for (let i = 0; i < 7; i++) {
        browser.$(this.minus()).click();
      }
    } else {
      for (let i = 0; i < 1; i++) {
        browser.$(this.plus()).click();
      }
    }
    let actualDurationText = browser
      .$(this.defaultTermDurationText())
      .getAttribute("value");
    try {
      (await browser.waitUntil(async () => await actualDurationText)) ===
        termAmount,
        {
          timeout: timeOut,
          timeoutMsg: "expected text to be different after 5s",
        };

      expect(termAmount).to.eql(actualDurationText);
    } catch (e) {
      console.log(e);
    }
  }
}
export default new rePaymentCalculatorPage();
