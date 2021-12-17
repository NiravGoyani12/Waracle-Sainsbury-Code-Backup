@FPP-7 @FPP-1078 @FPP-1916
Feature: Are You Eligible?

  As a Customer, I want to be able to understand the eligibility criteria,
  so that I can choose to continue with my application.

  Background:
    Given The customer has an application setup from Argos checkout
    And  The customer navigates to are you eligible screen

  Scenario: Verify the content of the Eligibility Screen
    Then I see Title for "Are you eligible?"
    Then I see Text as 'You can apply if you:'
    Then I see Are You Eligible page List Item 1 Text as Are 18 or over.
    Then I see Are You Eligible page List Item 2 Text as Have a UK bank account in your name, registered to your address, so we can check who you are and set up a Direct Debit.
    Then I see Are You Eligible page List Item 3 Text as Can tell us where you’ve lived for the last 2 years.
    Then I see Are You Eligible page List Item 4 Text as Have a UK residential address where you have been living for the last year.
    Then I see Are You Eligible page List Item 5 Text as Have a valid email and mobile phone number to manage your plan digitally.
    Then I see Are You Eligible page List Item 6 Text as No notice of correction on your credit file.
    Then I see List Item link as What is a notice of correction?
    Then I see a Button as 'Next'
    When I click on Next Button
    Then I proceed to "What can you expect?" screen
    And I can see header text as "What can you expect?"
    Then I see a Button as 'Leave application'
    When I click on Leave application
    When I click on the modal button leave application
    Then I proceed to Argos Trolley
    And I see Accept All Cookies button