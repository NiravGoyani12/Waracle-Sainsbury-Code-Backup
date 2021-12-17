@FPP-86 @FPP-2654
Feature: Content for Check your application

    As a Customer, I want to be presented with my details,
    so that I can edit my details where relevant and confirm to proceed with my application.

    Background:
        Given The customer has an application setup from Argos checkout
        And The customer navigates to your details screen

    Scenario: Customer lands on Check your application screen, and the customer has captured Previous address
        When The customer has populated all fields with time at current address being less than 2 years for my application screen content validation
        And The customer will be able to capture their Previous address
        And The customer clicks on continue application button
        And The customer has populated all field inputs and drop downs fields Employment status Occupation
        And The customer clicks on continue application button
        And The customer has populated all field inputs and drop downs fields correctly for holding page journey
        And The customer clicks on continue application button
        And  The customer will progress to the next screen - Check Your Application
        Then The application page title and description is displayed
        And Customer title, first name and last name data on my application page is displayed from Argos check out
        And Customer current address details is displayed from Argos check out
        And Display the content as described in the table 1 for fpp86
        And Display previous address content as described in the table 1 for fpp86
        And The edit link will be displayed for About you section
        And The edit link will be displayed for Your occupation section
        And The edit link will be displayed for Your financials section

    Scenario: Customer lands on Check your application screen, and the customer has not captured Previous address
        When The customer enters mobile number with spaces within the field as 07898909897
        And The customer clicks on continue application button
        And The customer has populated all field inputs and drop downs fields Employment status Occupation
        And The customer clicks on continue application button
        And The customer has populated all field inputs and drop downs fields correctly for holding page journey
        And The customer clicks on continue application button
        And  The customer will progress to the next screen - Check Your Application
        Then The application page title and description is displayed
        And Customer title, first name and last name data on my application page is displayed from Argos check out
        And Customer current address details is displayed from Argos check out
        And Display the content as described in the table 1 for fpp86
        And The edit link will be displayed for About you section
        And The edit link will be displayed for Your occupation section
        And The edit link will be displayed for Your financials section
