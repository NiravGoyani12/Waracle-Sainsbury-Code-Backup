@FPP-186
Feature: Validation for Check your application - Your financials section

  As a Customer, I want to be able to edit and have my details validated,
  so that I can correct where appropriate in order to proceed with my application.

  Background:
    Given The customer has an application setup from Argos checkout
    And The customer navigates to your details screen
    And The customer enters mobile number with spaces within the field as 07898909897
    And The customer clicks on continue application button
    And The customer has populated all field inputs and drop downs fields Employment status Occupation
    And The customer clicks on continue application button
    And The customer has populated all field inputs and drop downs fields correctly for holding page journey
    And The customer clicks on continue application button
    And  The customer will progress to the next screen - Check Your Application
    And The customer has clicked to edit the Your financials section

 Scenario: Customer has clicked to edit Your financials section, has updated one or more fields, and clicks to proceed with application - happy path
    And The customer has edited monthly mortgage rent within the field as 302
    When The customer clicks on done button
    And The edit link will be displayed for Your financials section
    And The customer clicks on continue application button
    And The stage 3 holding page is displayed
    Then The customer proceed to next screen - Your quote

  Scenario: Customer clicks to edit Your financials section, updates this section, and wants to progress with their FPP application - happy flow
    When The customer has populated all field inputs and drop downs fields correctly
    And The customer clicks on done button
    And The edit link will be displayed for Your financials section
    Then The customer can see your financials updated
    And The edit link for the Your financials section will re-appear
    And The done button will no longer be displayed

  Scenario: Customer has edited by inputting Yearly income before tax as £100,000 or more
    When The customer has input their Yearly income before tax is £100,000 or more
    Then The customer will be presented with the error message:Please ensure this value is correct.
    And The customer clicks on done button
    And The edit link will be displayed for Your financials section
    And The customer will be able to proceed with their FPP application.

  Scenario: Customer clicks to edit Your financials section, updates by inputting an invalid sort code - unhappy flow
    When The customer has edited the sort code to be an invalid sort code
    And The customer clicks on done button
    Then The customer will be presented with the error message:Please enter a valid sort code.
    And The customer will not progress

  Scenario: Customer clicks to edit Your financials section, updates by inputting an invalid bank account number - unhappy flow
    When The customer has edited by inputting an invalid bank account number
    And The customer clicks on done button
    Then The customer will be presented with the error message:Please enter a valid bank account number.
    And The customer will not progress

  Scenario: Customer clicks to edit Your financials section, edits by inputting a sort code with invalid format - unhappy flow
    When The customer has edited by inputting sort code with incorrect format
    And The customer clicks on done button
    Then The customer will be presented with the error message:Please enter a valid sort code.
    And The customer will not progress

  Scenario: Customer clicks to edit Your financials section, edits by inputting a bank account number with invalid format - unhappy flowAnd The customer has clicked to edit the Your financials section
    When The customer has edited by inputting bank account number with incorrect format
    And The customer clicks on done button
    Then The customer will be presented with the error message:Please enter a valid bank account number.
    And The customer will not progress

  Scenario: Customer has clicked to edit Your financials section, has updated  Monthly mortgage / rent with an invalid entry - unhappy path
    When The customer inputs monthly mortgage rent as being greater than 999,999
    And The customer clicks on done button
    Then The customer will be presented with the error message:Please enter a valid amount in whole pounds, up to 6 digits, without decimals.

  Scenario: Customer has clicked to edit Your financials section, has updated  Annual income with an invalid entry - unhappy path
    When The customer inputs annual income as being greater than 9,999,999
    And The customer clicks on done button
    Then The customer will be presented with the error message:Please enter a valid amount in whole pounds, up to 7 digits, without decimals.

  Scenario: Customer has clicked to edit Your financials section, has updated date bank account was opened as an invalid date - unhappy path
    When The customer input a numerical value for the year their bank account was opened before DOB
    And The customer clicks on done button
    Then The customer will be presented with the error message:Please enter a valid date.

  Scenario: Customer has clicked to edit Your financials section, has updated Month bank account was opened to an invalid month value
    When The customer input a numerical value for Month bank account is opened as being >12
    And The customer clicks on done button
    Then The customer will be presented with the error message:Please enter a valid date.

#THESE SCENARIOS BELOW HAVE ISSUES ON IOS WILL RESOLVE
#  Scenario: Customer has cleared date of bank account opened
#    And The customer has cleared the month when their bank account was opened
#    And The customer clicks on done button
#    Then The customer will be presented with the error message:Please enter a valid date.
#
#  Scenario: Customer clicks to edit Your financials section, clears one or more mandatory fields blank / unpopulated, and wants to progress with their FPP application - unhappy flow
#    When The customer has edited by inputting sort code with blank value
#    And The customer clicks on done button
#    Then The customer will be presented with the error message:Please enter your sort code.
#    When The customer has corrected the error of bank sort code field whilst their are still in the field
#    Then The validation message and red box border will disappear