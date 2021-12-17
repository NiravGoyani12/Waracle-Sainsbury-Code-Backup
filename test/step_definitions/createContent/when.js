import { When } from "@cucumber/cucumber";
import areYouEligiblePage from "../../pages/areYouEligible.page";
import whatCanYouExpectPage from "../../pages/whatCanYouExpect.page";
import yourNameAndAddressPage from "../../pages/yourNameAndAddress.page";
import aboutYouAndWhereYouLive from "../../pages/aboutYouAndWhereYouLive.page";
import yourOccupationPage from "../../pages/yourOccupation.page";
import yourFinancials from "../../pages/yourFinancials.page";
import clickOnLeaveApplication from "../../../support/common_actions/clickLeaveApplication";
import leaveApplicationButtonModalClick from "../../../support/common_actions/clickLeaveApplicationModel";
import howWeUseYourDataPage from "../../pages/howWeWillUseYourData.page";
import helpers from "../../utils/helpers";
import itsTimeToSignPage from "../../pages/itsTimeToSign.page";
import rePaymentCalculatorPage from "../../pages/rePaymentCalculator.page";
import checkMyApplicationPage from "../../pages/checkMyApplication.page";
import application_id from "../../../data/application_id_setup_constants";
import yourQuotePage from "../../pages/yourQuote.page";
import presentOfferPage from "../../pages/presentOffer.page";
import navigationUtility from "../../utils/navigationUtility";
import importantInformationPage from "../../pages/importantInformation.page";
import verifyNextButton from "../../../support/common_assertions/verifyNextButton";
import clickNextButton from "../../../support/common_actions/clickNext";
import leaveApplicationModal from "../../../support/common_modal/leaveApplicationModal";

When(/^I click on Next Button$/, () => {
  clickNextButton();
});

When(/^The customer navigates back to previous screen$/, () => {
  navigationUtility.navigateToPreviousScreen();
});

When(/^I click on Leave application$/, () => {
  clickOnLeaveApplication();
});

When(/^I click on the modal button leave application$/, () => {
  leaveApplicationButtonModalClick();
});

When(/^The customer opens the Nationality drop down$/, () => {
  aboutYouAndWhereYouLive.clickOnNationalityDropDown();
});

When(/^The customer opens the Marital status drop down$/, () => {
  aboutYouAndWhereYouLive.clickOnMaritalStatusDropDown();
});

When(/^The customer opens the No of dependents drop down$/, () => {
  aboutYouAndWhereYouLive.clickNoDependentsDropDown();
});

When(/^The customer opens the Residential status drop down$/, () => {
  aboutYouAndWhereYouLive.clickResidentialStatusDropDown();
});

When(/^The customer opens the Time at current address Years drop down$/, () => {
  aboutYouAndWhereYouLive.clickTimeAtCurrentAddressYears();
});

When(
  /^The customer opens the Time at previous address Years drop down$/,
  () => {
    aboutYouAndWhereYouLive.clickTimeAtPreviousAddressYears();
  }
);

When(
  /^The customer opens the Time at current address Months drop down$/,
  () => {
    aboutYouAndWhereYouLive.clickTimeAtCurrentAddressMonths();
  }
);

When(
  /^The customer opens the Time at previous address Months drop down$/,
  () => {
    aboutYouAndWhereYouLive.clickTimeAtPreviousAddressMonths();
  }
);

When(/^The customer opens the Employment status drop down$/, () => {
  yourOccupationPage.clickEmploymentList();
});

When(/^The customer opens the Occupation drop down$/, () => {
  yourOccupationPage.clickOccupationList();
});

When(
  /^Customer title, first name and last name data is displayed from Argos check out$/,
  () => {
    const {
      customer: { title, firstName, lastName },
    } = application_id;
    const customerFullName = `${title} ${firstName} ${lastName}`;
    yourNameAndAddressPage.checkCorrectCustomerNameDetailsAreDisplayed(
      customerFullName
    );
  }
);

When(
  /^Customer current address details is displayed from Argos check out$/,
  () => {
    const {
      customer: {
        billingAddress: { houseNumber, line1, town, postCode },
      },
    } = application_id;
    yourNameAndAddressPage.checkCorrectCustomerAddressDetailsAreDisplayed(
      `${houseNumber} ${line1}`,
      `${town}`,
      `${postCode}`
    );
  }
);

When(/^The customer ticks the checkbox$/, () => {
  howWeUseYourDataPage.selectCheckbox();
});

When(/^I see The check box is selected$/, () => {
  howWeUseYourDataPage.verifyCheckboxSelectedState();
});

When(/^The customer unselect the checkbox$/, () => {
  howWeUseYourDataPage.verifyCheckboxUnSelectedState();
});

When(/^I click on the Side Drawer link$/, () => {
  areYouEligiblePage.clickSideDrawLink();
});

When(
  /^The customer will be presented with the content as described in the above table.$/,
  () => {
    yourFinancials.checkYourFinancialsContentIsDisplayed();
  }
);

When(/^The customer has landed on How we’ll use your data screen$/, () => {
  howWeUseYourDataPage.verifyHowWeUseYourDataUrl();
});

When(/^The customer clicks on next button$/, () => {
  clickNextButton();
});

When(
  /^The customer clicks on the ‘Why do you need my bank account number’ link$/,
  () => {
    yourFinancials.clickOnSideDrawerLink();
  }
);

When(
  /^The customer has populated all field inputs and drop downs fields Employment status, Occupation, Employer name$/,
  () => {
    yourOccupationPage.selectEmploymentStatus("Administration");
  }
);

When(/^The customer clicks on the footer (.*) link$/, (link) => {
  helpers.clickOnFooterLink(link);
});

When(/^I click on the Side drawer link$/, () => {
  whatCanYouExpectPage.clickOnSideDrawerLink();
});

When(/^The customer lands on the It’s time to sign screen$/, () => {
  itsTimeToSignPage.verifyTimeToSignPageUrl();
});

When(/^The customer lands on the calculator screen$/, () => {
  rePaymentCalculatorPage.verifyCalculatorPageUrl();
});

When(/^The customer is viewing the bank account details section$/, () => {
  yourFinancials.verifyBankAccountDetailsSection();
});

When(/^The customer click on the Direct Debit Guarantee link$/, () => {
  yourFinancials.clickOnDirectDebitGuaranteeLink();
});

When(
  /^The customer has clicked to edit the Your financials section$/,
  function () {
    checkMyApplicationPage.clickOnYourFinancialsEditLink();
  }
);

When(
  /^The customer click on the Direct Debit Guarantee link on the Your financials section$/,
  () => {
    checkMyApplicationPage.clickOnDirectDebitGuaranteeLink();
  }
);

When(
  /^The customer opts to close the Direct Debit Side Drawer using close button$/,
  () => {
    yourFinancials.clickOnDirectDebitSideDrawerCloseCTA();
  }
);

When(
  /^The customer opts to close the Direct Debit Side Drawer using close button on finance details section$/,
  () => {
    checkMyApplicationPage.clickOnDirectDebitSideDrawerCloseCTAOnFinanceSection();
  }
);

When(/^The customer clicks on the Learn more side drawer link$/, () => {
  rePaymentCalculatorPage.clickLearnMore();
});

When(/^The correct content displayed for:(.*)$/, (content) => {
  rePaymentCalculatorPage.checkContent(content);
});

When(/^The applicant clicks on the How we will use your data link$/, () => {
  howWeUseYourDataPage.clickOnHowWeUseYourDataLink();
});

When(
  /^The correct content for how use your data side draw:(.*) is displayed$/,
  (data) => {
    howWeUseYourDataPage.checkSideDrawContent(data);
  }
);

When(/^The X close icon is displayed$/, () => {
  howWeUseYourDataPage.verifySideDrawCloseIconIsDisplayed();
});

When(
  /^The applicant has clicked on the Sainsbury’s Group Privacy Hub link within the side drawer$/,
  () => {
    howWeUseYourDataPage.clickOnGroupPrivacyLink();
    
  
  }
);

When(/^The customer has an application setup from Argos checkout/, async () => {
  await helpers.navigate("setup application state");
 
});

When(/^The close button is displayed$/, () => {
  howWeUseYourDataPage.verifySideDrawCloseButtonIsDisplayed();
});

When(/^The customer clicks on the learn more link$/, () => {
  yourQuotePage.clickOnLearnMoreLink();
});

When(/^The Present offer page displays:(.*)$/, (data) => {
  presentOfferPage.checkPresentOfferContent(data);
});

When(/^The customer lands on the Present offer page$/, () => {
  presentOfferPage.verifyPresentOfferPageUrl();
});

When(/^The important information screen displays:(.*)$/, (content) => {
  importantInformationPage.checkImportantInformationContent(content);
});

When(/^The next button is displayed$/, () => {
  verifyNextButton();
});

When(
  /^Customer has launched the modal to receive documentation in an accessible format$/,
  () => {
    howWeUseYourDataPage.clickOnAccessibleCommunicationLink();
  }
);

When(/^The communication modal displays:(.*)$/, (content) => {
  howWeUseYourDataPage.checkAccessibleCommunicationContent(content);
});

When(/^Customer has made a radio button selection:(.*)$/, (button) => {
  howWeUseYourDataPage.clickOnAccessibleCommunicationButton(button);
});

When(/^The customer clicks on the communication modal confirm button$/, () => {
  howWeUseYourDataPage.clickOnAccessibleCommunicationConfirmButton();
});

When(/^The customer clicks on the communication modal close button$/, () => {
  howWeUseYourDataPage.clickOnAccessibleCommunicationCloseButton();
});

When(/^The communication modal is closed$/, () => {
  howWeUseYourDataPage.verifyTheModalIsNotDisplayed();
});

When(/^The your quote screen displays:(.*)$/, (content) => {
  yourQuotePage.checkHighProbabilityContent(content);
});

When(/^Displays (.*) link$/, (expected_title) => {
  howWeUseYourDataPage.verifyGroupPrivacyLink(expected_title);
});

When(/^I close the leave modal$/, () => {
  leaveApplicationModal.closeModal();
});