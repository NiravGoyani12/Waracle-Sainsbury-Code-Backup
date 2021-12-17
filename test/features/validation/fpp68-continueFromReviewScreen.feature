@FPP-68 @FPP-86
Feature: Continue CTA - from Check my application

    As Customer, I want to be able to continue from the ‘Review my application' screen,
    so that I can progress with my application.

    Scenario: Customer continues from Review my application screen
        Given The customer has an application setup from Argos checkout
        When The customer navigates to your details screen
        And The customer enters mobile number with spaces within the field as 07898909897
        And The customer clicks on continue application button
        And The customer has populated all field inputs and drop downs fields Employment status Occupation
        And The customer clicks on continue application button
        And The customer has populated all field inputs and drop downs fields correctly for holding page journey
        And The customer clicks on continue application button
        And  The customer will progress to the next screen - Check Your Application
        And The customer clicks on continue application button
        And The stage 3 holding page is displayed