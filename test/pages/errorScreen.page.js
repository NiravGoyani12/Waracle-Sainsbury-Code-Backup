let timeOut = 6000;
class ErrorScreenPage {
  /**
   * Define page elements
   */

  /**
   * Define page functions
   */

  verifyErrorPageUrl() {
    let expected_url = "error";
    browser.waitUntil(() => browser.getUrl().includes(expected_url), {
      timeout: timeOut,
      timeoutMsg: `The expected URL did not include the following endpoint ${expected_url}`,
    });
    expect(browser.getUrl()).contains(expected_url);
  }

}
export default new ErrorScreenPage();
