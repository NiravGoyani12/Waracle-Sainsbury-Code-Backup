@FPP-50
Feature: How we use your data

  As a Customer,
  I want to be able to confirm how my loan agreement and data usage will be handled
  so that I can record my acceptance before continuing with my application.

  Background:
    Given The customer has an application setup from Argos checkout
    And The customer navigates to what can you expect screen
    When I click on Next Button
    Then I proceed to "How we will use your data" Screen

  Scenario: Customer lands on ‘How we'll use your data' screen - happy path
    And I see checkbox
    And I see Text for checkbox as By checking this, I confirm:
    And I see Agreement Text 1
    And I see Agreement Text 2
    And I see Agreement Text 3
    And I see Banner text
    And I see a Button as 'Next'
    And I see a Button as 'Leave application'

  Scenario: Customer is on 'How we'll use your data' screen, and ticks check box
    When The customer ticks the checkbox
    Then I see The check box is selected
    When The customer unselect the checkbox
    Then The check box will be highlighted with error message saying You must agree to the eligible statement to apply for the loan.

  Scenario: Customer ticks check box  and continues with application - happy path
    When The customer ticks the checkbox
    And I click on Next Button
    Then The customer will proceed to ‘Your name and Your address’ screen

  @FPP-2029
  Scenario: Customer does not tick check box and attempts to continue with the application  - unhappy path
    When The customer ticks the checkbox
    And The customer unselect the checkbox
    Then I click on Next Button
    And The check box will be highlighted with error message saying You must agree to the eligible statement to apply for the loan.

  Scenario: Customer does not tick check box and continue with the application, then ticks check box in order to resolve error validation to continue  - unhappy path
    When The customer ticks the checkbox
    And The customer unselect the checkbox
    And I click on Next Button
    Then The check box will be highlighted with error message saying You must agree to the eligible statement to apply for the loan.
    When The customer ticks the checkbox
    Then I see The check box is selected
    And I click on Next Button
    Then The customer will proceed to ‘Your name and Your address’ screen

  Scenario: Customer clicks to leave application
    When I click on Leave application
    When I click on the modal button leave application
    Then I proceed to Argos Trolley
