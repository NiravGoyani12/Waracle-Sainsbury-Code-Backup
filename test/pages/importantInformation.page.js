import { assert, expect } from "chai";
import important_info_constants from "../../data/important_informationpage_constants";
const timeOut = 10000;

class ImportantInformationPage {
  /**
   * Define page elements
   */

  title() {
    return "//*[text()='Your Argos Monthly Payment Plan']";
  }

  content() {
    return "//h2[contains(text(),'Is an Argos Monthly Payment Plan right for me?')]";
  }

  titleOne() {
    return "//*[contains(text(),'Payment Plans allow ')]";
  }

  contentOne() {
    return '//*[contains(text(),"Interest is charged from the day you sign")]';
  }

  titleTwo() {
    return '//*[contains(text(),"The interest rate on a Plan varies based on your personal")]';
  }
  contentTwo() {
    return '//*[contains(text(),"If you want to regularly change ")]';
  }

  titleThree() {
    return '//*[contains(text(),"Before signing the agreement, it’s important")]';
  }

  contentThree() {
    return '//*[contains(text(),"What else do I need to know?")]';
  }

  titleFour() {
    return '//*[contains(text(),"You can make an overpayment on this")]';
  }

  contentFour() {
    return '//*[contains(text(),"You have the right to pay off all of the money")]';
  }

  titleFive() {
    return '//*[contains(text(),"We may change the terms of the Plan agreement")]';
  }

  contentFive() {
    return '//*[contains(text(),"What if I can’t pay?")]';
  }

  contentTwelve() {
    return "//*[contains(text(),'Purchases on the Argos Monthly Payment Plan')]";
  }

  contentThirteen() {
    return "//*[contains(text(),'If you don’t make payments on your Argos Monthly Payment Plan')]";
  }

  contentFourteen() {
    return "//*[contains(text(),'I still have questions!')]";
  }

  contentFifteen() {
    return "//*[contains(text(),'If you have any questions')]";
  }
  frequentlyAskedQuestions() {
    return "[data-testid='faqs-link']";
  }

  /**
   * Define page functions
   */

  verifyImportantInformationPageUrl() {
    let expected_url = "/important-information";
    browser.waitUntil(() => browser.getUrl().includes(expected_url), {
      timeout: timeOut,
      timeoutMsg: `The expected URL did not include the following endpoint ${expected_url}`,
    });
    expect(browser.getUrl()).contains(expected_url);
  }

  checkImportantInformationContent(content) {
    let actual_data;
    switch (content) {
      case "Your Argos Monthly Payment":
        actual_data = browser.$(this.title()).getText();
        expect(important_info_constants.Heading).eql(actual_data);
        break;
      case "Is an Argos Monthly Payment Plan right for me?":
        actual_data = browser.$(this.content()).getText();
        expect(important_info_constants.One).eql(actual_data);
        break;
      case "Argos Monthly Payment Plans allow you to purchase":
        actual_data = browser.$(this.titleOne()).getText();
        expect(important_info_constants.Two).eql(actual_data);
        break;
      case "Interest is charged from the day you sign":
        actual_data = browser
          .$(this.contentOne())
          .getText()
          .replace(/(\r\n|\n|\r)/gm, "");
        expect(important_info_constants.Three).to.include(actual_data);
        break;
      case "The interest rate on a Plan varies based":
        actual_data = browser.$(this.titleTwo()).getText();
        expect(important_info_constants.Four).eql(actual_data);
        break;
      case "If you want to regularly change":
        actual_data = browser.$(this.contentTwo()).getText();
        expect(important_info_constants.Five).to.include(actual_data);
        break;
      case "Before signing the agreement, it’s important":
        actual_data = browser.$(this.titleThree()).getText();
        expect(important_info_constants.Six).eql(actual_data);
        break;
      case "What else do I need to know?":
        actual_data = browser
          .$(this.contentThree())
          .getText()
          .replace(/(\r\n|\n|\r)/gm, "");

        expect(important_info_constants.Seven).to.include(actual_data);
        break;
      case "You can make an overpayment on this Plan at any time":
        actual_data = browser.$(this.titleFour()).getText();
        expect(important_info_constants.Eight).eql(actual_data);
        break;
      case "You have the right to pay off all of the money":
        actual_data = browser.$(this.contentFour()).getText();
        expect(important_info_constants.Nine).eql(actual_data);
        break;
      case "We may change the terms of the Plan agreement":
        actual_data = browser.$(this.titleFive()).getText();
        expect(important_info_constants.Ten).eql(actual_data);
        break;
      case "What if I can’t pay?":
        actual_data = browser.$(this.contentFive()).getText();
        expect(important_info_constants.Eleven).eql(actual_data);
        break;
      case "Purchases on the Argos Monthly Payment Plan":
        actual_data = browser.$(this.contentTwelve()).getText().trimEnd();
        expect(important_info_constants.Twelve).include(actual_data);
        break;
      case "If you don’t make payments on your Argos Monthly Payment Plan":
        actual_data = browser.$(this.contentThirteen()).getText().trimEnd();
        expect(important_info_constants.Thirteen).include(actual_data);
        break;
      case "I still have questions!":
        actual_data = browser.$(this.contentFourteen()).getText().trimEnd();
        expect(important_info_constants.Fourteen).include(actual_data);
        break;
      case "If you have any questions or would like":
        actual_data = browser.$(this.contentFifteen()).getText().trimEnd();
        expect(important_info_constants.Fifteen).include(actual_data);
        break;
      default:
        throw new Error(
          "The content that your comparing against does not exist"
        );
    }
  }
  clickOnFAQ() {
    browser.$(this.frequentlyAskedQuestions()).scrollIntoView();
    browser.execute(
      "arguments[0].click();",
      browser.$(this.frequentlyAskedQuestions())
    );
    //browser.$(this.frequentlyAskedQuestions()).click()
  }

  verifyFAQUrlOpening(url) {
    const handle = browser.getWindowHandle();
    const handles = browser.getWindowHandles();
    console.log(handles)
    if (handles[1]!= handle) {
       browser.switchToWindow(browser.getWindowHandles()[1]);
      browser.waitUntil(() => browser.getUrl().includes(url), {
        timeout: timeOut,
        timeoutMsg: `The expected URL did not include the following endpoint ${url}`,
      });
     
      expect(browser.getUrl()).contains(url);
    }
  }
}
export default new ImportantInformationPage();
