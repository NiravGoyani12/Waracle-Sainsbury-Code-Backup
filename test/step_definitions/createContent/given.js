import { Given } from "@cucumber/cucumber";
import whatCanYouExpectPage from "../../pages/whatCanYouExpect.page";
import helpers from "../../utils/helpers";

Given(/^The customer navigates to (.*) screen$/, (pageToNavigate) => {
  //This pause has been added a temp fix due to defect 2686 and 3028
  browser.pause(2000);
  helpers.navigate(pageToNavigate);
});

Given(/^I see Page Title as "What can you expect\?"$/, () => {
  whatCanYouExpectPage.verifyPageHeader();
});

Given(/^The customer is processing an FPP loan application$/, () => {
  //No action required as this step is not directly used
  console.log("The customer is processing an FPP application");
});
