import { Then } from "@cucumber/cucumber";

import areYouEligiblePage from "../../pages/areYouEligible.page";
import whatCanYouExpectPage from "../../pages/whatCanYouExpect.page";
import basketPage from "../../pages/basket.page";
import howWeUseYourDataPage from "../../pages/howWeWillUseYourData.page";
import yourNameAndAddressPage from "../../pages/yourNameAndAddress.page";
import aboutYouAndWhereYouLive from "../../pages/aboutYouAndWhereYouLive.page";
import yourOccupationPage from "../../pages/yourOccupation.page";
import yourFinancials from "../../pages/yourFinancials.page";
import identityQuestioningPage from "../../pages/IdentityQuestioning.page";
import headerPage from "../../pages/header.page";
import footerPage from "../../pages/footer.page";
import itsTimeToSignPage from "../../pages/itsTimeToSign.page";
import rePaymentCalculatorPage from "../../pages/rePaymentCalculator.page";
import checkMyApplicationPage from "../../pages/checkMyApplication.page";
import yourQuotePage from "../../pages/yourQuote.page";
import application_id from "../../../data/application_id_setup_constants";
import leaveApplicationModal from "../../../support/common_modal/leaveApplicationModal";
import helper from "../../utils/helpers";

Then(/^I see Title for "Are you eligible\?"$/, () => {
  areYouEligiblePage.verifyPageHeader();
});
Then(/^I see Text as 'You can apply if you:'$/, () => {
  areYouEligiblePage.verifyText();
});

Then(/^I see List Item link as (.*)$/, (linkText) => {
  areYouEligiblePage.verifyListLinkText(linkText);
});

Then(/^I see a Button as 'Next'$/, () => {
  areYouEligiblePage.verifyNextBtn();
});

Then(/^I proceed to "What can you expect\?" screen$/, () => {
  whatCanYouExpectPage.verifyPageUrl();
});

Then(/^I see a Button as 'Leave application'$/, () => {
  howWeUseYourDataPage.verifyLeaveApplicationBtn();
});

Then(/^I can see header text as "What can you expect\?"$/, () => {
  whatCanYouExpectPage.verifyPageHeader();
});

Then(/^I proceed to Argos Trolley$/, () => {
  basketPage.verifyPageUrl();
});

Then(
  /^I see What Can I Expect Page (.*) Text as (.*)$/,
  (listItemNum, text) => {
    whatCanYouExpectPage.verifyListOfItemsText(listItemNum, text);
  }
);

Then(/^I see Are You Eligible page (.*) Text as (.*)$/, (listItemNum, text) => {
  areYouEligiblePage.verifyListOfItemsText(listItemNum, text);
});

Then(/^I proceed to "How we will use your data" Screen$/, () => {
  howWeUseYourDataPage.verifyHowWeUseYourDataUrl();
});

Then(/^I see Accept All Cookies button$/, () => {
  basketPage.verifyAcceptAllCookiesDisplayed();
});

Then(/^I click on Accept All Cookies$/, () => {
  basketPage.acceptAllCookies.click();
});

Then(/^Display the content as described in the table 1 for fpp10$/, () => {
  yourNameAndAddressPage.checkCorrectYourNameAndYourAddressPageContentIsDisplayed();
});

Then(/^Display the content as described in the table 1 for fpp180$/, () => {
  checkMyApplicationPage.checkYourDetailsContentOnMyApplicationIsDisplayed();
});

Then(
  /^The customer will be presented with the content as described in the table for fpp11$/,
  () => {
    aboutYouAndWhereYouLive.checkCorrectAboutYouAndWhereYouLiveContentIsDisplayed();
  }
);

Then(
  /^The customer will be presented with the list of Nationalities as outlined via Sainsbury’s picklist$/,
  () => {
    aboutYouAndWhereYouLive.checkNationalityListDisplaysExpectedList();
  }
);

Then(
  /^The customer will be presented with the list of Marital status as as outlined via Sainsbury’s picklist$/,
  () => {
    aboutYouAndWhereYouLive.checkMritalStatusListDisplaysExpectedList();
  }
);

Then(/^The customer will be presented with the following: 0 - 9$/, () => {
  aboutYouAndWhereYouLive.checkNumberOfDependentsListDisplaysExpectedList();
});

Then(
  /^The customer will be presented with the list of Residential status as as outlined via Sainsbury’s picklist$/,
  () => {
    aboutYouAndWhereYouLive.checkNumberResidentialStatusListDisplaysExpected();
  }
);

Then(
  /^The customer will be presented with entries 0 - 83 for current years$/,
  () => {
    aboutYouAndWhereYouLive.checkTimeAtCurrentAddressYearsListDisplaysExpected();
  }
);

Then(
  /^The customer will be presented with entries 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 for current months$/,
  () => {
    aboutYouAndWhereYouLive.checkTimeAtCurrentAddressMonthsListDisplaysExpected();
  }
);

Then(
  /^The customer will be presented with entries 0 - 83 for previous years$/,
  () => {
    aboutYouAndWhereYouLive.checkTimeAtPreviousAddressYearsListDisplaysExpected();
  }
);

Then(
  /^The customer will be presented with entries 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 for previous months$/,
  () => {
    aboutYouAndWhereYouLive.checkTimeAtPreviousAddressMonthsListDisplaysExpected();
  }
);

Then(
  /^The customer will be presented with the list of Employment status as as outlined via Sainsbury’s picklist$/,
  () => {
    yourOccupationPage.checkEmploymentListDisplaysExpectedList();
  }
);

Then(
  /^The customer will be presented with the list of Occupations s outlined via Sainsbury’s picklist$/,
  () => {
    yourOccupationPage.checkOccupationListDisplaysExpectedList();
  }
);

Then(
  /^The customer will be presented with the content as described in the above table$/,
  () => {
    yourOccupationPage.checkCorrectYourOccupationPageContentIsDisplayed();
  }
);

Then(
  /^The customer will be presented with the content as described in the table 2 for fpp180$/,
  () => {
    checkMyApplicationPage.checkCorrectYourOccupationPageContentOnMyAppPageIsDisplayed();
  }
);

Then(
  /^The customer will be presented with the content as described in FPP13$/,
  () => {
    yourFinancials.checkYourFinancialsContentIsDisplayed();
  }
);

Then(
  /^The customer will be presented with the content as described in fpp180$/,
  () => {
    checkMyApplicationPage.checkYourFinanceDetailsContentOnMyAppIsDisplayed();
  }
);

Then(/^I see checkbox$/, () => {
  howWeUseYourDataPage.verifyCheckbox();
});

Then(/^I see Text for checkbox as (.*)$/, (text) => {
  howWeUseYourDataPage.verifyCheckboxText(text);
});

Then(/^I see Agreement Text (\d+)$/, (agreementTextNumber) => {
  howWeUseYourDataPage.verifyAgreementText(agreementTextNumber);
});

Then(/^I see Banner text$/, () => {
  howWeUseYourDataPage.verifyBannerText();
});

Then(
  /^The check box will be highlighted with error message saying (.*)$/,
  (errorMessage) => {
    howWeUseYourDataPage.verifyErrorMessage(errorMessage);
  }
);

Then(
  /^The customer will proceed to ‘Your name and Your address’ screen$/,
  () => {
    yourNameAndAddressPage.checkPageUrl();
  }
);

Then(/^Side drawer component is displayed$/, () => {
  areYouEligiblePage.verifySideDrawerDisplayed();
});
Then(/^I see Side drawer title as (.*)$/, (sideDrawerTitle) => {
  areYouEligiblePage.verifySideDrawerTitle(sideDrawerTitle);
});
Then(/^I see Side drawer content$/, () => {
  areYouEligiblePage.verifySideDrawerContent();
});
Then(/^I see close Icon on side drawer screen$/, () => {
  areYouEligiblePage.verifyCloseIconOnSideDrawer();
});
Then(/^I see Close Button on Side drawer screen$/, () => {
  areYouEligiblePage.verifyCloseButtonOnSideDrawer();
});
Then(/^The focus state will move to the top right close button$/, () => {
  areYouEligiblePage.verifyCloseIconFocusState();
});
Then(/^The customer opts to close the side drawer using close button$/, () => {
  areYouEligiblePage.closeSideDraw();
});
Then(/^The side drawer component will close$/, () => {
  areYouEligiblePage.verifySideDrawerComponentCloseState();
});

Then(
  /^The customer will be presented with the content as described in ticket fpp9 and fpp1901$/,
  () => {
    howWeUseYourDataPage.checkCorrectHowWeUseYourDataPageContentIsDisplayed();
  }
);

Then(
  /^Focus state will return to the original state of Side Drawer link$/,
  () => {
    areYouEligiblePage.verifyNoticeOfCorrectionLinkState();
  }
);

Then(/^The customer can see the header component$/, () => {
  headerPage.verifyHeaderComponent();
});
Then(/^The customer can see Argos logo on the header$/, () => {
  headerPage.verifyArgosLogoVisibility();
});
Then(/^The customer can see Secure icon on the header$/, () => {
  headerPage.verifySecureIconPresence();
});

Then(/^The customer can see the footer component$/, () => {
  footerPage.verifyFooterComponent();
});
Then(
  /^The customer can see footer logo as (.*),(.*),(.*),(.*),(.*)$/,
  (visa, masterCard, amex, payPal, ssl) => {
    footerPage.verifyFooterLogo(visa, masterCard, amex, payPal, ssl);
  }
);
Then(/^The customer can see the static text$/, () => {
  footerPage.verifyFooterStaticText();
});
Then(
  /^The customer can see footer links as (.*),(.*),(.*),(.*),(.*),(.*)$/,
  (
    privacyHub,
    privacyPolicy,
    cookiesPolicy,
    listOfCookies,
    cookiesPreferences,
    termsAndConditions
  ) => {
    footerPage.verifyFooterLinks(
      privacyHub,
      privacyPolicy,
      cookiesPolicy,
      listOfCookies,
      cookiesPreferences,
      termsAndConditions
    );
  }
);
Then(/^The customer can see Argos copyright$/, () => {
  footerPage.verifyFooterArgosCopyRightText();
});
Then(/^The footer link Url open in new window$/, () => {
  footerPage.verifyFooterUrlOpening();
});
Then(
  /^The applicant will continue to the next screen - Review my application$/,
  () => {
    checkMyApplicationPage.verifyCheckMyApplicationPageUrl();
  }
);

Then(/^Side drawer component Opens and displayed$/, () => {
  yourFinancials.verifySideDrawerComponent();
});
Then(/^Customer can see Side drawer Title as (.*)$/, (sideDrawerTitle) => {
  yourFinancials.verifySideDrawerTitle(sideDrawerTitle);
});

Then(/^Customer can see Text on Side drawer as (.*)$/, (sideDrawerText) => {
  yourFinancials.verifyTextOnSideDrawer(sideDrawerText);
});

Then(/^Customer can see close icon on Side drawer$/, () => {
  yourFinancials.verifyCloseIcon();
});

Then(/^Customer can see Close CTA on Side drawer$/, () => {
  yourFinancials.verifyCloseBtnOnSideDrawer();
});
Then(
  /^The focus state will move to the top right of bank account close icon$/,
  () => {
    yourFinancials.verifyCloseIconState();
  }
);
Then(
  /^The customer opts to close the bank account side drawer using close button$/,
  () => {
    yourFinancials.clickOnBankAccountCloseBtn();
  }
);
Then(
  /^Focus state will return to the original state of bank account Side Drawer link$/,
  () => {
    yourFinancials.verifyBankAccountSideDrawerLinkState();
  }
);
Then(/^The bank account side drawer component will close$/, () => {
  yourFinancials.verifySideDrawerComponentCloseState();
});

Then(/^I can see Banner info as (.*)$/, (text) => {
  whatCanYouExpectPage.verifyBannerInfoText(text);
});
Then(/^I can see the Side drawer link$/, () => {
  whatCanYouExpectPage.verifySideDrawerLink();
});
Then(/^The customer will see the screen Title1 as (.*)$/, (pageTitle1) => {
  itsTimeToSignPage.verifyTimeToSignPageTitleOne(pageTitle1);
});

Then(
  /^The customer will see the screen Content1 as (.*)$/,
  (pageContentOne) => {
    itsTimeToSignPage.verifyTimeToSignPageContentOne(pageContentOne);
  }
);
Then(/^The customer will see the screen Title2 as (.*)$/, (pageTitleTwo) => {
  itsTimeToSignPage.verifyTimeToSignPageTitleTwo(pageTitleTwo);
});
Then(
  /^The customer will see the screen Content2 as (.*)$/,
  (pageContentTwo) => {
    itsTimeToSignPage.verifyTimeToSignPageContentTwo(pageContentTwo);
  }
);
Then(
  /^The customer will see the screen Content3 as (.*)$/,
  (pageContentThree) => {
    itsTimeToSignPage.verifyTimeToSignPageContentThree(pageContentThree);
  }
);
Then(
  /^The customer will see the screen Content4 as (.*)$/,
  (pageContentFour) => {
    itsTimeToSignPage.verifyTimeToSignPageContentFour(pageContentFour);
  }
);
Then(/^The customer will see the CTA1 as (.*)$/, (continueToDocuSignBtn) => {
  itsTimeToSignPage.verifyTimeToSignPageCTAOne(continueToDocuSignBtn);
});
Then(/^The customer will see the CTA2 as (.*)$/, (leaveApplicationBtn) => {
  itsTimeToSignPage.verifyTimeToSignPageCTATwo(leaveApplicationBtn);
});

Then(/^The customer is presented with the Title as (.*)$/, (titleOne) => {
  rePaymentCalculatorPage.verifyCalculatorPageTitleOne(titleOne);
});
Then(
  /^The customer is presented with the Content1 as (.*)$/,
  (contentOneText) => {
    rePaymentCalculatorPage.verifyCalculatorPageContentOneText(contentOneText);
  }
);

Then(
  /^The customer is presented with the Content2 as (.*)$/,
  (contentTwoText) => {
    rePaymentCalculatorPage.verifyCalculatorContentTwoText(contentTwoText);
  }
);

Then(/^The done button is displayed$/, () => {
  checkMyApplicationPage.verifyDoneButtonIsDisplayed();
});

Then(/^The employer input field is not displayed$/, () => {
  checkMyApplicationPage.verifyEmployerInputFieldIsNotDisplayed();
});

Then(/^The customer is presented with the interactive payment slider$/, () => {
  rePaymentCalculatorPage.verifyPaymentSlider();
});

Then(/^The customer is presented with Label1 as (.*)$/, (trolleyText) => {
  rePaymentCalculatorPage.verifyTrolleyTextLabelOne(trolleyText);
});

Then(/^The customer is presented with Label2 as (.*)$/, (trolleyText) => {
  rePaymentCalculatorPage.verifyCostPerMonthLabelTwo(trolleyText);
});

Then(/^The customer is presented with Label3 as (.*)$/, (paymentMonths) => {
  rePaymentCalculatorPage.verifyMonthlyPaymentsLabelThree(paymentMonths);
});

Then(
  /^The customer is presented with Label4 as (.*)$/,
  (representative_apr) => {
    rePaymentCalculatorPage.verifyRepresentativeAprLabelFour(
      representative_apr
    );
  }
);

Then(/^The customer is presented with Label5 as (.*)$/, (creditCharge) => {
  rePaymentCalculatorPage.verifyCreditChargeLabelFive(creditCharge);
});

Then(/^The customer is presented with Label6 as (.*)$/, (totalPayable) => {
  rePaymentCalculatorPage.verifyTotalPayableLabelSix(totalPayable);
});

Then(/^The customer is presented with Content7 as (.*)$/, (termsConditions) => {
  rePaymentCalculatorPage.verifyTCsText(termsConditions);
});

Then(/^The customer is presented with Link as (.*)$/, (learnMore) => {
  rePaymentCalculatorPage.verifyLearnMoreLink(learnMore);
});

Then(
  /^The customer is presented with the Subheading8 as (.*)$/,
  (subheadingEight) => {
    rePaymentCalculatorPage.verifyCalculatorPageSubheadingEightText(
      subheadingEight
    );
  }
);
Then(
  /^The customer is presented with the Content8 as (.*)$/,
  (contentEight) => {
    rePaymentCalculatorPage.verifyCalculatorPageContentEightText(contentEight);
  }
);

Then(/^The customer is presented with the Content10 as (.*)$/, (contentTen) => {
  rePaymentCalculatorPage.verifyCalculatorPageContentTen(contentTen);
});

Then(/^The customer is presented with the Content9 as (.*)$/, (contentNine) => {
  rePaymentCalculatorPage.verifyCalculatorPageContentNine(contentNine);
});

Then(
  /^The customer is presented with the Subheading10 as (.*)$/,
  (subTitleTen) => {
    rePaymentCalculatorPage.verifyCalculatorPageSubheadingTen(subTitleTen);
  }
);

Then(
  /^The customer is presented with the SubTitle2 as (.*)$/,
  (subTitleTwo) => {
    rePaymentCalculatorPage.verifyCalculatorPageSubTitleTwo(subTitleTwo);
  }
);

Then(
  /^The customer is presented with the Subheading11 as (.*)$/,
  (subTitleEleven) => {
    rePaymentCalculatorPage.verifyCalculatorPageSubTitleEleven(subTitleEleven);
  }
);
Then(
  /^The customer is presented with the Content11 as (.*)$/,
  (contentEleven) => {
    rePaymentCalculatorPage.verifyCalculatorPageContentEleven(contentEleven);
  }
);
Then(/^The additional information Content1 as (.*)$/, (content1) => {
  yourFinancials.verifyBankAccountContentOne(content1);
});
Then(/^The additional information Tick point1 as (.*)$/, (tickPointText1) => {
  yourFinancials.verifyBankAccountTickPointOne(tickPointText1);
});
Then(/^The additional information Tick point2 as (.*)$/, (tickPointText2) => {
  yourFinancials.verifyBankAccountTickPointTwo(tickPointText2);
});
Then(/^The additional information Tick point3 as (.*)$/, (tickPointText3) => {
  yourFinancials.verifyBankAccountTickPointThree(tickPointText3);
});
Then(/^The additional information Content2 as (.*)$/, (content2) => {
  yourFinancials.verifyBankAccountContentTwo(content2);
});
Then(/^The customer can see the Direct Debit Guarantee link$/, () => {
  yourFinancials.verifyDirectDebitGuaranteeLink();
});
Then(/^The customer can see the Direct Debit Guarantee Side Drawer$/, () => {
  yourFinancials.verifyDirectDebitGuaranteeSideDrawerDisplay();
});
Then(
  /^The additional information on the finance details section Content1 as (.*)$/,
  (contentOne) => {
    checkMyApplicationPage.verifyFinancialDetailsSectionContentOne(contentOne);
  }
);
Then(
  /^The additional information on the finance details section Tick point1 as (.*)$/,
  (tickPointOne) => {
    checkMyApplicationPage.verifyFinancialDetailsSectionTickPointOne(
      tickPointOne
    );
  }
);

Then(
  /^The additional information on the finance details section Tick point2 as (.*)$/,
  (tickPointTwo) => {
    checkMyApplicationPage.verifyFinancialDetailsSectionTickPointTwo(
      tickPointTwo
    );
  }
);
Then(
  /^The additional information on the finance details section Tick point3 as (.*)$/,
  (tickPointThree) => {
    checkMyApplicationPage.verifyFinancialDetailsSectionTickPointThree(
      tickPointThree
    );
  }
);
Then(
  /^The additional information on the finance details section content2 as (.*)$/,
  (contentTwo) => {
    checkMyApplicationPage.verifyFinancialDetailsSectionContentTwo(contentTwo);
  }
);
Then(
  /^The customer can see the Direct Debit Guarantee link on the Your financials section$/,
  () => {
    checkMyApplicationPage.verifyYourFinancialsSectionDirectDebitLinkDisplay();
  }
);
Then(
  /^The customer can see the Direct Debit Guarantee Side Drawer on the Your financials section$/,
  () => {
    checkMyApplicationPage.verifyYourFinancialsSectionSideDrawerDisplay();
  }
);
Then(/^The customer can see the bank account details section$/, () => {
  checkMyApplicationPage.verifyBankAccountDetailsOnFinanceSection();
});
Then(/^The side drawer will appear with Heading1 as (.*)$/, (headingOne) => {
  yourFinancials.verifySideDrawerHeadingOne(headingOne);
});
Then(/^The side drawer will appear with Bullet1 as (.*)$/, (bulletOne) => {
  yourFinancials.verifySideDrawerBulletOne(bulletOne);
});
Then(/^The side drawer will appear with Bullet2 as (.*)$/, (bulletTwo) => {
  yourFinancials.verifySideDrawerBulletTwo(bulletTwo);
});
Then(/^The side drawer will appear with Bullet3 as (.*)$/, (bulletThree) => {
  yourFinancials.verifySideDrawerBulletThree(bulletThree);
});
Then(/^The side drawer will appear with Sub-bullet as (.*)$/, (subBullet) => {
  yourFinancials.verifySideDrawerSubBullet(subBullet);
});
Then(/^The side drawer will appear with Bullet4 as (.*)$/, (bulletFour) => {
  yourFinancials.verifySideDrawerBulletFour(bulletFour);
});
Then(/^The side drawer will appear with close icon$/, () => {
  yourFinancials.verifySideDrawerCloseIcon();
});
Then(/^The side drawer will appear with Close CTA$/, () => {
  yourFinancials.verifySideDrawerCloseCTA();
});

Then(
  /^The side drawer on the finance details section will appear with Heading1 as (.*)$/,
  (headingOne) => {
    checkMyApplicationPage.verifyFinancialDetailsSideDrawerHeadingOne(
      headingOne
    );
  }
);
Then(
  /^The side drawer on the finance details section will appear with Bullet1 as (.*)$/,
  (bulletOne) => {
    checkMyApplicationPage.verifyFinancialDetailsSideDrawerBulletOne(bulletOne);
  }
);
Then(
  /^The side drawer on the finance details section will appear with Bullet2 as (.*)$/,
  (bulletTwo) => {
    checkMyApplicationPage.verifyFinancialDetailsSideDrawerBulletTwo(bulletTwo);
  }
);
Then(
  /^The side drawer on the finance details section will appear with Bullet3 as (.*)$/,
  (bulletThree) => {
    checkMyApplicationPage.verifyFinancialDetailsSideDrawerBulletThree(
      bulletThree
    );
  }
);
Then(
  /^The side drawer on the finance details section will appear with Sub-bullet as (.*)$/,
  (subBullet) => {
    checkMyApplicationPage.verifyFinancialDetailsSideDrawerSubBullet(subBullet);
  }
);
Then(
  /^The side drawer on the finance details section will appear with Bullet4 as (.*)$/,
  (bulletFour) => {
    checkMyApplicationPage.verifyFinancialDetailsSideDrawerBulletFour(
      bulletFour
    );
  }
);
Then(
  /^The side drawer on the finance details section will with close icon$/,
  () => {
    checkMyApplicationPage.verifyFinancialDetailsSideDrawerCloseIcon();
  }
);
Then(
  /^The side drawer on the finance details section will with Close CTA$/,
  () => {
    checkMyApplicationPage.verifyFinancialDetailsSideDrawerCloseCTA();
  }
);

Then(
  /^The focus state will move to the top right of Finance Section Direct Debit Guarantee Side Drawer close icon$/,
  () => {
    checkMyApplicationPage.verifyDirectDebitSideDrawerCloseIconStateOnFinanceSection();
  }
);

Then(/^The title will be displayed as (.*)$/, (title) => {
  identityQuestioningPage.verifyIdentityPageTitle(title);
});

Then(/^The content will display as (.*)$/, (expected_content) => {
  identityQuestioningPage.verifyIdentityContentOne(expected_content);
});

Then(/^The question title is (.*)$/, (expected_question_title) => {
  identityQuestioningPage.verifyQuestionTitle(expected_question_title);
});

Then(/^The multiple choice answer is displayed as$/, (table) => {
  let data = table.rows();
  identityQuestioningPage.verifyIDIQAnswerOptions(data[0]);
});

Then(/^The Direct Debit Side Drawer component will close$/, () => {
  yourFinancials.verifyDirectDebitSideDrawerComponentState();
});

Then(
  /^The Direct Debit Side Drawer component will close on finance details section$/,
  () => {
    checkMyApplicationPage.verifyDirectDebitSideDrawerComponentCloseStateOnFinanceSection();
  }
);
Then(
  /^A new browser window or tab will open taking user to the following link:(.*)$/,
  (expected_url) => {
    howWeUseYourDataPage.verifyPrivacyGroupUrl(expected_url);
  }
);

Then(/^The customer can see the content as:(.*)$/, (expected_data) => {
  yourQuotePage.checkSideDrawContent(expected_data);
});

Then(/^The side draw close button is displayed$/, () => {
  yourQuotePage.verifySideDrawCloseButtonDisplays();
});

Then(
  /^Customer title, first name and last name data on my application page is displayed from Argos check out$/,
  () => {
    const {
      customer: { title, firstName, lastName },
    } = application_id;
    const customerFullName = `${title} ${firstName} ${lastName}`;
    checkMyApplicationPage.checkCustomerFullNameIsDisplayed(customerFullName);
  }
);
Then(/^The how we use your data title is displayed$/, () => {
  howWeUseYourDataPage.checkHowWeUseYourDataPageTitleIsDisplayed();
});

Then(/^The customers address is based on the argos checkout address$/, () => {
  const {
    customer: {
      billingAddress: { houseNumber, line1, town, postCode },
    },
  } = application_id;
  aboutYouAndWhereYouLive.checkCorrectCustomerAddressDetailsAreDisplayed(
    `${houseNumber} ${line1}`,
    `${town}`,
    `${postCode}`
  );
});

Then(/^Display the content as described in the table 1 for fpp86$/, () => {
  checkMyApplicationPage.checkContentOnMyApplicationWithCurrentAddressIsDisplayed();
});

Then(
  /^Display previous address content as described in the table 1 for fpp86$/,
  () => {
    checkMyApplicationPage.checkContentPreviousAddressIsDisplayed();
  }
);

Then(
  /^Display previous address content without county as described in the table 1 for fpp86$/,
  () => {
    checkMyApplicationPage.checkContentPreviousAddressWithoutCountyIsDisplayed();
  }
);

Then(/^The application page title and description is displayed$/, () => {
  checkMyApplicationPage.checkPageTitleAndDescriptionIsDisplayed();
});

Then(/^The edit link will be displayed for (.*) section$/, (section) => {
  checkMyApplicationPage.checkEditLinkIsDisplayed(section);
});

Then(/^The leave modal presents:(.*)$/, (content) => {
  leaveApplicationModal.checkModalContent(content);
});

Then(/^page url contains:(.*)$/, (page) => {
  helper.checkPageUrl(page);
});
