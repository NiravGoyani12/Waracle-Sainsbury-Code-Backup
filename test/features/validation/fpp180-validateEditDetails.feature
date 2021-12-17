@FPP-180 @FPP-1393 @FPP1394 @FPP-1574
Feature: Edit of details
    As a Customer, I want to be able to edit my details presented to me,
    so that I can correct where appropriate in order to proceed with my application.

    Background:
        Given The customer has an application setup from Argos checkout
        And The customer navigates to review application screen

    @FPP-1574
    Scenario: Customer full name and address on my application page
        Then Customer title, first name and last name data on my application page is displayed from Argos check out
        And Customer current address details is displayed from Argos check out
        
    Scenario: Customer clicks on the edit link from ‘About you' section
        When The customer clicks to edit About you section
       Then Display the content as described in the table 1 for fpp180
        And The edit link will no longer be displayed for About you section
        And The done button is displayed

    Scenario: Customer clicks the edit link from ‘Your occupation’ section
        When The customer clicks to edit Your Occupation section
        Then The customer will be presented with the content as described in the table 2 for fpp180
        And The edit link will no longer be displayed for Your occupation section
        And The done button is displayed
        And The employer input field is not displayed

    Scenario: Customer clicks the edit link from ‘Your financials’ section
        When The customer has clicked to edit the Your financials section
        Then The customer will be presented with the content as described in fpp180
        And The edit link will no longer be displayed for Your financials section
        And The done button is displayed

    Scenario: Customer reviews contents of drop down - Nationality
        When The customer clicks to edit About you section
        And The customer opens the Nationality drop down
        Then The customer will be presented with the list of Nationalities as outlined via Sainsbury’s picklist

    Scenario: Customer reviews contents of drop down - Marital status
        When The customer clicks to edit About you section
        And The customer opens the Marital status drop down
        Then The customer will be presented with the list of Marital status as as outlined via Sainsbury’s picklist

    Scenario: Customer reviews contents of drop down - No of dependants
        When The customer clicks to edit About you section
        And The customer opens the No of dependents drop down
        Then The customer will be presented with the following: 0 - 9

    Scenario: Customer reviews contents of drop down - Residential status
        When The customer clicks to edit About you section
        And The customer opens the Residential status drop down
        Then The customer will be presented with the list of Residential status as as outlined via Sainsbury’s picklist

    Scenario: Customer reviews contents of drop down - Time at current address Years and Months
        When The customer clicks to edit About you section
        And  The customer opens the Time at current address Years drop down
        Then The customer will be presented with entries 0 - 83 for current years
        When  The customer opens the Time at current address Months drop down
        Then The customer will be presented with entries 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 for current months

    Scenario: Customer reviews contents of drop down - Time at previous address Years and Months (if applicable)
        When The customer clicks to edit About you section
        And The customer opens the Time at previous address Years drop down
        Then The customer will be presented with entries 0 - 83 for previous years
        When The customer opens the Time at previous address Months drop down
        Then The customer will be presented with entries 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 for previous months

    Scenario: Customer reviews contents of drop down - Employment status
        When The customer clicks to edit Your Occupation section
        And The customer opens the Employment status drop down
        Then The customer will be presented with the list of Employment status as as outlined via Sainsbury’s picklist

    Scenario: Customer reviews contents of drop down - Occupation
        When The customer clicks to edit Your Occupation section
        And The customer opens the Occupation drop down
        Then The customer will be presented with the list of Occupations s outlined via Sainsbury’s picklist