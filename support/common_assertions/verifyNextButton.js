import { assert } from "chai";
import nextButtons from "../common_elements/nextButton";

export default () => {
  const expected_NextButtonText = "Next";
  const nextButton = browser.$(nextButtons.nextButtons()).getText();
  if (
    (assert(nextButton.includes(expected_NextButtonText)),
    `The next button does not include the expected text ${expected_NextButtonText}`)
  ) {
    console.log(`The next button text is ${nextButton}`);
  }
};
