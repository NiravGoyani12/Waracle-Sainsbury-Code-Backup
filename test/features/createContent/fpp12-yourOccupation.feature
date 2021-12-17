@FPP-12
Feature: Content for Your Occupation page

    Background:
        Given  The customer has an application setup from Argos checkout
        And The customer navigates to your occupation screen
    
    Scenario: Customer lands on Your occupation screen and the content is displayed as expected
        Then The customer will be presented with the content as described in the above table

    Scenario: Customer reviews contents of drop down - Employment status
        When The customer opens the Employment status drop down
        Then The customer will be presented with the list of Employment status as as outlined via Sainsbury’s picklist

    Scenario: Customer reviews contents of drop down - Occupation
        When The customer opens the Occupation drop down
        Then The customer will be presented with the list of Occupations s outlined via Sainsbury’s picklist