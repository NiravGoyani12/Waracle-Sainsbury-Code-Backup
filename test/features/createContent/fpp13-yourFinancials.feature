@FPP-13 @FPP-2638
Feature: Create Content for Your Financials page

    As a Customer, I want to be confident that the information required
    about my finance details is relevant to my application,
    so that I can qualify under Argos/SB’s risk profile.

Background:
    Given The customer has an application setup from Argos checkout
    
    Scenario:Customer lands on Your Financials screen and the content is displayed correctly
        Given The customer navigates to your financials screen
        Then The customer will be presented with the content as described in FPP13
