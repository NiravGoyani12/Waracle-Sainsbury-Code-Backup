@FPP-360
Feature: Auto route customer back to checkout from DocuSign

  As a Customer, I want to be able to navigate back to the checkout after I have completed Docusign,
  so that I can complete my loan application and purchase my chosen products.

  Background:
    Given The customer has an application setup from Argos checkout

  Scenario: Customer lands on the Quote screen, and has high probability on loan acceptance.
    When The customer navigates to your details screen
    And The customer enters their details using the bypass strategy
    And The customer clicks on continue application button
    And The customer has populated all field inputs and drop downs fields Employment status Occupation
    And The customer clicks on continue application button
    And The customer has populated all field inputs and drop downs fields correctly for holding page journey
    And The customer clicks on continue application button
    And  The customer will progress to the next screen - Check Your Application
    And I intercept XHR calls
    And The customer clicks on continue application button
    And I wait for 20 seconds
    When I get the loan id
    And The customer proceed to next screen - Your quote
    And  The customer clicks on accept terms check box
    And The customer clicks on continue application button
    And I wait for 20 seconds
    And I post a decision ready call
    When The customer lands on the Present offer page
    And The customer clicks on review and sign button
    And The customer lands on the It’s time to sign screen
    And The customer clicks on continue to docusign
    Then The customer is navigated to the docusign page
    And I click on the docusign continue button
    And I sign the docusign eDoc
    And I click on adopt and sign
    And I wait for 4 seconds
    And I click on finish
    Then I proceed to Argos Trolley

  Scenario: Customer lands on the Quote screen, and has high probability on loan acceptance.
    When The customer navigates to your details screen
    And The customer enters their details using the bypass strategy
    And The customer clicks on continue application button
    And The customer has populated all field inputs and drop downs fields Employment status Occupation
    And The customer clicks on continue application button
    And The customer has populated all field inputs and drop downs fields correctly for holding page journey
    And The customer clicks on continue application button
    And  The customer will progress to the next screen - Check Your Application
    And I intercept XHR calls
    And The customer clicks on continue application button
    And I wait for 20 seconds
    When I get the loan id
    And The customer proceed to next screen - Your quote
    And  The customer clicks on accept terms check box
    And The customer clicks on continue application button
    And I wait for 20 seconds
    And I post a decision ready call
    When The customer lands on the Present offer page
    And The customer clicks on review and sign button
    And The customer lands on the It’s time to sign screen
    And I click on Leave application
    When I click on the modal button leave application
    Then I proceed to Argos Trolley