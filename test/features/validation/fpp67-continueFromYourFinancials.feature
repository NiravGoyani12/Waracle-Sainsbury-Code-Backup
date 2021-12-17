@FPP67
Feature: Continue from Your financials page

    As Customer, I want to be able to continue from the ‘Your financials' screen,
    so that I can progress with my FPP application.

    Background:
        Given The customer has an application setup from Argos checkout
        When The customer navigates to your financials screen
       
    Scenario:  Customer triggers CTA to continue from Your Financials screen - happy flow
        When The customer has populated all field inputs and drop downs fields correctly
        When The customer clicks on continue application button
        Then The customer will progress to the next screen - Check Your Application