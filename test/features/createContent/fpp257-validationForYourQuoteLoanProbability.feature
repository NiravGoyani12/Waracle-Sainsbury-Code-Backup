@FFP-257 @FPP-2640
Feature: Validation for Your Quote - Loan Probability

  As a Customer, I want to be able to understand the impact on my credit file before
  consenting to a hard credit search so that I can choose to continue with my application.

  Background:
    Given The customer has an application setup from Argos checkout
    And The customer navigates to your details screen
    And The customer enters their details using the bypass strategy
    And The customer clicks on continue application button

  Scenario:Customer tried to continue without ticking checkbox, was presented with an error, and corrects the error to continue -Low probability
    And The customer has populated all field inputs and drop downs fields Employment status Occupation
    And The customer clicks on continue application button
    When The customer has populated all details with a low income
    And  The customer clicks on continue application button
    And  The customer will progress to the next screen - Check Your Application
    And  The customer clicks on continue application button
    And The stage 3 holding page is displayed
    And  The customer proceed to next screen - Your quote
    And  The customer clicks on continue application button
    And  The error message will appear
    And  The customer clicks on accept terms check box
    And  The error message will not display
    And The customer clicks on continue application button
    And The stage 4 holding page is displayed

  Scenario:Customer tried to continue without ticking checkbox, was presented with an error, and corrects the error to continue -High probability
    When The customer has populated all field inputs and drop downs fields Employment status Occupation
    And The customer clicks on continue application button
    And The customer has populated all field inputs and drop downs fields correctly for holding page journey
    And The customer clicks on continue application button
    And The customer will progress to the next screen - Check Your Application
    And The customer clicks on continue application button
    And The stage 3 holding page is displayed
    And The customer proceed to next screen - Your quote
    And The customer clicks on continue application button
    And  The error message will appear
    And  The customer clicks on accept terms check box
    And  The error message will not display
    And The customer clicks on continue application button
    And The stage 4 holding page is displayed

  Scenario: Customer attempts to progress from the Quote screen without populating credit check check box -High probability
    Then The customer has populated all field inputs and drop downs fields Employment status Occupation
    And The customer clicks on continue application button
    And The customer has populated all field inputs and drop downs fields correctly for holding page journey
    And The customer clicks on continue application button
    And The customer will progress to the next screen - Check Your Application
    And The customer clicks on continue application button
    And The stage 3 holding page is displayed
    And The customer proceed to next screen - Your quote
    And The customer clicks on continue application button
    Then The error message will appear

  Scenario: Customer populates credit check check box and clicks to continue -High probability
    And The customer has populated all field inputs and drop downs fields Employment status Occupation
    And The customer clicks on continue application button
    And The customer has populated all field inputs and drop downs fields correctly for holding page journey
    And The customer clicks on continue application button
    And The customer will progress to the next screen - Check Your Application
    And The customer clicks on continue application button
    And The stage 3 holding page is displayed
    And The customer proceed to next screen - Your quote
    And The customer clicks on continue application button
    And  The error message will appear
    When The customer clicks on accept terms check box
    And  The error message will not display
    And The customer clicks on continue application button
    And The stage 4 holding page is displayed
