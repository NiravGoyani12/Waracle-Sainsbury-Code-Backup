@FPP-183 @FPP-58 @FPP-945
Feature: Create content for Why we need your bank account details side draw information

  As a Customer,I want to be able to understand why Argos needs my bank account number,
  so that I am informed as to which bank account number I should use for the FPP application.

  Background:
     Given The customer has an application setup from Argos checkout
     And The customer navigates to your financials screen

  @FPP-945
  Scenario: Customer clicks on ‘Why do you need my bank account number?’ link from Finance details screen
    When The customer clicks on the ‘Why do you need my bank account number’ link
    Then Side drawer component Opens and displayed
    And Customer can see Side drawer Title as Why we need your bank account details
    And Customer can see Text on Side drawer as Your bank account number will be used to help us verify your identity for the plan application. The account number you enter here will be the account used for direct debit should your payment plan be approved and you complete your application with us.The account cannot be changed until your first direct debit has been made.
    And Customer can see close icon on Side drawer
    And Customer can see Close CTA on Side drawer

  @FPP-58
  Scenario: Verify close icon functionality
    When The customer clicks on the ‘Why do you need my bank account number’ link
    Then Side drawer component Opens and displayed
    And The focus state will move to the top right of bank account close icon

  @FPP-58
  Scenario: Verify close CTA button functionality
    When The customer clicks on the ‘Why do you need my bank account number’ link
    Then Side drawer component Opens and displayed
    And The customer opts to close the bank account side drawer using close button
    Then The bank account side drawer component will close
    And Focus state will return to the original state of bank account Side Drawer link