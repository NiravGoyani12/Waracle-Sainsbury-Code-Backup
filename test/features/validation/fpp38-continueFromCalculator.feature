@FPP-38
Feature: Continue from Calculator

    As Customer, I want to be able to continue from the Calculator screen,
    so that I can progress with my FPP application.

    Background:
        Given The customer has an application setup from Argos checkout
        And The customer navigates to calculator screen

    Scenario: Customer triggers CTA to continue from Calculator screen - happy flow
        And The customer is presented with the Title as Argos Monthly Payment Plan
        When The customer clicks on Next application button
        Then The customer will continue to Important information
