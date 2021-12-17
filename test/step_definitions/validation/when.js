import { When } from "@cucumber/cucumber";
import yourOccupationPage from "../../pages/yourOccupation.page";
import aboutYouAndWhereYouLive from "../../pages/aboutYouAndWhereYouLive.page";
import yourFinancials from "../../pages/yourFinancials.page";
import clickContinueButton from "../../../support/common_actions/clickContinueApplication";
import clickAcceptCookies from "../../../support/common_actions/clickAcceptCookies";
import clickNextButton from "../../../support/common_actions/clickNext";
import rePaymentCalculatorPage from "../../pages/rePaymentCalculator.page";
import checkMyApplicationPage from "../../pages/checkMyApplication.page";
import myQuotePage from "../../pages/yourQuote.page";
import identityQuestioningPage from "../../pages/identityQuestioning.page";
import loanApplicationReferenceGenerator from "../../utils/loanApplicationReferenceGenerator";
import helpers from "../../utils/helpers";
import presentOfferPage from "../../pages/presentOffer.page";
import itsTimeToSignPage from "../../pages/itsTimeToSign.page";
import docUSignPage from "../../pages/docUSign.page";
import importantInformationPage from "../../pages/importantInformation.page";
import leaveApplicationModal from "../../../support/common_modal/leaveApplicationModal";
const nationalityData = require("../../../data/nationality_constants");
const maritalData = require("../../../data/marital_status_constants");
const dependentsData = require("../../../data/dependents_constants");
const residentialData = require("../../../data/residential_constants");
const occupation = require("../../../data/occupation_constants");
const employmentStatus = require("../../../data/employment_status_constants");
const aboutYou = require("../../../data/about_you_constant");
const financialData = require("../../../data/financial_details_constant");

When(
  /^The customer has populated all field inputs and drop downs fields Employment status Occupation$/,
  () => {
    yourOccupationPage.populateAllMandatoryOccupationFields(
      employmentStatus.employment_status[1],
      occupation.occupation[8]
    );
  }
);

When(/^The customer has populated Employment status as unemployed$/, () => {
  yourOccupationPage.selectEmploymentStatus("Unemployed");
});

When(/^The customer clicks on continue application button$/, () => {
  clickContinueButton();
});

When(/^The customer selects (.*) as Employment status$/, (employment) => {
  yourOccupationPage.selectEmploymentStatus(employment);
});

When(/^The customer leaves Employer field blank$/, () => {
  yourOccupationPage.clearEmployerName();
});

When(/^The customer leaves Occupation field blank after selecting it$/, () => {
  yourOccupationPage.selectOccupation("Please select");
});

When(/^The customer selects Occupation$/, () => {
  yourOccupationPage.selectOccupation(occupation.occupation[7]);
});

When(
  /^The customer clicks on Continue application button or navigates away from the drop down$/,
  () => {
    clickContinueButton();
  }
);

When(/^Employment status is not Retired or Student$/, () => {
  yourOccupationPage.selectEmploymentStatus(
    employmentStatus.employment_status[1]
  );
});

When(
  /^The customer attempts to input invalid characters into the Employer field$/,
  () => {
    yourOccupationPage.enterEmployerName("&&&$$$");
  }
);

When(
  /^The customer has populated all field inputs and drop downs fields$/,
  () => {
    aboutYouAndWhereYouLive.populatedAllMainPageFields(
      aboutYou.Email,
      aboutYou.Mobile,
      aboutYou.Day,
      aboutYou.Month,
      aboutYou.Year,
      nationalityData.nationality[1],
      maritalData.marital_status[1],
      dependentsData.dependents[1],
      residentialData.residential[1],
      2,
      2
    );
  }
);

When(
  /^The customer has populated Years and Months current address as 0$/,
  () => {
    aboutYouAndWhereYouLive.populatedAllMainPageFields(
      aboutYou.Email,
      aboutYou.Mobile,
      aboutYou.Day,
      aboutYou.Month,
      aboutYou.Year,
      nationalityData.nationality[1],
      maritalData.marital_status[1],
      dependentsData.dependents[1],
      residentialData.residential[1],
      0,
      0
    );
  }
);

When(/^The customer input email address in an incorrect format$/, () => {
  aboutYouAndWhereYouLive.populatedAllMainPageFields(
    aboutYou.Invalid_Email,
    aboutYou.Mobile,
    aboutYou.Day,
    aboutYou.Month,
    aboutYou.Year,
    nationalityData.nationality[1],
    maritalData.marital_status[1],
    dependentsData.dependents[1],
    residentialData.residential[1],
    0,
    0
  );
});

When(
  /^The customer as input mobile phone number in an incorrect format$/,
  () => {
    aboutYouAndWhereYouLive.populatedAllMainPageFields(
      aboutYou.Email,
      aboutYou.Invalid_Mobile,
      aboutYou.Day,
      aboutYou.Month,
      aboutYou.Year,
      nationalityData.nationality[1],
      maritalData.marital_status[1],
      dependentsData.dependents[1],
      residentialData.residential[1],
      2,
      2
    );
  }
);

When(
  /^The customer enters mobile number with spaces within the field as (.*)$/,
  (mobileNumber) => {
    aboutYouAndWhereYouLive.populatedAllMainPageFields(
      aboutYou.Email,
      mobileNumber,
      aboutYou.Day,
      aboutYou.Month,
      aboutYou.Year,
      nationalityData.nationality[1],
      maritalData.marital_status[1],
      dependentsData.dependents[2],
      residentialData.residential[1],
      4,
      0
    );
  }
);

When(/^The customer enters their details using the bypass strategy$/, () => {
  aboutYouAndWhereYouLive.populatedAllMainPageFields(
    aboutYou.Email,
    aboutYou.Mobile,
    aboutYou.ByPass_Day,
    aboutYou.ByPass_Month,
    aboutYou.ByPass_Year,
    nationalityData.nationality[1],
    maritalData.marital_status[1],
    dependentsData.dependents[2],
    residentialData.residential[1],
    4,
    0
  );
});

When(
  /^The customer has populated all fields with time at current address being less than 2 years for my application screen content validation$/,
  () => {
    aboutYouAndWhereYouLive.populatedAllMainPageFields(
      aboutYou.Email,
      aboutYou.Mobile,
      aboutYou.Day,
      aboutYou.Month,
      aboutYou.Year,
      nationalityData.nationality[1],
      maritalData.marital_status[1],
      dependentsData.dependents[2],
      residentialData.residential[1],
      1,
      0
    );
  }
);

When(
  /^The customer enters their DOB equating to less than 18 years old$/,
  () => {
    aboutYouAndWhereYouLive.populatedAllMainPageFields(
      aboutYou.Email,
      aboutYou.Mobile,
      aboutYou.Day,
      aboutYou.Month,
      aboutYou.OverAge_Year,
      nationalityData.nationality[1],
      maritalData.marital_status[1],
      dependentsData.dependents[1],
      residentialData.residential[1],
      2,
      2
    );
  }
);

When(
  /^The customer enters their DOB 83 or older at the end of their loan term$/,
  () => {
    aboutYouAndWhereYouLive.populatedAllMainPageFields(
      aboutYou.Email,
      aboutYou.Mobile,
      aboutYou.Day,
      aboutYou.Month,
      aboutYou.OverAge_Year,
      nationalityData.nationality[1],
      maritalData.marital_status[1],
      dependentsData.dependents[1],
      residentialData.residential[1],
      2,
      2
    );
  }
);

When(
  /^The customer has populated all field inputs and drop downs fields correctly$/,
  () => {
    yourFinancials.populateFields(
      financialData.Monthly_Mortgage_Rent,
      financialData.Yearly_Income,
      financialData.Sort_Code_One,
      financialData.Sort_Code_Two,
      financialData.Sort_Code_Three,
      financialData.Bank_Account_Number,
      financialData.Bank_Month_Open,
      financialData.Bank_Year_Open
    );
  }
);

When(
  /^The customer has populated all field inputs and drop downs fields correctly for holding page journey$/,
  () => {
    yourFinancials.populateFields(
      financialData.Monthly_Mortgage_Rent,
      financialData.Yearly_Income,
      financialData.Sort_Code_One,
      financialData.Sort_Code_Two,
      financialData.Sort_Code_Three,
      financialData.Bank_Account_Number,
      financialData.Bank_Month_Open,
      financialData.Bank_Year_Open
    );
  }
);

When(
  /^The customer has entered leading zero bank account number and drop downs fields correctly$/,
  () => {
    yourFinancials.populateFields(
      financialData.Monthly_Mortgage_Rent,
      financialData.Yearly_Income,
      financialData.Sort_Code_One,
      financialData.Sort_Code_Two,
      financialData.Sort_Code_Three,
      financialData.Bank_Account_Number,
      financialData.Bank_Month_Open,
      financialData.Bank_Year_Open
    );
  }
);

When(
  /^The customer has populated only mandatory field inputs and drop downs fields$/,
  () => {
    yourFinancials.populateFields(
      financialData.Monthly_Mortgage_Rent,
      financialData.Yearly_Income,
      financialData.Sort_Code_One,
      financialData.Sort_Code_Two,
      financialData.Sort_Code_Three,
      financialData.Bank_Account_Number,
      financialData.Bank_Month_Open,
      financialData.Bank_Year_Open
    );
  }
);

When(
  /^The customer has input their Yearly income before tax is £100,000 or more$/,
  () => {
    yourFinancials.populateFields(
      financialData.Monthly_Mortgage_Rent,
      financialData.High_Yearly_Income,
      financialData.Sort_Code_One,
      financialData.Sort_Code_Two,
      financialData.Sort_Code_Three,
      financialData.Bank_Account_Number,
      financialData.Bank_Month_Open,
      financialData.Bank_Year_Open
    );
  }
);

When(
  /^The customer input a numerical value for Month bank account is opened as being >12$/,
  () => {
    yourFinancials.populateFields(
      financialData.Monthly_Mortgage_Rent,
      financialData.Yearly_Income,
      financialData.Sort_Code_One,
      financialData.Sort_Code_Two,
      financialData.Sort_Code_Three,
      financialData.Bank_Account_Number,
      financialData.Invalid_Bank_Month_Open,
      financialData.Bank_Year_Open
    );
  }
);

When(
  /^The customer inputs monthly mortgage rent as being greater than 999,999$/,
  () => {
    yourFinancials.populateFields(
      financialData.Large_Monthly_Mortgage_Rent,
      financialData.Yearly_Income,
      financialData.Sort_Code_One,
      financialData.Sort_Code_Two,
      financialData.Sort_Code_Three,
      financialData.Bank_Account_Number,
      financialData.Bank_Month_Open,
      financialData.Bank_Year_Open
    );
  }
);

When(
  /^The customer inputs annual income as being greater than 9,999,999$/,
  () => {
    yourFinancials.populateFields(
      financialData.Large_Monthly_Mortgage_Rent,
      financialData.Invalid_Yearly_Income,
      financialData.Sort_Code_One,
      financialData.Sort_Code_Two,
      financialData.Sort_Code_Three,
      financialData.Bank_Account_Number,
      financialData.Bank_Month_Open,
      financialData.Bank_Year_Open
    );
  }
);

// When(
//   /^The customer inputs Other household income as being greater than 9,999,999$/,
//   () => {
//     yourFinancials.populatedAllMandatoryFields(
//       "1000",
//       "10000000",
//       "11",
//       "11",
//       "11",
//       "12375677",
//       "12",
//       "2005"
//     );
//   }
// );

When(
  /^The customer inputs the year their bank account was opened as in the future$/,
  () => {
    yourFinancials.populateFields(
      financialData.Monthly_Mortgage_Rent,
      financialData.Yearly_Income,
      financialData.Sort_Code_One,
      financialData.Sort_Code_Two,
      financialData.Sort_Code_Three,
      financialData.Bank_Account_Number,
      financialData.Bank_Month_Open,
      financialData.Future_Bank_Year_Open
    );
  }
);

When(/^The customer clicks on Next application button$/, () => {
  clickNextButton();
});

When(
  /^The customer has populated all fields with time at current address being less than 2 years$/,
  () => {
    aboutYouAndWhereYouLive.populateFields(
      aboutYou.Email,
      aboutYou.Mobile,
      aboutYou.Day,
      aboutYou.Month,
      aboutYou.Year,
      nationalityData.nationality[1],
      maritalData.marital_status[1],
      dependentsData.dependents[1],
      residentialData.residential[1],
      1,
      1
    );
  }
);

When(/^The customer will be able to capture their Previous address$/, () => {
  aboutYouAndWhereYouLive.setPreviousAddressDetails(
    aboutYou.House_Name,
    aboutYou.House_Number,
    aboutYou.Street_Name,
    aboutYou.Town,
    aboutYou.County,
    aboutYou.Postcode,
    1,
    1
  );
});

When(
  /^The customer completes mandatory previous address fields only and leaves (.*) blank$/,
  (field) => {
    aboutYouAndWhereYouLive.setPreviousAddressDetailsForOptionalFields(field);
  }
);

When(
  /^The customer inputs incorrect (.*) mandatory field in previous address$/,
  (field) => {
    aboutYouAndWhereYouLive.setPreviousAddressDetailsWithIncorrectFormat(field);
  }
);

When(
  /^The customer has populated Years and Months previous address as 0$/,
  () => {
    aboutYouAndWhereYouLive.setPreviousAddressDetails(
      aboutYou.House_Name,
      aboutYou.House_Number,
      aboutYou.Street_Name,
      aboutYou.Town,
      aboutYou.County,
      aboutYou.Postcode,
      0,
      0
    );
  }
);

When(/^The customer leaves (.*) mandatory field blank$/, (field) => {
  aboutYouAndWhereYouLive.populatePreviousAddressDetailsWithBlanks(field);
});

When(
  /^The customer corrects the error against the mandatory (.*)$/,
  (field) => {
    aboutYouAndWhereYouLive.correctPreviousAddressFieldError(field);
  }
);

When(/^the customer changes the duration term to (.*)$/, (durationTerm) => {
  rePaymentCalculatorPage.updateTermDuration(durationTerm);
});

When(/^The customer clicks to edit Your Occupation section$/, () => {
  checkMyApplicationPage.clickOnOccupationEditLink();
});

When(/^The customer clicks to edit About you section$/, () => {
  checkMyApplicationPage.clickOnAboutYouEditLink();
});

When(/^The customer has edited Employment status field$/, () => {
  checkMyApplicationPage.selectEmploymentStatus("Full Time Employed");
});

When(/^The customer has edited Occupation status field$/, () => {
  checkMyApplicationPage.selectOccupation("Administration");
});

When(/^The customer has edited The Employer field$/, () => {
  checkMyApplicationPage.enterEmployerName("Waracle");
});

When(
  /^The customer has edited The Employer field with invalid characters$/,
  () => {
    checkMyApplicationPage.enterEmployerName("&");
  }
);
When(/^The customer clicks on done button$/, () => {
  checkMyApplicationPage.clickOnDoneButton();
});

When(/^The done button will no longer be displayed$/, () => {
  checkMyApplicationPage.verifyDoneButtonIsNotDisplayed();
});

When(/^The edit link for the ‘Your occupation’ section will re-appear$/, () => {
  checkMyApplicationPage.verifyEditLinkIsDisplayed();
});

When(/^The edit link for the Your financials section will re-appear$/, () => {
  checkMyApplicationPage.verifyYourFinancialsEditLinkIsDisplayed();
});

When(/^The customer edits Employment status to (.*)$/, (status) => {
  checkMyApplicationPage.selectEmploymentStatus(status);
});

When(/^The customer edits Employer field to be blank$/, () => {
  checkMyApplicationPage.enterEmployerName("");
});

When(/^The customer will not be able to progress$/, () => {
  checkMyApplicationPage.verifyCheckMyApplicationPageUrl();
});

When(/^The validation message and red box border will disappear$/, () => {
  checkMyApplicationPage.checkEmployerErrorIsNotDisplayed();
});

When(/^The customer clicks on accept cookies button$/, () => {
  clickAcceptCookies();
});

When(/^The customer click on the my quote side drawer link$/, () => {
  checkMyApplicationPage.checkEmployerErrorIsNotDisplayed();
});

When(/^The customer clicks on accept terms check box$/, () => {
  myQuotePage.clickOnConfirmationCheckBox();
});

When(/^The idiq page is displayed$/, () => {
  identityQuestioningPage.verifyIdentityQuestionPagUrl();
});

When(
  /^The customer has cleared the month when their bank account was opened$/,
  () => {
    checkMyApplicationPage.clearTheMonthField();
  }
);

When(
  /^The customer has edited the sort code to be an invalid sort code$/,
  () => {
    yourFinancials.populateFields(
      financialData.Monthly_Mortgage_Rent,
      financialData.Yearly_Income,
      financialData.Invalid_Sort_Code_Three,
      financialData.Invalid_Sort_Code_Three,
      financialData.Invalid_Sort_Code_Three,
      financialData.Bank_Account_Number,
      financialData.Bank_Month_Open,
      financialData.Bank_Year_Open
    );
  }
);

When(
  /^The customer has edited by inputting an invalid bank account number$/,
  () => {
    yourFinancials.populateFields(
      financialData.Monthly_Mortgage_Rent,
      financialData.Yearly_Income,
      financialData.Sort_Code_One,
      financialData.Sort_Code_Two,
      financialData.Sort_Code_Three,
      financialData.Invalid_Bank_Account,
      financialData.Bank_Month_Open,
      financialData.Bank_Year_Open
    );
  }
);

When(/^The customer inputs a value:(.*)$/, (termAmount) => {
  rePaymentCalculatorPage.updateTerm(termAmount);
});

When(/^The idiq page is displayed$/, () => {
  identityQuestioningPage.verifyIdentityQuestionPagUrl();
});

When(/^The following item is greyed out disabled:(.*)$/, (item) => {
  rePaymentCalculatorPage.checkDisabledGreyedOutItems(item);
});

When(
  /^The customer has edited by inputting sort code with incorrect format$/,
  () => {
    yourFinancials.populatedFields(
      financialData.Monthly_Mortgage_Rent,
      financialData.Yearly_Income,
      financialData.Sort_Code_One,
      financialData.Sort_Code_Two,
      financialData.Invalid_Sort_Code_Three,
      financialData.Bank_Account_Number,
      financialData.Bank_Month_Open,
      financialData.Bank_Year_Open
    );
  }
);

When(
  /^The customer has edited by inputting sort code with blank value$/,
  () => {
    yourFinancials.populateFields(
      financialData.Large_Monthly_Mortgage_Rent,
      financialData.Invalid_Yearly_Income,
      null,
      financialData.Sort_Code_Two,
      financialData.Invalid_Sort_Code_Three,
      financialData.Bank_Account_Number,
      financialData.Invalid_Bank_Month_Open,
      financialData.Future_Bank_Year_Open
    );
  }
);

When(
  /^The validation message will disappear along with the red enabled field box$/,
  () => {
    rePaymentCalculatorPage.checkTermsErrorMessageAndErrorColourIsNotDisplayed();
  }
);

When(
  /^The customer has populated current Years and Months at current address as (.*),(.*)$/,
  (years, months) => {
    checkMyApplicationPage.selectTimeAddressCurrentYearsMonths(years, months);
  }
);

When(
  /^The customer has populated previous Years and Months at previous address as (.*),(.*)$/,
  (years, months) => {
    checkMyApplicationPage.selectTimeAddressPreviousYearsMonths(years, months);
  }
);

When(/^The customer inputs email address as:(.*)$/, (email) => {
  checkMyApplicationPage.enterEmailAddress(email);
});

When(/^The customer inputs mobile number as:(.*)$/, (mobile) => {
  checkMyApplicationPage.enterMobileNumber(mobile);
});

When(/^The customer inputs dob as:(.*),(.*),(.*)$/, (dd, mm, yyyy) => {
  checkMyApplicationPage.enterDateOfBirth(dd, mm, yyyy);
});

When(
  /^The customer has edited by inputting bank account number with incorrect format$/,
  () => {
    yourFinancials.populateFields(
      financialData.Monthly_Mortgage_Rent,
      financialData.Yearly_Income,
      financialData.Sort_Code_One,
      financialData.Sort_Code_Two,
      financialData.Sort_Code_Three,
      financialData.Invalid_Bank_Account_Length,
      financialData.Bank_Month_Open,
      financialData.Bank_Year_Open
    );
  }
);

When(
  /^The customer will be able to proceed with their FPP application\.$/,
  () => {
    checkMyApplicationPage.verifyCheckMyApplicationPageUrl();
  }
);

When(
  /^The customer has corrected the error of monthly mortgage rent field whilst their are still in the field$/,
  () => {
    checkMyApplicationPage.editMonthlyMortgageRentField(302);
  }
);

When(
  /^The customer has corrected the error of bank sort code field whilst their are still in the field$/,
  () => {
    checkMyApplicationPage.editBankSortCodeField(12);
  }
);

When(
  /^The customer input a numerical value for the year their bank account was opened before DOB$/,
  () => {
    yourFinancials.populateFields(
      financialData.Monthly_Mortgage_Rent,
      financialData.Yearly_Income,
      financialData.Sort_Code_One,
      financialData.Sort_Code_Two,
      financialData.Sort_Code_Three,
      financialData.Bank_Account_Number,
      financialData.Bank_Month_Open,
      financialData.Past_Bank_Year_Open
    );
  }
);

When(
  /^The customer has edited monthly mortgage rent within the field as (.*)$/,
  (monthly_mortgage_rent) => {
    checkMyApplicationPage.editMonthlyMortgageRentField(monthly_mortgage_rent);
  }
);

When(
  /^Details edited in the Previous address details will have been persisted including Time at previous address$/,
  () => {
    aboutYouAndWhereYouLive.setPreviousAddressDetails(
      aboutYou.House_Name,
      aboutYou.House_Number,
      aboutYou.Street_Name,
      aboutYou.Town,
      aboutYou.County,
      aboutYou.Postcode,
      1,
      1
    );
  }
);
When(/^The customer has input non existing bank account number$/, () => {
  yourFinancials.populateFields(
    financialData.Monthly_Mortgage_Rent,
    financialData.Yearly_Income,
    financialData.Sort_Code_One,
    financialData.Sort_Code_Two,
    financialData.Sort_Code_Three,
    financialData.Non_Existing_Bank_Account,
    financialData.Bank_Month_Open,
    financialData.Bank_Year_Open
  );
});

When(/^The customer has input non existing sort code$/, () => {
  yourFinancials.populateFields(
    financialData.Monthly_Mortgage_Rent,
    financialData.Yearly_Income,
    financialData.Non_Existing_Sort_Code_One,
    financialData.Non_Existing_Sort_Code_Two,
    financialData.Non_Existing_Sort_Code_Three,
    financialData.Bank_Account_Number,
    financialData.Bank_Month_Open,
    financialData.Bank_Year_Open
  );
});

When(/^I get the loan id$/, () => {
  loanApplicationReferenceGenerator.getLoanId();
});

When(/^I post a decision ready call$/, () => {
  loanApplicationReferenceGenerator.postLoanId();
});

When(/^I wait for (.*) seconds$/, (time) => {
  helpers.timeToWait(time);
});

When(/^I intercept XHR calls$/, () => {
  browser.setupInterceptor();
});

When(/^The customer clicks on review and sign button$/, () => {
  presentOfferPage.clickOnReviewAndSign();
});

When(/^The customer clicks on continue to docusign$/, () => {
  itsTimeToSignPage.clickContinueToDocuSign();
});

When(/^I click on the docusign continue button$/, () => {
  docUSignPage.clickContinueBanner();
});

When(/^I sign the docusign eDoc$/, () => {
  docUSignPage.signDoc();
});

When(/^I click on adopt and sign$/, () => {
  docUSignPage.clickAdoptAndSignButton();
});

When(/^I click on finish$/, () => {
  docUSignPage.clickFinishButton();
});

When(
  /^The customer completes mandatory previous address fields and leaves House Name and House Number empty$/,
  () => {
    aboutYouAndWhereYouLive.setPreviousAddressDetails(
      null,
      null,
      aboutYou.Street_Name,
      aboutYou.Town,
      aboutYou.County,
      aboutYou.Postcode,
      1,
      1
    );
  }
);

When(/^I click on the AE FAQ's$/, () => {
  importantInformationPage.clickOnFAQ();
});
When(/^I click on the leave application button on popup model$/, function () {
    leaveApplicationModal.clickOnLeaveApplicationButtonOnPopupModel();
});

When(/^I click on the return to application button on popup model$/, function () {
    leaveApplicationModal.clickOnReturnToApplicationButtonOnPopupModel();
});

When(/^I click on close application button on popup model$/, function () {
    leaveApplicationModal.clickOnApplicationCloseButtonOnPopupModel();
});
