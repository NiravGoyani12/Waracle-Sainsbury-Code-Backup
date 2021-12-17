@FPP-349
Feature:  Update copy content on the What can I expect screen & verify side Drawer
  - This feature explains the functionality about side drawer on WHAT CAN I EXPECT SCREEN

  #Note: What can I Expect Screen content change is updated on FPP-8 feature

  Background:
    Given The customer has an application setup from Argos checkout
    And  The customer navigates to are you eligible screen
    Then I see a Button as 'Next'
    When I click on Next Button
    Then I proceed to "What can you expect?" screen

  Scenario: Customer clicks on side drawer link
    Then I can see the Side drawer link

