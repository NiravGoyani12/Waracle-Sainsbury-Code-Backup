@FPP-1307
Feature: Update Progress Bar alignment to screens

    As a Customer,I want to see progress bar,
    so that I proceed with my loan application.

    Background:
        Given The customer has an application setup from Argos checkout

    Scenario: Customer viewing Your name and Your address screen is presented with progress status 1 - ABOUT YOU
        When  The customer navigates to about you screen
        Then The progress status bar shows the number 1 and it's highlighted on about you screen
        And The progress status bar shows the text About you and it's highlighted on about you screen

    Scenario: Customer viewing Your details and Where you live screen is presented with progress status 1 - ABOUT YOU
        When The customer navigates to your details screen
        Then The progress status bar shows the number 1 and it's highlighted on your details screen
        And The progress status bar shows the text About you and it's highlighted on your details screen

    Scenario: Customer viewing Your occupation screen is presented with progress status 2 - YOUR DETAILS
        When The customer navigates to your details screen
        And The customer enters mobile number with spaces within the field as 07898909897
        And The customer clicks on continue application button
        Then The progress status bar shows the number 2 and it's highlighted on occupation screen
        And The progress status bar shows the text Your details and it's highlighted on occupation screen

    Scenario: Customer viewing Your financials and Bank account details screen is presented with progress status 2 - YOUR DETAILS
        When The customer navigates to your details screen
        And The customer enters mobile number with spaces within the field as 07898909897
        And The customer clicks on continue application button
        And The customer has populated all field inputs and drop downs fields Employment status Occupation
        And The customer clicks on continue application button
        Then The progress status bar shows the number 2 and it's highlighted on occupation screen
        And The progress status bar shows the text Your details and it's highlighted on occupation screen

    Scenario: Customer viewing Check my application screen is presented with progress status 3 - REVIEW
        When The customer navigates to your details screen
        And The customer enters mobile number with spaces within the field as 07898909897
        And The customer clicks on continue application button
        And The customer has populated all field inputs and drop downs fields Employment status Occupation
        And The customer clicks on continue application button
        And The customer has populated all field inputs and drop downs fields correctly for holding page journey
        And The customer clicks on continue application button
        And  The customer will progress to the next screen - Check Your Application
        Then The progress status bar shows the number 3 and it's highlighted on my application screen
        And The progress status bar shows the text Review and it's highlighted on my application screen

    Scenario: Customer viewing My quote screen is presented with progress status 4 - QUOTE
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
        And The customer proceed to next screen - Your quote
        Then The progress status bar shows the number 4 and it's highlighted on your quote screen
        And The progress status bar shows the text Quote and it's highlighted on your quote screen
