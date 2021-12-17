@FPP-10
Feature: Content for Your Name and Your Address page

    As a customer of the FPP application,I want to be able to see the correct your name and your address details
    on the your name and your address page.

    Scenario: Customer navigates to the Your name and Your address details screen.
        Given The customer is processing an FPP loan application
        And  The customer has an application setup from Argos checkout
        And  The customer navigates to about you screen
        Then Display the content as described in the table 1 for fpp10
        When Customer title, first name and last name data is displayed from Argos check out
        When Customer current address details is displayed from Argos check out