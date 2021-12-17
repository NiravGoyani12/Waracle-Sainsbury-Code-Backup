import { assert, expect } from "chai";
const timeOut = 20000;

class IdentityQuestionPage {
  /**
   * Define page elements
   */

  identityPageTitle() {
    return "[data-test='component-heading-content']";
  }

  identityContentOne() {
    return ".hBrUMk.sc-kEqYlL > .hBrUMk.sc-kEqYlL";
  }

  questionTitle() {
    return ".section > .title";
  }

  answerOptionOne() {
    return "//*[text()='O2']";
  }
  answerOptionTwo() {
    return "//*[text()='EE']";
  }

  answerOptionThree() {
    return "//*[text()='Vodafone']";
  }

  answerOptionFour() {
    return "//*[text()='Three']";
  }

  answerOptionFive() {
    return "//*[text()='None of the above']";
  }
  /**
   * Define page functions
   **/

  verifyIdentityPageTitle(expected_title) {
    let expected_idiq_title_text = browser
      .$(this.identityPageTitle())
      .getText();
    console.log(expected_idiq_title_text);
    expect(expected_idiq_title_text).eql(expected_title);
  }

  verifyIdentityContentOne(expected_content) {
    let expected_idiq_content = browser.$(this.identityContentOne()).getText();
    let remove_page_title = expected_idiq_content.replace(
      "Identity questioning",
      ""
    );
    let remove_line_breaks_final_expected_text = remove_page_title.replace(
      /(\r\n|\n|\r)/gm,
      ""
    );
    console.log(remove_line_breaks_final_expected_text);
    expect(expected_content).eql(remove_line_breaks_final_expected_text);
  }

  verifyIDIQAnswerOptions(choice) {
    if (choice.includes("O2")) {
      expect(browser.$(this.answerOptionOne()).getText()).contains(choice);
    } else if (choice.includes("EE")) {
      expect(browser.$(this.answerOptionTwo()).getText()).contains(choice);
    } else if (choice.includes("Vodafone")) {
      expect(browser.$(this.answerOptionThree()).getText()).contains(choice);
    } else if (choice.includes("Three")) {
      expect(browser.$(this.answerOptionFour()).getText()).contains(choice);
    } else if (choice.includes("None of the above")) {
      expect(browser.$(this.answerOptionFive()).getText()).contains(choice);
    } else {
      throw new Error("The error is still displayed on screen please check");
    }
  }

  verifyQuestionTitle(expected_question_title) {
    let expected_idiq_title_text = browser.$(this.questionTitle()).getText();
    console.log(expected_idiq_title_text);
    expect(expected_idiq_title_text).eql(expected_question_title);
  }

  goToIdentityQuestionPage() {
    return browser.url("/idiq");
  }

  async verifyIdentityQuestionPagUrl() {
    let expected_url = "/IDIQ";
    await browser.waitUntil(() => browser.getUrl().includes(expected_url), {
      timeout: timeOut,
      timeoutMsg: `The expected URL did not include the following endpoint ${expected_url}`,
    });
    expect(browser.getUrl()).contains(expected_url);
  }
}
export default new IdentityQuestionPage();