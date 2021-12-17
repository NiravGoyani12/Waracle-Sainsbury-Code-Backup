@FPP-934 @FPP2130
Feature:Create Error Validation for Your Financials - Validate bank account details

  As a Customer, I want to be confident that the information required about my employment status is relevant to my application,
  so that I can qualify under Argos/SB’s risk profile.

  Background:
    Given The customer has an application setup from Argos checkout
     And The customer navigates to your financials screen

  Scenario: Customer is on the Your financials screen, completes this screen, has input a non existing bank account number within maximum number of retries
    When The customer has input non existing bank account number
    And The customer clicks on continue application button
    Then The customer will be presented with the error message:Sorry, we can’t validate your details.Please ensure you enter your account number and sort code correctly. Or try another account.

  Scenario: Customer is on the Your financials screen, completes this screen, has input a non existing bank account number within maximum number of retries
    When The customer has input non existing bank account number
    And The customer clicks on continue application button
    And The customer will be presented with the error message:Sorry, we can’t validate your details.Please ensure you enter your account number and sort code correctly. Or try another account.
    And The customer clicks on continue application button
    And The customer will be presented with the error message:Sorry, we can’t validate your details.Please ensure you enter your account number and sort code correctly. Or try another account.
     And The customer clicks on continue application button
    And The customer will be presented with the error message:We're sorry, we can't confirm your bank account details right now.
    And The customer will be presented with the error message:You can always choose another way to pay from the checkout.
    And The go to checkout button will be displayed
    And I click on the modal button leave application
    Then I proceed to Argos Trolley

  Scenario:Customer is on the Your financials screen, completes this screen, has input a non existing sort code within maximum number of retries
    When The customer has input non existing sort code
    And The customer clicks on continue application button
    Then The customer will be presented with the error message:Sorry, we can’t validate your details.Please ensure you enter your account number and sort code correctly. Or try another account.

  Scenario: Customer is on the Your financials screen, completes this screen, has input a non existing sort code within maximum number of retries
    When The customer has input non existing sort code
    And The customer clicks on continue application button
    And The customer will be presented with the error message:Sorry, we can’t validate your details.Please ensure you enter your account number and sort code correctly. Or try another account.
    And The customer clicks on continue application button
    And The customer will be presented with the error message:Sorry, we can’t validate your details.Please ensure you enter your account number and sort code correctly. Or try another account.
    And The customer clicks on continue application button
    And The customer will be presented with the error message:We're sorry, we can't confirm your bank account details right now.
    And The customer will be presented with the error message:You can always choose another way to pay from the checkout.
    And The go to checkout button will be displayed
    And I click on the modal button leave application
    Then I proceed to Argos Trolley