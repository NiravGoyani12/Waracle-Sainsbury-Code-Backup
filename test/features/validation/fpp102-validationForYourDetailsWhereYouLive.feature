@FPP-102
Feature: Validation for Your details and Where you live Pt 1

    As a Customer, I want to be confident that the information required
    about myself is relevant to my application,
    so that I can meet KYC requirements to confirm my identity.

    Background:
        Given The customer has an application setup from Argos checkout
        And The customer navigates to your details screen

    Scenario: Customer is on the Your details and Where you live screen, wants to progress with their FPP application, but has selected 0 for Years at current address and 0 for Months at current address - unhappy flow
        When The customer has populated Years and Months current address as 0
        When The customer clicks on continue application button
        Then The customer will be presented with the following validation error:Please select how long you’ve been at the current address.
        Then The customer will not progress to the next screen Your Occupation

    Scenario: Customer is on the Your details and Where you live screen, has input an email address in an incorrect format, and wants to continue - unhappy flow
        When The customer input email address in an incorrect format
        When The customer clicks on continue application button
        Then The customer will be presented with the following validation error:Please enter a valid email address.
        Then The customer will not progress to the next screen Your Occupation

    Scenario: Customer is on Your details and Where you live screen, and has input a mobile phone number in  an incorrect format - unhappy flow
        When The customer as input mobile phone number in an incorrect format
        When The customer clicks on continue application button
        Then The customer will be presented with the following validation error:Please enter a valid mobile phone number. eg. 07123123123.
        Then The customer will not progress to the next screen Your Occupation

    Scenario: Customer inputs age as less than 18 years
        When The customer enters their DOB equating to less than 18 years old
        When The customer clicks on continue application button
        Then The customer will be presented with the following validation error:You must be 18 years old or over in order to progress with your application.
        Then The customer will not progress to the next screen Your Occupation

    @FPP-2121
    Scenario: Customer inputs their DOB and they are 83 years of age or over at the end of their loan term - unhappy path
        When The customer enters their DOB 83 or older at the end of their loan term
        When The customer clicks on continue application button
        Then The customer will be presented with the following validation error:You must be less than 83 years old at the end of the loan term.
        Then The customer will not progress to the next screen Your Occupation

    Scenario: Customer is on the Your details and Where you live screen, completes this screen, and wants to progress with their FPP application - happy flow
        When The customer has populated all field inputs and drop downs fields
        When The customer clicks on continue application button
        Then The customer will progress to the next screen Your Occupation
