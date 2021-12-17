@FPP-213 @FPP-2771
Feature:Validation for Check your application - About you and Where you live section (Pt2 of 2)

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
    And The customer clicks to edit About you section

  Scenario: Customer has clicked to edit About you and Where you live section, has entered a previous address history and wants to progress with their application (regardless of time spent at both addresses)
    When The customer has populated current Years and Months at current address as 1,0
    And The customer will be able to capture their Previous address
    And The customer clicks on done button
    And The edit link will be displayed for Your financials section
    And The customer clicks on continue application button
    And The stage 3 holding page is displayed
    Then The customer proceed to next screen - Your quote

  Scenario: Customer has clicked to edit About you and Where you live section, and edits that they have lived in current address for less than 2 years.
    When The customer has populated current Years and Months at current address as 1,0
    And The customer clicks on done button
    Then The customer will be presented with the following validation error:We need your address for the previous 2 years to perform a credit check.
    And The customer is presented with the Previous address field look up

  Scenario: Customer is required to input previous address history - happy path
    When The customer has populated current Years and Months at current address as 1,0
    And The customer will be able to capture their Previous address
    And The customer clicks on done button
    And The edit link will be displayed for Your financials section
    Then Display previous address content as described in the table 1 for fpp86

  Scenario: Customer leaves optional field blank from Previous address capture
    When The customer has populated current Years and Months at current address as 1,0
    And The customer completes mandatory previous address fields only and leaves County blank
    And The customer clicks on done button
    And The edit link will be displayed for Your financials section
    Then Display previous address content without county as described in the table 1 for fpp86

  Scenario: Customer is prompted to enter Previous address but leaves one or more Previous address mandatory field(s) blank - unhappy path
    When The customer has populated current Years and Months at current address as 1,0
    And The customer leaves House Name mandatory field blank
    And The customer clicks on done button
    Then The customer will be presented with the following validation error:Please enter house name.
    When The customer corrects the error against the mandatory House Name
    Then The error validation message will disappear for Please enter house name.
    When The customer clicks on done button
    And The edit link will be displayed for Your financials section
    Then The customer will be able to proceed with their FPP application.

  Scenario: Customer captures previous address in an incorrect format (unhappy path)
    When The customer has populated current Years and Months at current address as 1,0
    When The customer inputs incorrect House Number mandatory field in previous address
    When The customer clicks on done button
    Then The customer will be presented with the following validation error:Please enter a valid House number, between 1 and 10 characters.
    When The customer corrects the error against the mandatory House Number
    Then The error validation message will disappear for Please enter a valid House number, between 1 and 10 characters.
    When The customer clicks on done button
    And The edit link will be displayed for Your financials section
    Then The customer will be able to proceed with their FPP application.

  Scenario: Customer has clicked to edit About you and Where you live section, wants to progress with their FPP application, but has edited 0 for Years at previous address and 0 for Months at previous address - unhappy flow
    When The customer has populated current Years and Months at current address as 1,0
    And The customer has populated previous Years and Months at previous address as 0,0
    When The customer clicks on done button
    Then The customer will be presented with the following validation error:Please select how long you’ve been at the current address.
    And The customer will not progress past the check my application screen

  Scenario:Customer has clicked to edit About you and Where you live section, has captured Time at current address as being less than 2 years unintentionally, which has prompted the requirement for their Previous address history. Customer starts to input their Previous address history and corrects their Time at current address to 2 years or more - happy flow
    When The customer has populated current Years and Months at current address as 1,0
    And The customer will be able to capture their Previous address
    And The customer has populated previous Years and Months at previous address as 0,0
    When The customer has populated current Years and Months at current address as 2,0
    Then The Previous address details including Time at previous address will disappear or be hidden from the customer
    When The customer has populated current Years and Months at current address as 1,0
    Then The Previous address details including Time at previous address will re appear
    And Details edited in the Previous address details will have been persisted including Time at previous address
