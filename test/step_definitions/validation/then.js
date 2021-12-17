import { Then } from "@cucumber/cucumber";
import yourFinancials from "../../pages/yourFinancials.page";
import yourOccupationPage from "../../pages/yourOccupation.page";
import aboutYouAndWhereYouLivePage from "../../pages/aboutYouAndWhereYouLive.page";
import checkMyApplicationPage from "../../pages/checkMyApplication.page";
import importantInformationPage from "../../pages/importantInformation.page";
import rePaymentCalculatorPage from "../../pages/rePaymentCalculator.page";
import yourQuotePage from "../../pages/yourQuote.page";
import yourNameAndAddressPage from "../../pages/yourNameAndAddress.page";
import verifyLeaveButton from "../../../support/common_assertions/verifyLeaveApplicationButton";
import verifyContinueApplicationButton from "../../../support/common_assertions/verifyContinueButton";
import docUSignPage from "../../pages/docUSign.page";
import errorScreenPage from "../../pages/errorScreen.page";
const financialData = require("../../../data/financial_details_constant");

Then(
  /^The customer will progress to the next screen - Your Finance Details$/,
  () => {
    yourFinancials.checkYourFinancialsTitle();
  }
);

Then(/^Occupation and Employer name fields will be greyed out$/, () => {
  yourOccupationPage.checkEmployerAndOccupationFieldsAreGreyedOut();
});

Then(/^Occupation field will be greyed out$/, () => {
  yourOccupationPage.checkOccupationFieldsAreGreyedOut();
});

Then(
  /^The customer will not be able to select populate Occupation field$/,
  () => {
    yourOccupationPage.checkOccupationFieldIsNotSelectable();
  }
);

Then(
  /^The customer will not be able to select populate Occupation and Employer name fields$/,
  () => {
    yourOccupationPage.checkOccupationFieldIsNotSelectable();
  }
);

Then(
  /^The customer will progress to next screen Finance details upon clicking the Continue button$/,
  () => {
    yourOccupationPage.continueToFinanceDetailsScreenAndVerifyPageTitle();
  }
);

Then(
  /^The customer will be presented with the validation message: (.*)$/,
  (message) => {
    yourOccupationPage.checkEmploymentStatusErrorDisplays(message);
  }
);

Then(/^The customer will not progress to next screen$/, () => {
  yourOccupationPage.verifyOccupationPageUrl();
});

Then(
  /^Customer will be constrained to capturing max 40 character length$/,
  () => {
    yourOccupationPage.verifyOccupationPageUrl();
  }
);

Then(
  /^Customer will be constrained to capturing max 40 character length$/,
  () => {
    yourOccupationPage.verifyOccupationPageUrl();
  }
);

Then(/^The customer will progress to the next screen Your Occupation$/, () => {
  yourOccupationPage.verifyOccupationPageUrl();
});

Then(
  /^The customer will be presented with the following validation error:(.*)$/,
  (message) => {
    aboutYouAndWhereYouLivePage.checkStatusPageValidationErrorDisplays(message);
  }
);

Then(
  /^The customer will not progress to the next screen Your Occupation$/,
  () => {
    aboutYouAndWhereYouLivePage.verifyYourDetailsAndWherePageUrl();
  }
);

Then(
  /^The customer will progress to the next screen - Check Your Application$/,
  () => {
    checkMyApplicationPage.verifyCheckMyApplicationPageUrl();
  }
);

Then(
  /^The customer will be presented with the error message:(.*)$/,
  (message) => {
    yourFinancials.checkStatusPageValidationErrorDisplays(message);
  }
);

Then(/^The customer will continue to Important information$/, () => {
  importantInformationPage.verifyImportantInformationPageUrl();
});

Then(/^The error validation message will disappear for (.*)$/, (message) => {
  aboutYouAndWhereYouLivePage.checkErrorValidationMessageDoesNotExist(message);
});

Then(/^the duration term will be set to (.*)$/, (defaultDuration) => {
  rePaymentCalculatorPage.verifyDurationTermsLengthText(defaultDuration);
});

Then(/^the minimum duration will be set to (.*)$/, (minimumTerm) => {
  rePaymentCalculatorPage.verifyMinimumTermLengthText(minimumTerm);
});

Then(/^the maximum duration will be set to (.*)$/, (maximumTerm) => {
  rePaymentCalculatorPage.verifyMaximumTermLengthText(maximumTerm);
});

Then(/^the trolley total will be set to (.*)$/, (trolleyAmount) => {
  rePaymentCalculatorPage.verifyTrolleyAmount(trolleyAmount);
});

Then(/^the cost per month will be set to (.*)$/, (trolleyAmount) => {
  rePaymentCalculatorPage.verifyCostPerMonthAmount(trolleyAmount);
});

Then(/^the representative APR will be set to (.*)$/, (aprValue) => {
  rePaymentCalculatorPage.verifyAprValue(aprValue);
});

Then(/^the number of payments will be set to (.*)$/, (aprValue) => {
  rePaymentCalculatorPage.verifyNumberOfPayments(aprValue);
});

Then(/^the total charge for credit will be set to (.*)$/, (totalCharge) => {
  rePaymentCalculatorPage.verifyTotalCreditCharge(totalCharge);
});

Then(/^the total payable will be (.*)$/, (totalPayable) => {
  rePaymentCalculatorPage.verifyTotalPayableAmount(totalPayable);
});

Then(/^The your occupation section will display (.*)$/, (occupation) => {
  checkMyApplicationPage.checkEmploymentStatus(occupation);
});

Then(/^The customer will be presented with the message: (.*)$/, (message) => {
  checkMyApplicationPage.checkEmploymentStatusErrorDisplays(message);
});

Then(/^The customer proceed to next screen - Your quote$/, () => {
  checkMyApplicationPage.checkYourQuotePageIsLoaded();
});

Then(/^The validation message and red box border disappears$/, () => {
  checkMyApplicationPage.checkEmployerErrorIsNotDisplayed();
});

Then(/^Leave application button is displayed$/, () => {
  verifyLeaveButton();
});

Then(/^Continue application button is displayed$/, () => {
  verifyContinueApplicationButton();
});

Then(/^The stage 3 holding page is displayed$/, () => {
  yourQuotePage.verifyTheHoldingPageDisplays();
});

Then(/^The stage 4 holding page is displayed$/, () => {
  yourQuotePage.verifyTheHoldingPageFourDisplays();
});

Then(/^The error message will appear$/, () => {
  yourQuotePage.verifyErrorMessage(true);
});

Then(/^The error message will not display$/, () => {
  yourQuotePage.verifyErrorMessage(false);
});

Then(/^The customer has populated all details with a low income$/, () => {
  yourFinancials.populateFields(
    financialData.Monthly_Mortgage_Rent,
    financialData.Low_Yearly_Income,
    financialData.Sort_Code_One,
    financialData.Sort_Code_Two,
    financialData.Sort_Code_Three,
    financialData.Bank_Account_Number,
    financialData.Bank_Month_Open,
    financialData.Bank_Year_Open
  );
});

Then(
  /^The phone number should be displayed in same input format as (.*)$/,
  (expMobileNumber) => {
    aboutYouAndWhereYouLivePage.checkPhoneNumberDisplayedInCorrectFormat(
      expMobileNumber
    );
  }
);

Then(
  /^The edit link will no longer be displayed for (.*) section$/,
  (section) => {
    checkMyApplicationPage.verifyEditLinkIsNotDisplayed(section);
  }
);

Then(
  /^The progress status bar shows the number (.*) and it's highlighted on (.*)$/,
  (barStatusNumber, screenType) => {
    switch (screenType) {
      case "about you screen":
        yourNameAndAddressPage.verifyProgressBarNumberIsHighlighted(
          barStatusNumber
        );
        break;
      case "your details screen":
        yourNameAndAddressPage.verifyProgressBarNumberIsHighlighted(
          barStatusNumber
        );
        break;
      case "occupation screen":
        yourOccupationPage.verifyProgressBarNumberIsHighlightedOccupationScreen(
          barStatusNumber
        );
        break;
      case "my application screen":
        checkMyApplicationPage.verifyProgressBarNumberIsHighlightedApplicationScreen(
          barStatusNumber
        );
        break;
      case "your quote screen":
        yourQuotePage.verifyProgressBarNumberIsHighlightedQuoteScreen(
          barStatusNumber
        );
        break;
      default:
        throw new IllegalStateException("Unexpected screen : " + screenType);
    }
  }
);

Then(
  /^The progress status bar shows the text (.*) and it's highlighted on (.*)$/,
  (barStatusText, screenType) => {
    switch (screenType) {
      case "about you screen":
        yourNameAndAddressPage.verifyProgressBarTextIsHighlighted(
          barStatusText
        );
        break;
      case "your details screen":
        yourNameAndAddressPage.verifyProgressBarTextIsHighlighted(
          barStatusText
        );
        break;
      case "occupation screen":
        yourOccupationPage.verifyProgressBarTextIsHighlightedOccupationScreen(
          barStatusText
        );
        break;
      case "my application screen":
        checkMyApplicationPage.verifyProgressBarTextIsHighlightedApplicationScreen(
          barStatusText
        );
        break;
      case "your quote screen":
        yourQuotePage.verifyProgressBarTextIsHighlightedQuoteScreen(
          barStatusText
        );
        break;
      default:
        throw new IllegalStateException("Unexpected screen : " + screenType);
    }
  }
);

Then(/^The customer can see your financials updated$/, () => {
  checkMyApplicationPage.verifyYourFinancialsUpdatedCorrectly();
});

Then(/^The customer will not progress$/, () => {
  checkMyApplicationPage.verifyReviewApplicationPageUrl();
});

Then(
  /^The repayment calculator displays validation message:(.*)$/,
  (error_message) => {
    rePaymentCalculatorPage.checkTermsErrorMessage(error_message);
  }
);

Then(/^The interactive calculator will re-enable$/, () => {
  rePaymentCalculatorPage.verifyRepaymentCalculatorIsEnabled();
});

Then(
  /^The customer will not progress past the check my application screen$/,
  () => {
    checkMyApplicationPage.verifyCheckMyApplicationPageUrl();
  }
);

Then(/^The done error message displays:(.*)$/, (expected_error) => {
  checkMyApplicationPage.verifyDoneErrorMessageIsDisplayed(expected_error);
});

Then(
  /^The Your details and Where you live section will display all fields unchanged$/,
  () => {
    checkMyApplicationPage.verifyAboutYou();
  }
);

Then(
  /^The your details section displays:(.*),(.*),(.*)$/,
  (email, mobile, dob) => {
    checkMyApplicationPage.verifyYourDetailsCustomerUpdates(email, mobile, dob);
  }
);

Then(
  /^The customer is presented with the Previous address field look up$/,
  () => {
    checkMyApplicationPage.verifyPreviousAddressFieldDisplayed();
  }
);

Then(
  /^The Previous address details including Time at previous address will disappear or be hidden from the customer$/,
  () => {
    checkMyApplicationPage.verifyPreviousAddressDetailsDisappear();
  }
);

Then(
  /^The Previous address details including Time at previous address will re appear$/,
  () => {
    checkMyApplicationPage.verifyPreviousAddressDetailsReappear();
  }
);

Then(/^The go to checkout button will be displayed$/, () => {
  yourFinancials.verifyGoToCheckOutButtonIsDisplayed();
});

Then(/^The customer is navigated to the docusign page$/, () => {
  docUSignPage.verifyDocuSignUrl();
});

Then(/^the error page displays$/, () => {
  errorScreenPage.verifyErrorPageUrl();
});
Then(/^The FAQ page for FPP is displays the the following url:(.*)$/, (url) => {
  importantInformationPage.verifyFAQUrlOpening(url);
});
