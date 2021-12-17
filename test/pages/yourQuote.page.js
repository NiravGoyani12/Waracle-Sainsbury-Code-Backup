const side_drawer = require("../../data/yourquote_sidedraw_constants");
const your_quote = require("../../data/yourquote_constants");
import comparator from "../utils/helpers";
import { assert, expect } from "chai";
import progressBarData from "../../data/progressBar_constant";
import {
  your_quote_holding_message,
  your_quote_holding_message_two,
} from "../../data/yourquote_constants";
import continueApplicationButton from "../../support/common_elements/continueApplicationButton";
const timeOut = 30000;
class YourQuotePage {
  /**
   *** define locators
   */

  learnMoreLink() {
    return "#side-drawer-link";
  }

  sideDrawQuoteTermsTitle() {
    return "h4#component-drawer-drawer-title > strong";
  }

  sideDrawTrolleyTotalHeading() {
    return "//h5[contains(text(),'Trolley total:')]";
  }

  sideDrawTrolleyTotalSubText() {
    return "//p[contains(text(),'This is the total cost of the items you are buying')]";
  }

  sideDrawCostPerMonthTitle() {
    return "//h5[contains(text(),'Cost per month:')]";
  }

  sideDrawCostPerMonthSubText() {
    return "//p[contains(text(),'This is the payment you will make each month.')]";
  }
  sideDrawDNumberOfMonthlyTitle() {
    return "//h5[contains(text(),'Number of monthly payments:')]";
  }

  sideDrawDNumberOfMonthlySubText() {
    return "//p[contains(text(),'This is the number of months your plan will last a')]";
  }

  sideDrawDNumberOfMonthlySubText() {
    return "//p[contains(text(),'This is the number of months your plan will last a')]";
  }

  sideDrawAPRTitle() {
    return "//h5[contains(text(),'APR:')]";
  }

  sideDrawAPRSubText() {
    return "//p[contains(text(),'An APR (Annual Percentage Rate) is the interest ra')]";
  }
  sideDrawTotalChargeTitle() {
    return "//h5[contains(text(),'Total charge for credit:')]";
  }

  sideDrawTotalChargeTitle() {
    return "//h5[contains(text(),'Total charge for credit:')]";
  }

  sideDrawTotalChargeSubText() {
    return "//p[contains(text(),'This is the total amount of interest you will be c')]";
  }
  sideDrawTotalPayableTitle() {
    return "//h5[contains(text(),'Total payable:')]";
  }
  sideDrawTotalPayableSubText() {
    return "//*[@class='Drawerstyles__Content-sc-7kh0ae-5 pGBzR']/div/div/p[6]";
  }
  sideDrawCloseButton() {
    return "//button[contains(text(),'Close')]";
  }

  confirmationCheckBox() {
    return ".Checkboxstyles__Square-b61uwr-8.eyJnFO"
   //return "[data-testid='declaration-content']";
  }

  holdingPagePartialTextOne() {
    return "[data-test='component-heading-content']";
  }

  holdingPagePartialTextTwo() {
    return "//*[contains(text(),'…No need to refresh or press anything')]";
  }

  checkBoxErrorMessage() {
    return "form > div[role='alert']";
  }

  yourQuotePageTitle() {
    return "//h1[contains(text(),'Your quote')]";
  }

  loanProbability() {
    return "//*[contains(text(),'Loan probability')]";
  }

  loanImage() {
    return "[width='113']";
  }

  highProbabilityContent() {
    return "[data-testid='high-probability-content']";
  }

  lowProbabilityContent() {
    return "[data-testid='loan-probability-content-1']";
  }

  infoBannerContent() {
    return "//div[@id='root']/main//div[@role='status']//strong";
  }

  furtherInfo() {
    return "[data-testid='loan-probability-content-2']";
  }

  planPersonalisedQuoteSubText() {
    return "[data-test='mpp-quote-heading-content']";
  }

  trolleySubText() {
    return "//dt[contains(text(),'Trolley total')]";
  }

  costPerMonthSubText() {
    return "//dt[contains(text(),'Cost per month')]";
  }

  numberOfMonthlyPaymentsSubText() {
    return "//dt[contains(text(),'Number of monthly payments')]";
  }
  annualPercentageRateSubText() {
    return "//dt[contains(text(),'APR (Annual Percentage Rate)')]";
  }

  totalChargeForCreditSubText() {
    return "//dt[contains(text(),'Total charge for credit')]";
  }

  totalPayableSubText() {
    return "//dt[contains(text(),'Total payable')]";
  }

  creditSubjectSubText() {
    return "[data-testid='document-info-text']";
  }

  termsAndConditions() {
    return "p > button[role='button']";
  }

  termsAndConditionsContent() {
    return "[data-testid='paragraph-1']";
  }

  termsAndConditionsContentTwo() {
    return "[data-testid='paragraph-2']";
  }

  trolleyTotal() {
    return "[data-testid='loanAmount']";
  }

  costPerMonth() {
    return "[data-testid='costPerMonth']";
  }

  numberOfMonthlyPayment() {
    return "[data-testid='numberOfMonthlyPayments']";
  }

  annualPercentageRate() {
    return "[data-testid='aprRate']";
  }

  totalChargeForCredit() {
    return "[data-testid='totalInterest']";
  }

  totalPayable() {
    return "[data-testid='totalInterest']";
  }

  learnMoreLink() {
    return "[data-testid='side-drawer-link']";
  }

  progressBarNumQuoteScreen() {
    return "[data-test='component-progress-tracker-step-3'] div";
  }

  progressBarTextQuoteScreen() {
    return "[data-test='component-progress-tracker-step-3'] span";
  }

  /**
   * Define page functions
   */

  clickOnLearnMoreLink() {
    browser.$(this.learnMoreLink()).click();
  }
  clickOnConfirmationCheckBox() {
    browser
      .$(continueApplicationButton.continueApplicationButton())
      .scrollIntoView();
    browser.$(this.confirmationCheckBox()).click();
  }

  verifySideDrawCloseButtonDisplays() {
    expect(browser.$(this.sideDrawCloseButton()).isExisting()).eql(true);
  }

  verifyTheHoldingPageDisplays() {
    browser
      .$(this.holdingPagePartialTextOne())
      .waitForDisplayed({ timeout: timeOut });
    const holdingMessageOne = browser
      .$(this.holdingPagePartialTextOne())
      .getText();
    const holdingMessageTwo = browser
      .$(this.holdingPagePartialTextTwo())
      .getText();
    console.log(holdingMessageOne);
    console.log(holdingMessageTwo);
     expect(browser.$(this.holdingPagePartialTextOne()).isExisting()).eql(true);
     expect(browser.$(this.holdingPagePartialTextTwo()).isExisting()).eql(true);
    // expect(
    //   comparator.stringLengthComparator(
    //     holdingMessageOne,
    //     your_quote_holding_message
    //   )
    // ).equal(false);
    // expect(
    //   comparator.stringLengthComparator(
    //     holdingMessageTwo,
    //     your_quote_holding_message_two
    //   )
    // ).equal(false);
    expect(holdingMessageOne.replace(/(\r\n|\n|\r)/gm, " ")).eql(your_quote.your_quote_holding_message);
    expect(holdingMessageTwo.replace(/(\r\n|\n|\r)/gm, " ")).eql(your_quote.your_quote_holding_message_two);
  }

  verifyTheHoldingPageFourDisplays() {
    browser
        .$(this.holdingPagePartialTextOne())
        .waitForDisplayed({ timeout: timeOut });
    const holdingMessageOneStageFour = browser
        .$(this.holdingPagePartialTextOne())
        .getText();
    const holdingMessageTwoStageFour = browser
        .$(this.holdingPagePartialTextTwo())
        .getText();
    console.log(holdingMessageOneStageFour);
    console.log(holdingMessageTwoStageFour);
    expect(holdingMessageOneStageFour.replace(/(\r\n|\n|\r)/gm, " ")).eql(your_quote.your_quote_stage_four_holding_message);
    expect(holdingMessageTwoStageFour.replace(/(\r\n|\n|\r)/gm, " ")).eql(your_quote.your_quote_stage_four_holding_message_two);
  }

  verifyErrorMessage(condition) {
    if (condition === true) {
      expect(browser.$(this.checkBoxErrorMessage()).getText()).eql(
        your_quote.your_quote_error_message
      );
    } else if (condition === false) {
      browser.waitUntil(
        () =>
          browser.$(this.checkBoxErrorMessage()).getText() !=
          your_quote.your_quote_error_message
      ),
        {
          timeout: timeOut,
        };
      expect(browser.$(this.checkBoxErrorMessage()).getText()).to.not.eql(
        your_quote.your_quote_error_message
      );
    }
  }

  checkSideDrawContent(content) {
    let actual_data;
    switch (content) {
      case "Quote terms":
        actual_data = browser.$(this.sideDrawQuoteTermsTitle()).getText();
        expect(side_drawer.Quote_terms_title).eql(actual_data);
        break;
      case "Trolley total:":
        actual_data = browser.$(this.sideDrawTrolleyTotalHeading()).getText();
        expect(side_drawer.Trolley_total_heading).eql(actual_data);
        break;
      case "Trolley total content":
        actual_data = browser.$(this.sideDrawTrolleyTotalSubText()).getText();
        expect(side_drawer.Trolley_total_subtext).eql(actual_data);
        break;
      case "Cost per month:":
        actual_data = browser.$(this.sideDrawCostPerMonthTitle()).getText();
        expect(side_drawer.Cost_per_month_heading).eql(actual_data);
        break;
      case "Cost per month content":
        actual_data = browser.$(this.sideDrawCostPerMonthSubText()).getText();
        expect(side_drawer.Cost_per_month_subtext).eql(actual_data);
        break;
      case "Number of monthly payments:":
        actual_data = browser.$(this.sideDrawDNumberOfMonthlyTitle()).getText();
        expect(side_drawer.Number_of_monthly_payments_heading).eql(actual_data);
        break;
      case "Number of monthly payments content":
        actual_data = browser
          .$(this.sideDrawDNumberOfMonthlySubText())
          .getText();
        expect(side_drawer.Number_of_monthly_payments_subtext).eql(actual_data);
        break;
      case "APR:":
        actual_data = browser.$(this.sideDrawAPRTitle()).getText();
        expect(side_drawer.APR_heading).eql(actual_data);
        break;
      case "Representative APR content":
        actual_data = browser.$(this.sideDrawAPRSubText()).getText();
        expect(side_drawer.APR_subtext).eql(actual_data);
        break;
      case "Total charge for credit:":
        actual_data = browser.$(this.sideDrawTotalChargeTitle()).getText();
        expect(side_drawer.Total_charge_for_credit_heading).eql(actual_data);
        break;
      case "Total charge for credit content":
        actual_data = browser.$(this.sideDrawTotalChargeSubText()).getText();
        expect(side_drawer.Total_charge_for_credit).eql(actual_data);
        break;
      case "Total payable:":
        actual_data = browser.$(this.sideDrawTotalPayableTitle()).getText();
        expect(side_drawer.Total_payable_heading).eql(actual_data);
        break;
      case "Total payable content":
        actual_data = browser.$(this.sideDrawTotalPayableSubText()).getText();
        expect(side_drawer.Total_payable_subtext).eql(actual_data);
        break;
      default:
        throw new Error("Content does not exist");
    }
  }

  checkHighProbabilityContent(content) {
    let actual_data;
    switch (content) {
      case "Your quote":
        actual_data = browser.$(this.yourQuotePageTitle()).getText();
        expect(content).eql(actual_data);
        break;
      case "Loan probability":
        actual_data = browser.$(this.loanProbability()).getText();
        expect(content).eql(actual_data);
        browser.break;
      case "probability imagery":
        browser.$(this.loanImage()).waitForDisplayed({ timeout: timeOut });
        expect(browser.$(this.loanImage()).isExisting()).eql(true);
        break;
      case "accept content":
        actual_data = browser.$(this.highProbabilityContent()).getText();
        expect(your_quote.your_quote_high_probability_content).eql(actual_data);
        break;
      case "refuse content":
        actual_data = browser.$(this.lowProbabilityContent()).getText();
        expect(your_quote.your_quote_low_probability_content).eql(actual_data);
        break;
      case "info banner":
        actual_data = browser.$(this.infoBannerContent()).getText();
        expect(your_quote.your_quote_info_banner).eql(actual_data);
        break;
      case "further info":
        actual_data = browser.$(this.furtherInfo()).getText();
        expect(your_quote.your_quote_info).eql(actual_data);
        break;
      case "Argos Monthly Payment Plan Personalised Quote":
        actual_data = browser.$(this.planPersonalisedQuoteSubText()).getText();
        expect(content).eql(actual_data);
        break;
      case "Trolley total":
        actual_data = browser.$(this.trolleySubText()).getText();
        expect(content).eql(actual_data);
        break;
      case "Trolley total amount":
        expect(browser.$(this.trolleyTotal()).isExisting()).eql(true);
        break;
      case "Cost per month":
        actual_data = browser.$(this.costPerMonthSubText()).getText();
        expect(content).eql(actual_data);
        break;
      case "Cost per month amount":
        expect(browser.$(this.costPerMonth()).isExisting()).eql(true);
        break;
      case "Number of monthly payments":
        actual_data = browser
          .$(this.numberOfMonthlyPaymentsSubText())
          .getText();
        expect(content).eql(actual_data);
        break;
      case "Number of monthly payments amount":
        expect(browser.$(this.numberOfMonthlyPayment()).isExisting()).eql(true);
        break;
      case "APR (Annual Percentage Rate)":
        actual_data = browser.$(this.annualPercentageRateSubText()).getText();
        expect(content).eql(actual_data);
        break;
      case "APR amount":
        expect(browser.$(this.annualPercentageRate()).isExisting()).eql(true);
        break;
      case "Total charge for credit":
        actual_data = browser.$(this.totalChargeForCreditSubText()).getText();
        expect(content).eql(actual_data);
        break;
      case "Total charge for credit amount":
        expect(browser.$(this.totalChargeForCreditSubText()).isExisting()).eql(
          true
        );
        break;
      case "Total payable":
        actual_data = browser.$(this.totalPayableSubText()).getText();
        expect(content).eql(actual_data);
        break;
      case "Total payable amount":
        expect(browser.$(this.totalPayable()).isExisting()).eql(true);
        break;
      case "Learn more link":
        expect(browser.$(this.learnMoreLink()).isExisting()).eql(true);
        break;
      case "Credit subject to status":
        expect(browser.$(this.creditSubjectSubText()).isExisting()).eql(true);
        break;
      case "Credit subject to status text":
        actual_data = browser.$(this.creditSubjectSubText()).getText();
        expect(your_quote.your_quote_credit_message).eql(actual_data);
        break;
      case "T&Cs apply":
        expect(browser.$(this.termsAndConditions()).isExisting()).eql(true);
        break;
      case "Checkbox content":
        actual_data = browser.$(this.termsAndConditionsContent()).getText();
        expect(your_quote.your_quote_terms_conditions_content).eql(actual_data);
        break;
      case "Checkbox content two":
        actual_data = browser.$(this.termsAndConditionsContentTwo()).getText();

        expect(your_quote.your_quote_terms_conditions_content_two).eql(
          actual_data.replace(/(\r\n|\n|\r)/gm, "").trimEnd()
        );
        break;
      default:
        throw new Error("Content does not exist");
    }
  }

  verifyProgressBarNumberIsHighlightedQuoteScreen(expBarStatusNumber) {
    let actualProgressBarNumberColor = browser
      .$(this.progressBarNumQuoteScreen())
      .getCSSProperty("background")["value"];
    let expProgressBarNumberBackgroundColour =
      progressBarData.progressBarData[0];
    expect(actualProgressBarNumberColor).to.includes(
      expProgressBarNumberBackgroundColour
    );

    let actualProgressBarNum = browser
      .$(this.progressBarNumQuoteScreen())
      .getText();
    expect(actualProgressBarNum).to.eql(expBarStatusNumber);
  }

  verifyProgressBarTextIsHighlightedQuoteScreen(expBarStatusText) {
    let actualProgressBarTextColor = browser
      .$(this.progressBarTextQuoteScreen())
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
      .$(this.progressBarTextQuoteScreen())
      .getText();
    expect(actualProgressBarText).to.eql(expBarStatusText);
  }
}

export default new YourQuotePage();
