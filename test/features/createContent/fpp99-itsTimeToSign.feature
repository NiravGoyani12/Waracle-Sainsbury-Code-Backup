@FPP-99
Feature: It’s time to sign screen

  As a Customer,
  I want to be able informed of what to expect with Docusign,
  so that I proceed with my loan application quickly and successfully purchase my chosen products.

  Background:
    Given The customer has an application setup from Argos checkout
    
  Scenario: Customer lands on It’s time to sign screen and verify the content
   And The customer navigates to its time to sign screen
    When The customer lands on the It’s time to sign screen
    Then The customer will see the screen Title1 as It's time to sign
    And The customer will see the screen Content1 as Electronic signature with
    And The customer will see the screen Title2 as Docusign Logo
    And The customer will see the screen Content2 as To complete your application with our partner DocuSign, you need to:
    And The customer will see the screen Content3 as Read and check your loan agreement and other important documents.
    And The customer will see the screen Content4 as Sign your loan agreement
    And The customer will see the CTA1 as Continue to DocuSign
    And The customer will see the CTA2 as Leave application