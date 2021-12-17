const side_drawer = require("../../data/present_offer_constants");
const expect = require("chai").expect;
const mainConfig = require("../config/main.conf");
const timeOut = 40000;

class PresentOfferPage {
  
  /*
   ** Define locators
   */

   congratulationTitle() {
    return "//*[contains(text(),'Congratulations!')]";
  }

  acceptedTitle() {
    return "//*[contains(text(),'You’ve been accepted.')]";
  }

   pleasedContent() {
    return '//p[contains(text()," approved your application subject to our final checks")]'
  }

   personalisedQuoteTitle() {
    return "h2";
  }

   trolleyTotalTitle() {
    return "//*[contains(text(),'Trolley total')]";
  }

  costPerMonthTitle() {
    return "//*[contains(text(),'Cost per month')]";
  }

   numberOfMonthlyPaymentsTitle() {
    return "//*[contains(text(),'Number of monthly payments')]";
  }

   aprTitle() {
    return "//*[contains(text(),'APR (Annual Percentage Rate)')]";
  }

   totalCreditChargeTitle() {
    return "//*[contains(text(),'Total charge for credit')]";
  }

  totalPayableTitle() {
    return "//*[contains(text(),'Total payable')]";
  }

  reviewSignDocumentsButton() {
    return "[data-testid='review-and-sign-documents']";
  }

  /**
   * Define page functions
   */

  verifyPresentOfferPageUrl() {
    let expected_url = "approval/accepted";
    browser.waitUntil(() => browser.getUrl().includes(expected_url), {
      timeout: timeOut,
      timeoutMsg: `The expected URL did not include the following endpoint ${expected_url}`,
    });
    expect(browser.getUrl()).contains(expected_url);
  }

  clickOnReviewAndSign() {
    browser.$(this.reviewSignDocumentsButton()).click();
    console.log("Clicking on review and sign button");
  }

  checkPresentOfferContent(content) {
    let actual_data;
    switch (content) {
      case "Congratulations!":
        actual_data = browser.$(this.congratulationTitle()).getText();
        expect(side_drawer.Congratulations_Title).eql(actual_data);
        break;
      case "You’ve been accepted":
        actual_data = browser.$(this.acceptedTitle()).getText();
        expect(side_drawer.Accepted_title).eql(actual_data);
        break;
      case "We’re pleased to say we’ve approved":
        actual_data = browser.$(this.pleasedContent()).getText();
        expect(side_drawer.Approved_content).eql(actual_data);
        break;
      case "Argos Monthly Payment Plan Personalised Quote":
        actual_data = browser.$(this.personalisedQuoteTitle()).getText();
        expect(side_drawer.Personalised_quote_title).eql(actual_data);
        break;
      case "Trolley total":
        actual_data = browser.$(this.trolleyTotalTitle()).getText();
        expect(side_drawer.Trolley_total_title).eql(actual_data);
        break;
      case "Cost per month":
        actual_data = browser.$(this.costPerMonthTitle()).getText();
        expect(side_drawer.Cost_per_month).eql(actual_data);
        break;
      case "Number of monthly payments":
        actual_data = browser.$(this.numberOfMonthlyPaymentsTitle()).getText();
        expect(side_drawer.Number_of_monthly_payments_title).eql(actual_data);
        break;
      case "APR (Annual Percentage Rate)":
        actual_data = browser.$(this.aprTitle()).getText();
        expect(side_drawer.APR).eql(actual_data);
        break;
      case "Total charge for credit":
        actual_data = browser.$(this.totalCreditChargeTitle()).getText();
        expect(side_drawer.Total_charge_for_credit_title).eql(actual_data);
        break;
      case "Total payable":
        actual_data = browser.$(this.totalPayableTitle()).getText();
        expect(side_drawer.Total_payable_title).eql(actual_data);
        break;
      case "Review and sign documents button":
        browser.$(this.reviewSignDocumentsButton()).scrollIntoView();
        expect(browser.$(this.reviewSignDocumentsButton()).isExisting()).eql(true);
        break;
      default:
        throw new Error(
          "The content that your comparing against does not exist"
        );
    }
  }
}
export default new PresentOfferPage();
