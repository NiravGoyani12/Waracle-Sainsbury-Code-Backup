@FPP-187
Feature:Create Content for Representative example terms side drawer - Calculator screen

    As a Customer, I want to be able to understand the representative example terms,
    so that I can be as informed as much as possible when choosing to continue with my application.

Background:
    Given The customer has an application setup from Argos checkout

    Scenario: Customer clicks on the Learn more side drawer link from Calculator screen
        When  The customer clicks on the Learn more side drawer link
        And   The correct content displayed for:Calculator results terms title
        And   The correct content displayed for:Trolley total title
        And   The correct content displayed for:Trolley total content
        And   The correct content displayed for:Cost per month title
        And   The correct content displayed for:Cost per month content
        And   The correct content displayed for:Number of monthly payments title
        And   The correct content displayed for:Number of monthly payments content
        And   The correct content displayed for:Representative APR title
        And   The correct content displayed for:Representative APR content
        And   The correct content displayed for:Total charge for credit title
        And   The correct content displayed for:Total charge for credit content
        And   The correct content displayed for:Total payable title
        And   The correct content displayed for:Total payable content
        