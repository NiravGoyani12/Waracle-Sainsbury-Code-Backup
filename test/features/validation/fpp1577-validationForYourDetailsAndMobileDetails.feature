@FPP-1577
Feature: Update validation criteria for user input fields in front end

  As a Customer,I want to enter the valid mobile phone number and bank account number,
  so that I proceed with my loan application.

  Background:
    Given The customer has an application setup from Argos checkout
    When The customer navigates to your details screen
    
  Scenario: Entering a mobile phone number
    When The customer enters mobile number with spaces within the field as 07538 92 61 98
    And The customer clicks on continue application button
    Then The customer will progress to the next screen Your Occupation

  Scenario: Navigating back to previous screen and viewing mobile phone number
    When The customer enters mobile number with spaces within the field as 07538 92 61 98
    And The customer clicks on continue application button
    And The customer navigates back to previous screen
    Then The phone number should be displayed in same input format as 07538 92 61 98

  Scenario: Viewing mobile phone number from Check my application screen
    When The customer enters mobile number with spaces within the field as 07538 92 61 98
    And The customer clicks on continue application button
    And The customer has populated all field inputs and drop downs fields Employment status Occupation
    And The customer clicks on continue application button
    And The customer has populated all field inputs and drop downs fields correctly
    And The customer clicks on continue application button
    And The customer clicks to edit About you section
    Then The phone number should be displayed in same input format as 07538 92 61 98

  Scenario: Bank account number must be 8 characters
    Given The customer navigates to your financials screen
    When The customer has populated all field inputs and drop downs fields correctly
    And The customer clicks on continue application button
    Then The customer will progress to the next screen - Check Your Application

  Scenario: Bank account number allows leading zeros
    Given The customer navigates to your financials screen
    When The customer has entered leading zero bank account number and drop downs fields correctly
    And The customer clicks on continue application button
    Then The customer will progress to the next screen - Check Your Application
