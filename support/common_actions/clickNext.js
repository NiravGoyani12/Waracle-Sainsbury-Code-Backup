import nextButton from "../common_elements/nextButton";
/**
 * The next for the FFP customer journey to search for
 */

export default () => {
 browser.$(nextButton.nextButtons()).scrollIntoView();
  browser.$(nextButton.nextButtons()).click();
};
