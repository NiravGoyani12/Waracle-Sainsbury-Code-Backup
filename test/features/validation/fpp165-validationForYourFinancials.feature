@FPP-165
Feature: Validation for Your Financials

    As a Customer, I want to be confident that the information required about
    my employment status is relevant to my application, so that I can qualify under Argos/SB’s risk profile.

    Background:
        Given The customer has an application setup from Argos checkout
        And The customer navigates to your financials screen

    Scenario: Customer is on the Your financials screen, completes this screen, and wants to progress with their FPP application - happy flow
        When The customer has populated all field inputs and drop downs fields correctly
        And The customer clicks on continue application button
        Then The customer will progress to the next screen - Check Your Application

    Scenario: Customer has input Yearly income before tax as £100,000 or more
        When The customer has input their Yearly income before tax is £100,000 or more
        Then The customer will be presented with the error message:Please ensure this value is correct.
        When The customer clicks on continue application button
        Then The customer will progress to the next screen - Check Your Application

    Scenario: Customer inputs invalid Monthly mortgage / rent - unhappy path
        When The customer inputs monthly mortgage rent as being greater than 999,999
        And The customer clicks on continue application button
        Then The customer will be presented with the error message:Please enter a valid amount in whole pounds, up to 6 digits, without decimals.

    Scenario: Customer inputs invalid Annual income - unhappy path
        When The customer inputs annual income as being greater than 9,999,999
        And The customer clicks on continue application button
        Then The customer will be presented with the error message:Please enter a valid amount in whole pounds, up to 7 digits, without decimals.
        
    # OTHER HOUSEHOLD INCOME FIELD IS CURRENTLY HIDDEN IN THE APP
    # Scenario: Customer inputs invalid Other household income - unhappy path
    #     When The customer inputs Other household income as being greater than 9,999,999
    #     And The customer clicks on continue application button
    #     Then The customer will be presented with the error message:Please enter a valid amount in whole pounds, up to 7 digits, without decimals.

    Scenario: Customer inputs an invalid month value
        When The customer input a numerical value for Month bank account is opened as being >12
        Then The customer will be presented with the error message:Please enter a valid date.