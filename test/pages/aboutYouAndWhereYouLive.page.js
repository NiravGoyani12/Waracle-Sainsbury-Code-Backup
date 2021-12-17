import { assert, expect } from "chai";
import verifyLeaveApplicationButtonText from "../../support/common_assertions/verifyLeaveApplicationButton";
import verifyContinueApplicationButtonText from "../../support/common_assertions/verifyContinueButton";
const nationalityData = require("../../data/nationality_constants");
const maritalData = require("../../data/marital_status_constants");
const dependentsData = require("../../data/dependents_constants");
const residentialData = require("../../data/residential_constants");
const timeOut = 14000;
import clearInputField from "../../support/common_actions/clearInputFields";

class AboutYouAndWhereYouLivePage {
  /**
   * Define page elements
   */

  aboutYouPageTitle() {
    return "//*[contains(text(),'About you')]";
  }

  emailAddressTitle() {
    return "//label[@id='input-emailAddress-label']";
  }

  emailAddressInputField() {
    return "//input[@id='emailAddress']";
  }

  mobilePhoneNumberTitle() {
    return "#input-mobilePhoneNumber-label";
  }

  mobilePhoneNumberInputField() {
    return "//input[@id='mobilePhoneNumber']";
  }

  getDateOfBirthTitle() {
    return "span[data-testid='date-of-birth-label']";
  }

  dayFieldTitle() {
    return "#input-day-label";
  }

  monthFieldTitle() {
    return "#input-month-label";
  }

  yearFieldTitle() {
    return "#input-year-label";
  }

  dayInputField() {
    return "#day";
  }

  monthInputField() {
    return "#month";
  }

  yearInputField() {
    return "#year";
  }

  nationalityTitle() {
    return "label[for='nationalityCode']";
  }
  nationalityFieldButton() {
    return "#nationalityCode";
  }
  nationalityDropDownList(value) {
    return "//select[@id='nationalityCode']/option";
  }

  nationalityDropDownInputTitle() {
    return "label[for='nationalityCode']";
  }

  maritalStatusTitle() {
    return "label[for='maritalStatusCode']";
  }

  maritalStatusDropDownList() {
    return "//select[@id='maritalStatusCode']/option";
  }
  maritalStatusFieldButton() {
    return "#maritalStatusCode";
  }

  numberOfDependentsTitle() {
    return "label[for='numberOfDependents']";
  }

  numberOfDependentsFieldButton() {
    return "//select[@id='numberOfDependents']";
  }

  numberOfDependentsDropDownList() {
    return "//select[@id='numberOfDependents']/option";
  }

  whereYouLiveTitle() {
    return "//h2[contains(text(),'Where you live')]";
  }

  residentialStatusTitle() {
    return "label[for='residentialStatus']";
  }

  residentialStatusDropDownList() {
    return "//select[@id='residentialStatus']/option";
  }

  residentialStatusFieldButton() {
    return "//select[@id='residentialStatus']";
  }

  timeAtCurrentAddressTitle() {
    return "span[data-testid='time-at-address-label']";
  }

  timeAtCurrentAddressYearsTitle() {
    return "label[for='startDateYear']";
  }

  timeAtCurrentAddressYearsMonthsTitle() {
    return "label[for='startDateMonth']";
  }

  timeAtCurrentAddressYearsList() {
    return "//select[@id='startDateYear']/option";
  }

  timeAtCurrentAddressYearsFieldButton() {
    return "select#startDateYear";
  }

  timeAtCurrentAddressMonthsList() {
    return "[name='startDateMonth'] >option";
  }

  timeAtCurrentAddressMonthsFieldButton() {
    return "select#startDateMonth";
  }

  timeAtPreviousAddressYearsList() {
    return "//select[@id='previousAddressYear']/option";
  }

  timeAtPreviousAddressYearsFieldButton() {
    return "select#previousAddressYear";
  }

  timeAtPreviousAddressMonthsList() {
    return "[name='previousAddressMonth'] >option";
  }

  timeAtPreviousAddressMonthsFieldButton() {
    return "select#previousAddressMonth";
  }

  lengthOfCurrentAddressErrorMessageValidation() {
    return "span[data-testid='require-current-address-error']";
  }

  lengthOfPreviousAddressErrorMessageValidation() {
    return "span[data-testid='require-previous-address-error']";
  }

  emailFormatErrorMessageValidation() {
    return "span#emailAddress-error-message";
  }

  mobileFormatErrorMessageValidation() {
    return "span#mobilePhoneNumber-error-message";
  }

  ageErrorMessageValidation() {
    return "[data-testid='dob-error']";
  }

  currentAddressErrorValidation() {
    return "div[role='alert']";
  }

  previousAddressHouseNumber() {
    return "//*[@id='previousAddress.address.houseNumber']";
  }

  previousAddressHouseName() {
    return "//*[@id='previousAddress.address.houseName']";
  }

  previousAddressFlatNumber() {
    return "//*[@id='previousAddress.address.flatNumber']";
  }

  previousStreetName() {
    return "//*[@id='previousAddress.address.streetName']";
  }

  previousTown() {
    return "//*[@id='previousAddress.address.town']";
  }

  previousCounty() {
    return "//*[@id='previousAddress.address.county']";
  }

  previousPostCode() {
    return "//*[@id='previousAddress.address.postCode']";
  }
  previousAddressErrorValidation() {
    return "div:nth-of-type(13) > .error";
  }

  previousAddressHouseNumberErrorMessage() {
    return "//*[@id='previousAddress.address.houseNumber-error-message']";
  }

  previousAddressHouseNameErrorMessage() {
    return "//*[@id='previousAddress.address.houseName-error-message']";
  }

  previousAddressHouseNameOrNumberErrorMessage() {
    return "[data-testid='houseNameNumberErrorMessage']";
  }

  previousStreetNameErrorMessage() {
    return "//*[@id='previousAddress.address.streetName-error-message']";
  }

  previousTownErrorMessage() {
    return "//*[@id='previousAddress.address.town-error-message']";
  }

  previousCountyErrorMessage() {
    return "//*[@id='previousAddress.address.county-error-message']";
  }

  previousPostCodeErrorMessage() {
    return "//*[@id='previousAddress.address.postCode-error-message']";
  }

  dobErrorMessage() {
    return "[data-testid='dob-error']";
  }

  mobileErrorMessage() {
    return "span#mobilePhoneNumber-error-message";
  }

  addressLineOne() {
    return "div.content-list:nth-of-type(1) > dd";
  }

  addressLineTwo() {
    return "div.content-list:nth-of-type(2) > dd";
  }

  postCode() {
    return "div.content-list:nth-of-type(3) > dd";
  }

  /**
   * Define page functions
   */
  aboutYouText() {
    let aboutYouText = browser.$(this.aboutYouPageTitle()).getText();
    let expected_aboutYouText = "About you";
    assert(
      aboutYouText.includes(expected_aboutYouText),
      `About you page title- ${aboutYouText} does not include ${expected_aboutYouText}`
    );
    console.log(`About you page title is: ${aboutYouText}`);
  }

  checkEmailAddressTitle() {
    let emailAddressTitleText = browser.$(this.emailAddressTitle()).getText();
    let expected_yourDetailsText = "Email address";
    assert(
      emailAddressTitleText.includes(expected_yourDetailsText),
      `Your details page email address title ${emailAddressTitleText} does not include ${expected_yourDetailsText}`
    );
    console.log(
      `Your details page email address title is:${emailAddressTitleText}`
    );
  }

  checkEmailAddressInputFieldTitle() {
    let emailAddressInputFieldTitleText = browser
      .$(this.emailAddressInputField())
      .getAttribute("placeholder");
    let expected_emailAddressInputFieldTitleText = "email@address.com";
    assert(
      emailAddressInputFieldTitleText.includes(
        expected_emailAddressInputFieldTitleText
      ),
      `Your details page email input field title ${emailAddressInputFieldTitleText} does not include ${expected_emailAddressInputFieldTitleText}`
    );
    console.log(
      `Your details page email input field title is:${emailAddressInputFieldTitleText}`
    );
  }

  checkMobilePhoneNumberTitle() {
    let mobilePhoneNumberTitleText = browser
      .$(this.mobilePhoneNumberTitle())
      .getText();
    let expected_mobilePhoneNumberTitleText = "Mobile phone number";
    assert(
      mobilePhoneNumberTitleText.includes(expected_mobilePhoneNumberTitleText),
      `Your details page mobile number title ${mobilePhoneNumberTitleText} does not include ${expected_mobilePhoneNumberTitleText}`
    );
    console.log(
      `Your details page mobile number title is:${mobilePhoneNumberTitleText}`
    );
  }

  checkMobilePhoneNumberInputFieldTitle() {
    let mobilePhoneNumberInputTitleText = browser
      .$(this.mobilePhoneNumberInputField())
      .getAttribute("placeholder");
    let expected_mobilePhoneNumberTitleText = "Please enter UK mobile number";
    assert(
      mobilePhoneNumberInputTitleText.includes(
        expected_mobilePhoneNumberTitleText
      ),
      `Your details page mobile number input field title ${mobilePhoneNumberInputTitleText} does not include ${expected_mobilePhoneNumberTitleText}`
    );
    console.log(
      `Your details page mobile number input field title is:${mobilePhoneNumberInputTitleText}`
    );
  }

  checkDateOfBirthTitle() {
    let dateOfBirthTitleText = browser.$(this.getDateOfBirthTitle()).getText();
    let expected_dateOfBirthTitleText = "Date of birth";
    assert(
      dateOfBirthTitleText.includes(expected_dateOfBirthTitleText),
      `Your details date of birth title ${dateOfBirthTitleText} does not include ${expected_dateOfBirthTitleText}`
    );
    console.log(`Your details date of birth title is:${dateOfBirthTitleText}`);
  }

  checkDateOfBirthYearFieldTitle() {
    let dateOfBirthYearText = browser.$(this.yearFieldTitle()).getText();
    let expected_dateOfBirthYearText = "Year";
    assert(
      dateOfBirthYearText.includes(expected_dateOfBirthYearText),
      `Your details date of birth - year title ${dateOfBirthYearText} does not include ${expected_dateOfBirthYearText}`
    );
    console.log(
      `Your details date of birth - year title is: ${dateOfBirthYearText}`
    );
  }

  checkDateOfBirthMonthFieldTitle() {
    let dateOfBirthMonthText = browser.$(this.monthFieldTitle()).getText();
    let expected_dateOfBirthMonthText = "Month";
    assert(
      dateOfBirthMonthText.includes(expected_dateOfBirthMonthText),
      `Your details date of birth - month title ${dateOfBirthMonthText} does not include ${expected_dateOfBirthMonthText}`
    );
    console.log(
      `Your details date of birth - month title is:${dateOfBirthMonthText}`
    );
  }

  checkDateOfBirthDayFieldTitle() {
    let dateOfBirthDayText = browser.$(this.dayFieldTitle()).getText();
    let expected_dateOfBirthDayText = "Day";
    assert(
      dateOfBirthDayText.includes(expected_dateOfBirthDayText),
      `Your details date of birth - day title ${dateOfBirthDayText} does not include ${expected_dateOfBirthDayText}`
    );
    console.log(
      `Your details date of birth - day title is:${dateOfBirthDayText}`
    );
  }

  checkDateOfBirthDayInputTitle() {
    let dateOfBirthDayInputText = browser
      .$(this.dayInputField())
      .getAttribute("placeholder");
    let expected_dateOfBirthDayInputText = "DD";
    assert(
      dateOfBirthDayInputText.includes(expected_dateOfBirthDayInputText),
      `Your details date of birth - day input title ${dateOfBirthDayInputText} does not include ${expected_dateOfBirthDayInputText}`
    );
    console.log(
      `Your details date of birth - day input title is:${dateOfBirthDayInputText}`
    );
  }

  checkDateOfBirthMonthInputTitle() {
    let dateOfBirthMonthInputText = browser
      .$(this.monthInputField())
      .getAttribute("placeholder");
    let expected_dateOfBirthMonthInputText = "MM";
    assert(
      dateOfBirthMonthInputText.includes(expected_dateOfBirthMonthInputText),
      `Your details date of birth -month input title ${dateOfBirthMonthInputText} does not include ${expected_dateOfBirthMonthInputText}`
    );
    console.log(
      `Your details date of birth -month input title is:${dateOfBirthMonthInputText}`
    );
  }

  checkDateOfBirthYearInputTitle() {
    let dateOfBirthYearInputText = browser
      .$(this.yearInputField())
      .getAttribute("placeholder");
    let expected_dateOfBirthYearInputText = "YYYY";
    assert(
      dateOfBirthYearInputText.includes(expected_dateOfBirthYearInputText),
      `Your details date of birth - year input title ${dateOfBirthYearInputText} does not include ${expected_dateOfBirthYearInputText}`
    );
    console.log(
      `Your details date of birth - year input title is:${dateOfBirthYearInputText}`
    );
  }

  checkNationalityTitle() {
    let nationalityTitleText = browser.$(this.nationalityTitle()).getText();
    let expected_nationalityTitleText = "Nationality";
    assert(
      nationalityTitleText.includes(expected_nationalityTitleText),
      `Your details nationality title ${nationalityTitleText} does not include ${expected_nationalityTitleText}`
    );
    console.log(`Your details nationality title is:${nationalityTitleText}`);
  }

  checkMaritalStatusTitleText() {
    let maritalStatusTitleText = browser.$(this.maritalStatusTitle()).getText();
    let expected_maritalStatusTitleText = "Marital status";
    assert(
      maritalStatusTitleText.includes(expected_maritalStatusTitleText),
      `Your details Marital status title ${maritalStatusTitleText} does not include ${expected_maritalStatusTitleText}`
    );
    console.log(
      `Your details Marital status title is:${maritalStatusTitleText}`
    );
  }

  checkNumberOfDependentsTitleText() {
    let numberOfDependentsTitleText = browser
      .$(this.numberOfDependentsTitle())
      .getText();
    let expected_numberOfDependentsTitleText = "Number of dependents";
    assert(
      numberOfDependentsTitleText.includes(
        expected_numberOfDependentsTitleText
      ),
      `Your details number of dependents title ${numberOfDependentsTitleText} does not include ${expected_numberOfDependentsTitleText}`
    );
    console.log(
      `Your details number of dependents title is:${numberOfDependentsTitleText}`
    );
  }

  checkWhereYouLiveTitleText() {
    let whereYouLiveTitleText = browser.$(this.whereYouLiveTitle()).getText();
    let expected_whereYouLiveTitleText = "Where you live";
    assert(
      whereYouLiveTitleText.includes(expected_whereYouLiveTitleText),
      `Your details Where you live title ${whereYouLiveTitleText} does not include ${expected_whereYouLiveTitleText}`
    );
    console.log(
      `Your details Where you live title is:${whereYouLiveTitleText}`
    );
  }

  checkResidentialStatusTitleText() {
    let residentialStatusTitle = browser
      .$(this.residentialStatusTitle())
      .getText();
    let expected_residentialStatusTitle = "Residential status";
    assert(
      residentialStatusTitle.includes(expected_residentialStatusTitle),
      `Your details Where you live title ${residentialStatusTitle} does not include ${expected_residentialStatusTitle}`
    );
    console.log(
      `Your details Where you live title is:${residentialStatusTitle}`
    );
  }

  checkTimeAtCurrentAddressTitleText() {
    let timeAtCurrentAddressTitleText = browser
      .$(this.timeAtCurrentAddressTitle())
      .getText();
    let expected_timeAtCurrentAddress = "Time at current address";
    assert(
      timeAtCurrentAddressTitleText.includes(expected_timeAtCurrentAddress),
      `Your details Time at current address title ${timeAtCurrentAddressTitleText} does not include ${expected_timeAtCurrentAddress}`
    );
    console.log(
      `Your details Time at current address title is:${timeAtCurrentAddressTitleText}`
    );
  }

  checkTimeAtCurrentAddressYearTitleText() {
    let timeAtCurrentAddressYearTitleText = browser
      .$(this.timeAtCurrentAddressYearsTitle())
      .getText();
    let expected_timeAtCurrentAddressYearTitleText = "Year";
    assert(
      timeAtCurrentAddressYearTitleText.includes(
        expected_timeAtCurrentAddressYearTitleText
      ),
      `Your details Time at current address - year title ${timeAtCurrentAddressYearTitleText} does not include ${expected_timeAtCurrentAddressYearTitleText}`
    );
    console.log(
      `Your details Time at current address - year title is:${timeAtCurrentAddressYearTitleText}`
    );
  }

  checkTimeAtCurrentAddressMonthTitleText() {
    let timeAtCurrentAddressMonthTitleText = browser
      .$(this.timeAtCurrentAddressYearsMonthsTitle())
      .getText();
    let expected_timeAtCurrentAddressMonthTitleText = "Month";
    assert(
      timeAtCurrentAddressMonthTitleText.includes(
        expected_timeAtCurrentAddressMonthTitleText
      ),
      `Your details Time at current address - month title ${timeAtCurrentAddressMonthTitleText} does not include ${expected_timeAtCurrentAddressMonthTitleText}`
    );
    console.log(
      `Your details Time at current address - month title is:${timeAtCurrentAddressMonthTitleText}`
    );
  }

  checkNationalityListDisplaysExpectedList() {
    for (
      let i = 0;
      i < browser.$$(this.nationalityDropDownList()).length;
      i++
    ) {
      let nationality = nationalityData.nationality[i];
      let actualNationalityData = browser
        .$$(this.nationalityDropDownList())
        [i].getText();
      if (expect(nationality).equal(actualNationalityData)) {
        console.log(
          `The nationality dataset ${nationality} matches the applications dataset ${actualNationalityData}`
        );
      } else {
        throw new Error("There is an issue with the nationality dataset");
      }
    }
  }

  checkNumberOfDependentsListDisplaysExpectedList() {
    for (
      var i = 0;
      i < browser.$$(this.numberOfDependentsDropDownList()).length;
      i++
    ) {
      let dependents = dependentsData.dependents[i];
      let actualDependentsData = browser
        .$$(this.numberOfDependentsDropDownList())
        [i].getText();
      if (expect(dependents).equal(actualDependentsData)) {
        console.log(
          `The dependents dataset ${dependents} matches the applications dataset ${actualDependentsData}`
        );
      } else {
        throw new Error("There is an issue with the dependent dataset");
      }
    }
  }

  checkNumberResidentialStatusListDisplaysExpected() {
    for (
      var i = 0;
      i < browser.$$(this.residentialStatusDropDownList()).length;
      i++
    ) {
      let residential = residentialData.residential[i];
      let actualResidentialData = browser
        .$$(this.residentialStatusDropDownList())
        [i].getText();
      if (expect(residential).equal(actualResidentialData)) {
        console.log(
          `The residential dataset ${residential} matches the applications dataset ${actualResidentialData}`
        );
      } else {
        throw new Error("There is an issue with the residential dataset");
      }
    }
  }

  checkMritalStatusListDisplaysExpectedList() {
    for (
      var i = 0;
      i < browser.$$(this.maritalStatusDropDownList()).length;
      i++
    ) {
      let marital = maritalData.marital_status[i];
      let actualMaritalData = browser
        .$$(this.maritalStatusDropDownList())
        [i].getText();
      if (expect(marital).equal(actualMaritalData)) {
        console.log(
          `The marital dataset ${marital} matches the applications dataset ${actualMaritalData}`
        );
      } else {
        throw new Error("There is an issue with the marital dataset");
      }
    }
  }

  checkTimeAtCurrentAddressYearsListDisplaysExpected() {
    for (var i = 0; i < 84; i++) {
      let data = i.toString();
      let expectedYearsCurrent = browser
        .$$(this.timeAtCurrentAddressYearsList())
        [i + 1].getText();

      if (expect(data).equal(expectedYearsCurrent)) {
        console.log(
          `The current years ${data} matches the applications current years ${expectedYearsCurrent}`
        );
      } else {
        throw new Error("There is an issue with the current years data");
      }
    }
  }

  checkTimeAtPreviousAddressYearsListDisplaysExpected() {
    for (var i = 0; i < 84; i++) {
      let data = i.toString();
      let expectedYearsPrevious = browser
        .$$(this.timeAtPreviousAddressYearsList())
        [i + 1].getText();

      if (expect(data).equal(expectedYearsPrevious)) {
        console.log(
          `The previous years ${data} matches the applications previous years ${expectedYearsPrevious}`
        );
      } else {
        throw new Error("There is an issue with the previous years data");
      }
    }
  }

  checkTimeAtCurrentAddressMonthsListDisplaysExpected(keyword) {
    for (var i = 0; i < 11; i++) {
      let data = i.toString();
      let expectedMonthsCurrent = browser
        .$$(this.timeAtCurrentAddressMonthsList())
        [i + 1].getText();
      if (expect(data).equal(expectedMonthsCurrent)) {
        console.log(
          `The current months ${data} matches the applications current months ${expectedMonthsCurrent}`
        );
      } else {
        throw new Error("There is an issue with the current months data");
      }
    }
  }

  checkTimeAtPreviousAddressMonthsListDisplaysExpected() {
    for (var i = 0; i < 11; i++) {
      let data = i.toString();
      let expectedMonthsPrevious = browser
        .$$(this.timeAtPreviousAddressMonthsList())
        [i + 1].getText();

      if (expect(data).equal(expectedMonthsPrevious)) {
        console.log(
          `The previous months ${data} matches the applications previous months ${expectedMonthsPrevious}`
        );
      } else {
        throw new Error("There is an issue with the previous months data");
      }
    }
  }

  checkStatusPageValidationErrorDisplays(message) {
    var expectedErrorMessage = message;
    if (
      message.includes(
        "Please select how long you’ve been at the current address."
      )
    ) {
      if (
        browser
          .$(this.lengthOfCurrentAddressErrorMessageValidation())
          .isExisting()
      ) {
        let actualAddressStatusErrorMessage = browser
          .$(this.lengthOfCurrentAddressErrorMessageValidation())
          .getText();
        expect(actualAddressStatusErrorMessage).equal(expectedErrorMessage);
      }
    } else if (
      message.includes(
        "Please select how long you’ve been at the previous address."
      )
    ) {
      if (
        browser
          .$(this.lengthOfPreviousAddressErrorMessageValidation())
          .isExisting()
      ) {
        let actualAddressStatusErrorMessage = browser
          .$(this.lengthOfPreviousAddressErrorMessageValidation())
          .getText();
        expect(actualAddressStatusErrorMessage).equal(expectedErrorMessage);
      }
    } else if (
      message.includes(
        "You must be less than 83 years old at the end of the loan term."
      )
    ) {
      let actualOlderAgeErrorMessage = browser
        .$(this.ageErrorMessageValidation())
        .getText();
      expect(actualOlderAgeErrorMessage).equal(expectedErrorMessage);
    } else if (
      message.includes(
        "We need your address for the previous 2 years to perform a credit check."
      )
    ) {
      let actualYearsErrorMessage = browser
        .$(this.currentAddressErrorValidation())
        .getText();
      expect(actualYearsErrorMessage).equal(expectedErrorMessage);
    } else if (
      message.includes("Please enter a valid email address.") ||
      message.includes("Please enter your email address.")
    ) {
      let actualEmailFormatErrorMessage = browser
        .$(this.emailFormatErrorMessageValidation())
        .getText();
      expect(actualEmailFormatErrorMessage).equal(expectedErrorMessage);
    } else if (message.includes("valid mobile phone number")) {
      let actualMobileFormatErrorMessage = browser
        .$(this.mobileFormatErrorMessageValidation())
        .getText();
      expect(actualMobileFormatErrorMessage).equal(expectedErrorMessage);
    } else if (
      message.includes(
        "You must be 18 years old or over in order to progress with your application."
      )
    ) {
      let actualAgeErrorMessage = browser
        .$(this.ageErrorMessageValidation())
        .getText();
      expect(actualAgeErrorMessage).equal(expectedErrorMessage);
    } else if (message.includes("Please enter either a House number or House name.")) {
      let actualPreviousHouseNameOrNumberErrorMessage = browser
          .$(this.previousAddressHouseNameOrNumberErrorMessage())
          .getText();
      browser
          .$(this.previousAddressHouseNameOrNumberErrorMessage())
          .scrollIntoView();
      expect(actualPreviousHouseNameOrNumberErrorMessage).equal(expectedErrorMessage);
    } else if (message.includes("Please enter house name.")) {
      let actualPreviousHouseNameErrorMessage = browser
        .$(this.previousAddressHouseNameErrorMessage())
        .getText();
      browser
        .$(this.previousAddressHouseNameErrorMessage())
        .scrollIntoView();
      expect(actualPreviousHouseNameErrorMessage).equal(expectedErrorMessage);
    } else if (message.includes("Please enter house number.")) {
      let actualPreviousHouseNumberErrorMessage = browser
          .$(this.previousAddressHouseNumberErrorMessage())
          .getText();
      browser
          .$(this.previousAddressHouseNumberErrorMessage())
          .scrollIntoView();
      expect(actualPreviousHouseNumberErrorMessage).equal(expectedErrorMessage);
    } else if (message.includes("Please enter street address.")) {
      let actualPreviousStreetErrorMessage = browser
        .$(this.previousStreetNameErrorMessage())
        .getText();
      browser.$(this.previousStreetNameErrorMessage()).scrollIntoView();
      expect(actualPreviousStreetErrorMessage).equal(expectedErrorMessage);
    } else if (message.includes("Please enter Town/city.")) {
      let actualPreviousTownErrorMessage = browser
        .$(this.previousTownErrorMessage())
        .getText();
      browser.$(this.previousTownErrorMessage()).scrollIntoView();
      expect(actualPreviousTownErrorMessage).equal(expectedErrorMessage);
    } else if (message.includes("Please enter postcode.")) {
      browser
        .$(this.previousPostCodeErrorMessage())
        .waitForDisplayed({ timeout: timeOut });
      let actualPreviousPostcodeErrorMessage = browser
        .$(this.previousPostCodeErrorMessage())
        .getText();
      browser.$(this.previousPostCodeErrorMessage()).scrollIntoView();
      expect(actualPreviousPostcodeErrorMessage).equal(expectedErrorMessage);
    } else if (
      message.includes("Please enter a valid date of birth.") ||
      message.includes("Please enter your date of birth.")
    ) {
      let actualDobErrorMessage = browser.$(this.dobErrorMessage()).getText();
      browser.$(this.dobErrorMessage()).scrollIntoView();
      expect(actualDobErrorMessage).equal(expectedErrorMessage);
    } else if (message.includes("Please enter your email address.")) {
      let actualEmailFormatErrorMessage = browser
        .$(this.emailFormatErrorMessageValidation())
        .getText();
      expect(actualEmailFormatErrorMessage).equal(expectedErrorMessage);
    } else if (message.includes("Please enter your mobile phone number.")) {
      let actualMobileErrorMessage = browser
        .$(this.mobileErrorMessage())
        .getText();
      browser.$(this.mobileErrorMessage()).scrollIntoView();
      expect(actualMobileErrorMessage).equal(expectedErrorMessage);
    } else if (
      message.includes(
        "Please enter a valid House number, between 1 and 10 characters"
      )
    ) {
      let actualPreviousHouseNumberErrorMessage = browser
        .$(this.previousAddressHouseNumberErrorMessage())
        .getText();
      browser
        .$(this.previousAddressHouseNumberErrorMessage())
        .scrollIntoView();
      expect(actualPreviousHouseNumberErrorMessage).equal(expectedErrorMessage);
    } else if (
        message.includes(
            "Please enter a valid Street name, between 1 and 40 characters."
        )
    ) {
      let actualPreviousStreetNameErrorMessage = browser
          .$(this.previousStreetNameErrorMessage())
          .getText();
      browser
          .$(this.previousStreetNameErrorMessage())
          .scrollIntoView();
      expect(actualPreviousStreetNameErrorMessage).equal(expectedErrorMessage);
    } else if (
        message.includes(
            "Please enter a valid Town/city, between 1 and 40 characters."
        )
    ) {
      let actualPreviousTownErrorMessage = browser
          .$(this.previousTownErrorMessage())
          .getText();
      browser
          .$(this.previousTownErrorMessage())
          .scrollIntoView();
      expect(actualPreviousTownErrorMessage).equal(expectedErrorMessage);
    } else if (
        message.includes(
            "Please enter a valid County,  between 1 and 30 characters."
        )
    ) {
      let actualPreviousCountyErrorMessage = browser
          .$(this.previousCountyErrorMessage())
          .getText();
      browser
          .$(this.previousCountyErrorMessage())
          .scrollIntoView();
      console.log(actualPreviousCountyErrorMessage);
      expect(browser.$(this.previousCountyErrorMessage()).isExisting()).eql(true);
      // PARTIAL CODE DOES NOT WORK ON SAFARI JUST CHECKING FOR TEXT EXISTENCE
      // expect(actualPreviousCountyErrorMessage).equal(expectedErrorMessage);
    } else if (
        message.includes(
            "Please enter a valid postcode, this must be within the UK."
        )
    ) {
      let actualPreviousPostcodeErrorMessage = browser
          .$(this.previousPostCodeErrorMessage())
          .getText();
      browser
          .$(this.previousPostCodeErrorMessage())
          .scrollIntoView();
      expect(actualPreviousPostcodeErrorMessage).equal(expectedErrorMessage);
    } else {
      throw new Error(
        "The message is: " + message + "but this message is not displayed"
      );
    }
  }

  checkErrorValidationMessageDoesNotExist(message) {
    if (message.includes("Please enter house number.")) {
      expect(
        !browser
          .$(this.previousAddressHouseNumberErrorMessage())
          .isExisting()
      ).eql(true);
    } else if (message.includes("Please enter house name.")) {
      expect(
          !browser
              .$(this.previousAddressHouseNameErrorMessage())
              .isExisting()
      ).eql(true);
    } else if (message.includes("Please enter either a House number or House name.")) {
      expect(
          !browser
              .$(this.previousAddressHouseNameOrNumberErrorMessage())
              .isExisting()
      ).eql(true);
    } else if (message.includes("Please enter street address.")) {
      expect(
        !browser.$(this.previousStreetNameErrorMessage()).isExisting()
      ).eql(true);
    } else if (message.includes("Please enter Town/city.")) {
      expect(!browser.$(this.previousTownErrorMessage()).isExisting()).eql(
        true
      );
    } else if (message.includes("Please enter postcode.")) {
      expect(!browser.$(this.previousPostCodeErrorMessage()).isExisting()).eql(
        true
      );
    } else if (
      message.includes(
        "Please enter a valid House number, between 1 and 10 characters"
      )
    ) {
      expect(
        !browser
          .$(this.previousAddressHouseNumberErrorMessage())
          .isExisting()
      ).eql(true);
    } else if (
        message.includes(
            "Please enter a valid Street name, between 1 and 40 characters."
        )
    ) {
      expect(
          !browser
              .$(this.previousStreetNameErrorMessage())
              .isExisting()
      ).eql(true);
    } else if (
        message.includes(
            "Please enter a valid Town/city, between 1 and 40 characters."
        )
    ) {
      expect(
          !browser
              .$(this.previousTownErrorMessage())
              .isExisting()
      ).eql(true);
    } else if (
        message.includes(
            "Please enter a valid County,  between 1 and 30 characters."
        )
    ) {
      expect(
          !browser
              .$(this.previousCountyErrorMessage())
              .isExisting()
      ).eql(true);
    } else if (
        message.includes(
            "Please enter a valid postcode, this must be within the UK."
        )
    ) {
      expect(
          !browser
              .$(this.previousPostCodeErrorMessage())
              .isExisting()
      ).eql(true);
    } else {
      throw new Error("The error is still displayed on screen please check");
    }
  }

  clickOnNationalityDropDown() {
    browser.$(this.nationalityFieldButton()).click();
  }

  clickOnMaritalStatusDropDown() {
    browser.$(this.maritalStatusFieldButton()).click();
  }

  clickNoDependentsDropDown() {
    browser.$(this.numberOfDependentsFieldButton()).click();
  }
  clickResidentialStatusDropDown() {
    browser.$(this.residentialStatusFieldButton()).click();
  }

  clickTimeAtCurrentAddressYears() {
    browser.$(this.timeAtCurrentAddressYearsFieldButton()).click();
  }

  clickTimeAtPreviousAddressYears() {
    browser.$(this.timeAtCurrentAddressYearsFieldButton()).click();
    browser
      .$(this.timeAtCurrentAddressYearsFieldButton())
      .selectByVisibleText("1");
    browser.$(this.timeAtPreviousAddressYearsFieldButton()).click();
  }

  clickTimeAtCurrentAddressMonths() {
    browser.$(this.timeAtCurrentAddressMonthsFieldButton()).click();
  }

  clickTimeAtPreviousAddressMonths() {
    browser.$(this.timeAtPreviousAddressMonthsFieldButton()).click();
  }

  populatedAllMainPageFields(
    email,
    mobile,
    dd,
    mm,
    yyyy,
    nationality,
    marital_status,
    dependents,
    residential,
    currentAddressYears,
    currentAddressMonths
  ) {
    browser.waitUntil(
      () => browser.$(this.emailAddressInputField()).isExisting(),
      {
        timeout: timeOut,
      }
    );
    browser
      .$(this.emailAddressInputField())
      .setValue(clearInputField(browser.$(this.emailAddressInputField())));
    browser.$(this.emailAddressInputField()).setValue(email);
    console.log(`Entering the email address as ${email}`);
    browser
      .$(this.mobilePhoneNumberInputField())
      .setValue(clearInputField(browser.$(this.mobilePhoneNumberInputField())));
    browser.$(this.mobilePhoneNumberInputField()).setValue(mobile);
    console.log(`Entering the phone number as ${mobile}`);
    browser
      .$(this.dayInputField())
      .setValue(clearInputField(browser.$(this.dayInputField())));
    browser.$(this.dayInputField()).setValue(dd);
    console.log(`Entering the day as ${dd}`);
    browser
      .$(this.monthInputField())
      .setValue(clearInputField(browser.$(this.monthInputField())));
    browser.$(this.monthInputField()).setValue(mm);
    console.log(`Entering the month as ${mm}`);
    browser
      .$(this.yearInputField())
      .setValue(clearInputField(browser.$(this.yearInputField())));
    browser.$(this.yearInputField()).setValue(yyyy);
    console.log(`Entering the year as ${yyyy}`);
    browser.$(this.nationalityFieldButton()).scrollIntoView();
    browser.$(this.nationalityFieldButton()).selectByVisibleText(nationality);
    console.log(`Entering the nationality as ${nationality}`);
    browser.$(this.maritalStatusFieldButton()).scrollIntoView();
    browser
      .$(this.maritalStatusFieldButton())
      .selectByVisibleText(marital_status);
    console.log(`Entering the marital status as ${marital_status}`);
    browser.$(this.numberOfDependentsFieldButton()).scrollIntoView();
    browser
      .$(this.numberOfDependentsFieldButton())
      .selectByVisibleText(dependents);
    console.log(`Entering the number of dependents as ${dependents}`);
    browser.$(this.residentialStatusFieldButton()).scrollIntoView();
    browser
      .$(this.residentialStatusFieldButton())
      .selectByVisibleText(residential);
    console.log(`Entering the residential status as ${residential}`);
    browser
      .$(this.timeAtCurrentAddressYearsFieldButton())
      .selectByVisibleText(currentAddressYears);
    console.log(
      `Entering the time at current address years as ${currentAddressYears}`
    );
    browser
      .$(this.timeAtCurrentAddressMonthsFieldButton())
      .selectByVisibleText(currentAddressMonths);
    console.log(
      `Entering the time at current address months as ${currentAddressMonths}`
    );
  }

  enterTimeAtCurrentAddressYears(currentAddressYears) {
    browser.$(this.timeAtCurrentAddressYearsFieldButton()).scrollIntoView();
    browser
      .$(this.timeAtCurrentAddressYearsFieldButton())
      .selectByVisibleText(currentAddressYears);
    console.log(
      `Entering the time at current address years as ${currentAddressYears}`
    );
  }

  enterTimeAtCurrentAddressMonths(currentAddressMonths) {
    browser
      .$(this.timeAtCurrentAddressMonthsFieldButton())
      .selectByVisibleText(currentAddressMonths);
    console.log(
      `Entering the time at current address months as ${currentAddressMonths}`
    );
  }

  enterTimeAtPreviousAddressYears(previousAddressYears) {
    browser.$(this.timeAtPreviousAddressYearsFieldButton()).scrollIntoView();
    browser
      .$(this.timeAtPreviousAddressYearsFieldButton())
      .selectByVisibleText(previousAddressYears);
    console.log(
      `Entering the time at previous address years as ${previousAddressYears}`
    );
  }

  enterTimeAtPreviousAddressMonths(previousAddressMonths) {
    browser
      .$(this.timeAtPreviousAddressMonthsFieldButton())
      .selectByVisibleText(previousAddressMonths);
    console.log(
      `Entering the time at previous address months as ${previousAddressMonths}`
    );
  }

  enterEmailAddress(email) {
    if (email == "null" || email == "undefined") {
      browser
        .$(this.emailAddressInputField())
        .setValue(clearInputField(browser.$(this.emailAddressInputField())));
    } else {
      browser
        .$(this.emailAddressInputField())
        .setValue(clearInputField(browser.$(this.emailAddressInputField())));
      browser.$(this.emailAddressInputField()).setValue(email);
      console.log(`Entering the email address as ${email}`);
    }
  }

  enterMobileNumber(mobile) {
    browser
      .$(this.mobilePhoneNumberInputField())
      .setValue(clearInputField(browser.$(this.mobilePhoneNumberInputField())));
    browser.$(this.mobilePhoneNumberInputField()).setValue(mobile);
    console.log(`Entering the phone number as ${mobile}`);
  }

  enterDateOfBirth(dd, mm, yyyy) {
    if (
      dd === null ||
      (dd === undefined && mm === null) ||
      (mm === undefined && yyyy === null) ||
      yyyy === undefined
    ) {
      browser
        .$(this.dayInputField())
        .setValue(clearInputField(browser.$(this.dayInputField())));
      browser
        .$(this.monthInputField())
        .setValue(clearInputField(browser.$(this.monthInputField())));
      browser
        .$(this.yearInputField())
        .setValue(clearInputField(browser.$(this.yearInputField())));
    } else {
      browser
        .$(this.dayInputField())
        .setValue(clearInputField(browser.$(this.dayInputField())));
      browser.$(this.dayInputField()).setValue(dd);
      console.log(`Entering the day as ${dd}`);
      browser
        .$(this.monthInputField())
        .setValue(clearInputField(browser.$(this.monthInputField())));
      browser.$(this.monthInputField()).setValue(mm);
      console.log(`Entering the month as ${mm}`);
      browser
        .$(this.yearInputField())
        .setValue(clearInputField(browser.$(this.yearInputField())));
      browser.$(this.yearInputField()).setValue(yyyy);
    }
    browser
      .$(this.monthInputField())
      .setValue(clearInputField(browser.$(this.monthInputField())));
    browser.$(this.monthInputField()).setValue(mm);
    console.log(`Entering the month as ${mm}`);
    browser
      .$(this.yearInputField())
      .setValue(clearInputField(browser.$(this.yearInputField())));
    browser.$(this.yearInputField()).setValue(yyyy);
    console.log(`Entering the year as ${yyyy}`);
  }

  verifyYourDetailsAndWherePageUrl() {
    expect(browser.getUrl()).contains("/your-details");
  }

  setPreviousAddressDetails(
      house_name,
      house_number,
      street_name,
      town,
      county,
      postcode,
      previousAddressYears,
      previousAddressMonths
  ) {
    browser
        .$(this.previousAddressHouseName())
        .setValue(
            clearInputField(browser.$(this.previousAddressHouseName()))
        );
    browser
        .$(this.previousAddressHouseName())
        .setValue(house_name);
    console.log(
        `Entering the previous address house name as ${house_name}`
    );
    browser
      .$(this.previousAddressHouseNumber())
      .setValue(
        clearInputField(browser.$(this.previousAddressHouseNumber()))
      );
    browser
      .$(this.previousAddressHouseNumber())
      .setValue(house_number);
    console.log(
      `Entering the previous address house number as ${house_number}`
    );
    browser
      .$(this.previousStreetName())
      .setValue(clearInputField(browser.$(this.previousStreetName())));
    browser.$(this.previousStreetName()).setValue(street_name);
    console.log(`Entering the previous address street name as ${street_name}`);
    browser.$(this.previousTown()).scrollIntoView();
    browser
      .$(this.previousTown())
      .setValue(clearInputField(browser.$(this.previousTown())));
    browser.$(this.previousTown()).setValue(town);
    console.log(`Entering the previous address town as ${town}`);
    browser
      .$(this.previousCounty())
      .setValue(clearInputField(browser.$(this.previousCounty())));
    browser.$(this.previousCounty()).setValue(county);
    console.log(`Entering the previous address county as ${county}`);
    browser
      .$(this.previousPostCode())
      .setValue(clearInputField(browser.$(this.previousPostCode())));
    browser.$(this.previousPostCode()).setValue(postcode);
    console.log(`Entering the previous address postcode as ${postcode}`);
    browser
      .$(this.timeAtPreviousAddressYearsFieldButton())
      .selectByVisibleText(previousAddressYears);
    console.log(
      `Entering the previous address years as ${previousAddressYears}`
    );
    browser
      .$(this.timeAtPreviousAddressMonthsFieldButton())
      .selectByVisibleText(previousAddressMonths);
    console.log(
      `Entering the previous address months as ${previousAddressMonths}`
    );
  }
  populatePreviousAddressDetailsWithBlanks(field) {
    if (field === "House Name") {
      this.setPreviousAddressDetails(
        null,
        null,
        "Great Street",
        "BrickTown",
        "Kent",
        "SE19 6PY",
        1,
        0
      );
    } else if (field === "House Number") {
      this.setPreviousAddressDetails(
          null,
          null,
          "Great Street",
          "BrickTown",
          "Kent",
          "SE19 6PY",
          1,
          0
      );
    } else if (field === "Street") {
      this.setPreviousAddressDetails(
          "Great House",
          "100",
        null,
        "BrickTown",
        "Kent",
        "SE19 6PY",
        1,
        0
      );
    } else if (field === "Town") {
      this.setPreviousAddressDetails(
          "Great House",
        "100",
        "Great Street ",
        null,
        "Kent",
        "SE19 6PY",
        1,
        0
      );
    } else if (field === "Postcode") {
      this.setPreviousAddressDetails(
          "Great House",
        "100",
        "Great Street ",
        "BrickTown",
        "Kent",
        null,
        1,
        0
      );
    } else {
      throw new Error("The field you have specified does not exist");
    }
  }

  correctPreviousAddressFieldError(field) {
    if (field === "House Number") {
      browser
        .$(this.previousAddressHouseNumber())
        .setValue(
          clearInputField(browser.$(this.previousAddressHouseNumber()))
        );
      browser.$(this.previousAddressHouseNumber()).setValue("100");
    } else if (field === "House Name") {
      browser
          .$(this.previousAddressHouseName())
          .setValue(
              clearInputField(browser.$(this.previousAddressHouseName()))
          );
      browser.$(this.previousAddressHouseName()).setValue("Great House");
    } else if (field === "Street") {
      browser
          .$(this.previousStreetName())
          .setValue(
              clearInputField(browser.$(this.previousStreetName()))
          );
      browser.$(this.previousStreetName()).setValue("New Street");
    } else if (field === "Town") {
      browser
          .$(this.previousTown())
          .setValue(
              clearInputField(browser.$(this.previousTown()))
          );
      browser.$(this.previousTown()).setValue("UpTown");
    } else if (field === "County") {
      browser
          .$(this.previousCounty())
          .setValue(
              clearInputField(browser.$(this.previousCounty()))
          );
      browser.$(this.previousCounty()).setValue("kent");
    }else if (field === "Postcode") {
      browser
          .$(this.previousPostCode())
          .setValue(
              clearInputField(browser.$(this.previousPostCode()))
          );
      browser.$(this.previousPostCode()).setValue("SE19 4PP");
    } else {
      throw new Error("The field you have specified does not exist");
    }
  }
  checkCustomerAddressLineOne(expectedAddressLineOne) {
    let addressLineOne = browser.$(this.addressLineOne()).getText();
    assert(
      addressLineOne.includes(expectedAddressLineOne),
      `Customer last name ${addressLineOne} does not include ${expectedAddressLineOne}`
    );
  }

  checkCustomerAddressLineTwo(expectedAddressLineTwo) {
    if (expectedAddressLineTwo === null) {
      console.log("Customer does not have a second address line");
    } else {
      let addressLineTwo = browser.$(this.addressLineTwo()).getText();
      assert(
        addressLineTwo.includes(expectedAddressLineTwo),
        `Customer last name ${addressLineTwo} does not include ${expectedAddressLineTwo}`
      );
    }
  }

  checkCustomerPostCode(expectedPostcode) {
    let customerPostCode = browser.$(this.postCode()).getText();
    assert(
      customerPostCode.includes(expectedPostcode),
      `Customer last name ${customerPostCode} does not include ${expectedPostcode}`
    );
  }

  checkCorrectAboutYouAndWhereYouLiveContentIsDisplayed() {
    this.aboutYouText();
    this.checkEmailAddressTitle();
    this.checkEmailAddressInputFieldTitle();
    this.checkMobilePhoneNumberTitle();
    this.checkMobilePhoneNumberInputFieldTitle();
    this.checkDateOfBirthTitle();
    this.checkDateOfBirthDayFieldTitle();
    this.checkDateOfBirthMonthFieldTitle();
    this.checkDateOfBirthYearFieldTitle();
    this.checkDateOfBirthDayInputTitle();
    this.checkDateOfBirthMonthInputTitle();
    this.checkDateOfBirthYearInputTitle();
    this.checkNationalityTitle();
    this.checkMaritalStatusTitleText();
    this.checkNumberOfDependentsTitleText();
    this.checkWhereYouLiveTitleText();
    this.checkResidentialStatusTitleText();
    this.checkTimeAtCurrentAddressTitleText();
    this.checkTimeAtCurrentAddressYearTitleText();
    this.checkTimeAtCurrentAddressMonthTitleText();
    verifyLeaveApplicationButtonText();
    verifyContinueApplicationButtonText();
  }

  checkPhoneNumberDisplayedInCorrectFormat(expMobileNumber) {
    let actualMobileNumber = browser
      .$(this.mobilePhoneNumberInputField())
      .getValue();
    expect(actualMobileNumber).to.eql(expMobileNumber);
  }

  checkCorrectCustomerAddressDetailsAreDisplayed(
    expectedAddressLineOne,
    expectedAddressLineTwo,
    expectedPostcode
  ) {
    this.checkCustomerAddressLineOne(expectedAddressLineOne);
    this.checkCustomerAddressLineTwo(expectedAddressLineTwo);
    this.checkCustomerPostCode(expectedPostcode);
  }

  setPreviousAddressDetailsForOptionalFields(field) {
    if (field === "Flat Number") {
      this.setPreviousAddressDetailsWithFlatNumber(
          null,
          "Great House",
          "96",
          "Great Street",
          "BrickTown",
          "Kent",
          "SE19 6PY",
          1,
          0
      );
    } else if (field === "Street Name") {
      this.setPreviousAddressDetails(
          "Great House",
          "96",
          "",
          "BrickTown",
          "Kent",
          "SE19 6PY",
          1,
          1
      );
    } else if (field === "County") {
      this.setPreviousAddressDetails(
          "Great House",
          "96",
          "Great Street",
          "BrickTown",
          " ",
          "SE19 6PY",
          1,
          1
      );
    } else {
      throw new Error("The field you have specified does not exist");
    }
  }

  setPreviousAddressDetailsWithIncorrectFormat(field) {
    if (field === "House Number") {
      this.setPreviousAddressDetails(
          "Great House",
          "$£@",
          "Great Street",
          "BrickTown",
          "Kent",
          "SE19 6PY",
          1,
          1
      );
    } else if (field === "Street") {
      this.setPreviousAddressDetails(
          "Great House",
          "96",
          "$£@%%%%***",
          "BrickTown",
          "Kent",
          "SE19 6PY",
          1,
          1
      );
    } else if (field === "Town") {
      this.setPreviousAddressDetails(
          "Great House",
          "96",
          "Great Street",
          "$£@%%%%***",
          "Kent",
          "SE19 6PY",
          1,
          1
      );
    } else if (field === "County") {
      this.setPreviousAddressDetails(
          "Great House",
          "96",
          "Great Street",
          "BrickTown",
          "$£@%%%%***",
          "SE19 6PY",
          1,
          1
      );
    } else if (field === "Postcode") {
      this.setPreviousAddressDetails(
          "Great House",
          "96",
          "Great Street",
          "BrickTown",
          "Kent",
          "1234&",
          1,
          1
      );
    } else {
      throw new Error("The field you have specified does not exist");
    }
  }

  setPreviousAddressDetailsWithFlatNumber(
      flat_number,
      house_name,
      house_number,
      street_name,
      town,
      county,
      postcode,
      previousAddressYears,
      previousAddressMonths
  ) {
    browser
        .$(this.previousAddressFlatNumber())
        .setValue(
            clearInputField(browser.$(this.previousAddressFlatNumber()))
        );
    browser
        .$(this.previousAddressFlatNumber())
        .setValue(flat_number);
    console.log(
        `Entering the previous address flat number as ${flat_number}`
    );

    this.setPreviousAddressDetails(
        house_name,
        house_number,
        street_name,
        town,
        county,
        postcode,
        previousAddressYears,
        previousAddressMonths
    );

  }
}

export default new AboutYouAndWhereYouLivePage();
