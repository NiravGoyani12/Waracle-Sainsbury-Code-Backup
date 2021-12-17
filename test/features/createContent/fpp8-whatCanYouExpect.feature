@FPP-8 @FPP-349 @FPP-1916
Feature: Create Content for What Can You Expect

  As a Customer, I want to understand the preliminary conditions before proceeding with my application,
  so that I'm reassured my credit rating will not be negatively affected.

  Background:
    Given The customer has an application setup from Argos checkout
    And  The customer navigates to are you eligible screen
    Then I see a Button as 'Next'
    When I click on Next Button
    Then I proceed to "What can you expect?" screen

  @FPP-349
  Scenario: Customer lands on What can you expect screen & Verify the content on What can you expect page
    And I see Page Title as "What can you expect?"
    Then I can see Banner info as Most applications take about 10 minutes, but you can't stop in the middle.
    Then I see What Can I Expect Page List Item 1 Text as You'll need your bank account details as part of the application so it's a good idea to keep them handy.
    Then I see What Can I Expect Page List Item 2 Text as You'll get an indication of your application decision before you apply. This won't affect your credit rating.
    Then I see What Can I Expect Page List Item 3 Text as Returns: Just so you know, when you buy something on the Argos Monthly Payment Plan, you can't exchange it unless you give it back, get a refund and look into applying for a new plan. Full information can be found here.
    Then I see a Button as 'Next'
    When I click on Next Button
    Then I proceed to "How we will use your data" Screen
    Then I see a Button as 'Leave application'
    When I click on Leave application
    When I click on the modal button leave application
    Then I proceed to Argos Trolley
    And I see Accept All Cookies button