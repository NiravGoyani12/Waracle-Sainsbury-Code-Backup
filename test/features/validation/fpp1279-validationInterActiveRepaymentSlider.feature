@FPP-1279
Feature: Interactive Repayment Slider - Validation

    As a Customer, I want to personalise my FPP loan results by selecting the repayment terms,
    so that I can understand the loan cost and monthly repayments before continuing with my application. .

    Background:
        Given The customer has an application setup from Argos checkout

    Scenario:Customer is on the Calculator screen, clears the term text box, and leaves it clear for 3 secs or more.
        When The customer inputs a value:null
        Then The repayment calculator displays validation message:enter number from 6 to 12
        And The following item is greyed out disabled:+ and - buttons
        And The following item is greyed out disabled:calculator results table
        And The following item is greyed out disabled:terms link

    Scenario:Customer is on the Calculator screen, and inputs a value that is outside the given range
        When The customer inputs a value:5
        Then The repayment calculator displays validation message:enter number from 6 to 12
        And The following item is greyed out disabled:+ and - buttons
        And The following item is greyed out disabled:calculator results table
        And The following item is greyed out disabled:terms link

    Scenario: Customer is unable to continue to next page given that the term field box is empty, or contains an invalid value (outside of range)
        When The customer inputs a value:13
        Then The repayment calculator displays validation message:enter number from 6 to 12
        And The following item is greyed out disabled:+ and - buttons
        And The following item is greyed out disabled:calculator results table
        And The following item is greyed out disabled:terms link
        And  The customer clicks on next button
        Then The customer is presented with the Title as Argos Monthly Payment Plan

    Scenario:Customer has triggered the calculator term error validation, then inputs a value within the given range
        When The customer inputs a value:5
        And The repayment calculator displays validation message:enter number from 6 to 12
        When The customer inputs a value:6
        And  The validation message will disappear along with the red enabled field box
        Then The interactive calculator will re-enable

    Scenario:Customer is on the Calculator screen, inputs a value in the term text box within the given range, and clicks to Continue
        When  The customer clicks on next button
        Then The important information screen displays:Important info