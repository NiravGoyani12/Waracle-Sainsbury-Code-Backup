import leaveApplicationModelButton from "../common_elements/leaveApplicationModalButton";
/**
 * Leave Application button for the FFP customer journey to search for
 */

export default () => {
  browser.$(leaveApplicationModelButton.leaveApplicationModelButton()).scrollIntoView();
  browser.$(leaveApplicationModelButton.leaveApplicationModelButton()).click();
};
