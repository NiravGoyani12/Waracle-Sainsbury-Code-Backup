@FPP-09 @FPP-1901
Feature: Content for How we use your data

    Scenario:Customer lands on How we’ll use your data screen
        Given The customer has an application setup from Argos checkout
        And The customer navigates to what can you expect screen
        When The customer clicks on next button
        When The customer has landed on How we’ll use your data screen
        Then The customer will be presented with the content as described in ticket fpp9 and fpp1901