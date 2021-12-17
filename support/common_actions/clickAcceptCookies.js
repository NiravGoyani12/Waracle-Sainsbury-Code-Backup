import acceptCookiesButton from "../common_elements/acceptCookiesButton";
/**
 * Accept cookies button for the FFP customer journey, button displays in modal at start of session
 */

export default () => {

  if (browser.$(acceptCookiesButton.acceptCookiesButton()).isExisting()) {
    browser.$(acceptCookiesButton.acceptCookiesButton()).click();
    console.log("Clicking tealium accept cookies button");
  }
  
}
