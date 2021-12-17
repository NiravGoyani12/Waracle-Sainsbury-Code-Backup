import continueApplicationButton from "../common_elements/continueApplicationButton";
/**
 * Continue Application button for the FFP customer journey to search for
 */

export default () => {
  //browser
  //  .$(continueApplicationButton.continueApplicationButton())
   // .waitForClickable();
  browser
    .$(continueApplicationButton.continueApplicationButton())
    .scrollIntoView();
  let url = browser.getUrl();
  let endpoint = url.slice(url.lastIndexOf("/") + 1);
  browser.$(continueApplicationButton.continueApplicationButton()).click();
  console.log(`Clicking continue button from ${endpoint} screen`);
};
