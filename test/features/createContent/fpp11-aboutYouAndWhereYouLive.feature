@FPP-11
Feature: Content for About You and Where You Live page

    As a customer of the FPP application,I want to be able to see the correct your name and your address details
    on the your name and your address page.

    Background:
        Given  The customer has an application setup from Argos checkout
        And The customer navigates to your details screen

    @FPP-2638
    Scenario: Customer lands on About You and Where you live screen and the correct content is displayed
        Then  The customer will be presented with the content as described in the table for fpp11

    Scenario:Customer address is display the current address fields returned by the Get application API call
        Then The customers address is based on the argos checkout address

    Scenario: Customer reviews contents of drop down - Nationality
        When The customer opens the Nationality drop down
        Then The customer will be presented with the list of Nationalities as outlined via Sainsbury’s picklist

    Scenario: Customer reviews contents of drop down - Marital status
        When The customer opens the Marital status drop down
        Then The customer will be presented with the list of Marital status as as outlined via Sainsbury’s picklist

    Scenario: Customer reviews contents of drop down - No of dependants
        When The customer opens the No of dependents drop down
        Then The customer will be presented with the following: 0 - 9

    Scenario: Customer reviews contents of drop down - Residential status
        When The customer opens the Residential status drop down
        Then The customer will be presented with the list of Residential status as as outlined via Sainsbury’s picklist

    Scenario: Customer reviews contents of drop down - Time at current address Years and Months
        When  The customer opens the Time at current address Years drop down
        And  The customer will be presented with entries 0 - 83 for current years
        When  The customer opens the Time at current address Months drop down
        Then  The customer will be presented with entries 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 for current months

    Scenario: Customer reviews contents of drop down - Time at previous address Years and Months (if applicable)
        When The customer opens the Time at previous address Years drop down
        And The customer will be presented with entries 0 - 83 for previous years
        When The customer opens the Time at previous address Months drop down
        Then The customer will be presented with entries 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 for previous months