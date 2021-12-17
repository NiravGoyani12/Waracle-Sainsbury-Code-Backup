@FPP-1028 @FPP-2131
Feature: Create Error Validation for Check my application - Validate bank account details - Non existing sort code and bank account number

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

  Scenario: Customer is on the Check my application screen, clicks to edit your financials, has input an invalid bank account number within maximum number of retries
    When The customer has input non existing bank account number
    And The customer clicks on done button
    Then The customer will be presented with the error message:Sorry, we can’t validate your details.
    And The customer will not progress

  Scenario: Customer is on the Check my application screen, clicks to edit your financials, has input an invalid bank account number, and has reached the maximum number of retries
    When The customer has input non existing bank account number
    And The customer clicks on done button
    And The customer will be presented with the error message:Sorry, we can’t validate your details.
    And The customer clicks on done button
    Then The customer will be presented with the error message:Sorry, we can’t validate your details.
    And The customer clicks on done button
    And The customer will be presented with the error message:We're sorry, we can't confirm your bank account details right now.
    And The customer will be presented with the error message:You can always choose another way to pay from the checkout.
    And The customer will not progress
    And The go to checkout button will be displayed
    And I click on the modal button leave application
    Then I proceed to Argos Trolley

  Scenario: Customer is on the Check my application screen, clicks to edit your financials, has input an invalid sort code within maximum number of retries
    When The customer has input non existing sort code
    And The customer clicks on done button
    Then The customer will be presented with the error message:Sorry, we can’t validate your details.
    And The customer will not progress

  Scenario: Customer is on the Check my application screen, clicks to edit your financials, has input an invalid sort code, and has reached the maximum number of retries
    When The customer has input non existing sort code
    And The customer clicks on done button
    Then The customer will be presented with the error message:Sorry, we can’t validate your details.
    And The customer will not progress
    And The customer clicks on done button
    And The customer clicks on done button
    Then The customer will be presented with the error message:We're sorry, we can't confirm your bank account details right now.
    And The customer will be presented with the error message:You can always choose another way to pay from the checkout.
    And The customer will not progress
    And The go to checkout button will be displayed
    And I click on the modal button leave application
    Then I proceed to Argos Trolley