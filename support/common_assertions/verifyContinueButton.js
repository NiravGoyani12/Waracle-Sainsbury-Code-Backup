import { assert } from "chai";
import continueApplicationButton from "../common_elements/continueApplicationButton";

export default () => {
  const expected_ContinueButtonText = "Continue application";
  const continueApplicationButtonText =
      browser.$(continueApplicationButton.continueApplicationButton()).getText();
  if (
    (assert(
      continueApplicationButtonText.includes(expected_ContinueButtonText)
    ),
    `The continue application button does not include the expected text ${expected_ContinueButtonText}`)
  ) {
    console.log(
      `The continue application button text is ${continueApplicationButtonText}`
    );
  }
};
