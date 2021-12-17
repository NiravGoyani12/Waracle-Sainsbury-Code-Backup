@FPP-112 @FPP-58
Feature: Create Content for Notices of Correction
  As a Customer, I want to be able to understand the eligibility criteria, so that I can choose to continue with my application.

  Background:
    Given The customer has an application setup from Argos checkout
    And The customer navigates to are you eligible screen

  Scenario: Verify Content on Notice of Correction
    Then I see List Item link as What is a notice of correction?
    When I click on the Side Drawer link
    Then Side drawer component is displayed
    And I see Side drawer title as Notice of correction
    And I see Side drawer content
    And I see close Icon on side drawer screen
    And I see Close Button on Side drawer screen

  @FPP-58
  Scenario: Verify close icon functionality
    When I click on the Side Drawer link
    Then Side drawer component is displayed
    And The focus state will move to the top right close button

  @FPP-58
  Scenario: Verify close CTA button functionality
    When I click on the Side Drawer link
    Then Side drawer component is displayed
    And The customer opts to close the side drawer using close button
    Then The side drawer component will close
    And Focus state will return to the original state of Side Drawer link