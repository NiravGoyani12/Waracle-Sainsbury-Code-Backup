import leaveApplicationButton from "../common_elements/leaveApplicationButton";

/**
 * Leave Application button for the FFP customer journey to search for
 */

export default () => {
  browser.$(leaveApplicationButton.leaveApplicationButton()).scrollIntoView();
  browser.$(leaveApplicationButton.leaveApplicationButton()).click();
  let url = browser.getUrl();
  let endpoint = url.slice(url.lastIndexOf("/") + 1);
  console.log(`Clicking continue button from ${endpoint} screen`);
};
