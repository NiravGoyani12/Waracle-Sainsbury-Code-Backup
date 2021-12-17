import { assert } from "chai";
import leaveApplicationButton from "../common_elements/leaveApplicationButton";

export default () => {
  const expected_LeaveButtonText = "Leave application";
  const leave_ButtonText =
      browser.$(leaveApplicationButton.leaveApplicationButton()).getText();
  if (
    (assert(
      leave_ButtonText.includes(expected_LeaveButtonText) 
    ),
    `The leave application button ${leave_ButtonText} does not include the expected text ${expected_LeaveButtonText}`)
  ) {
    console.log(
      `The leave button text is ${leave_ButtonText}`
    );
  }
};
