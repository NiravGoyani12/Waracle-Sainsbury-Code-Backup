@FPP-2197
Feature: Modal pop up for when customer navigates back from Quote screen (or later)

  As a Customer, I want to be able to navigate back from Quote screen (or later)
  so that I can see the confirmation popup model.

#THIS TEST WILL FAIL DUE ON BROWSERSTACK i0S DUE TO DEFECT - 2553

  Background:
    Given The customer has an application setup from Argos checkout
    And The customer navigates to your details screen
    And The customer enters their details using the bypass strategy
    And The customer clicks on continue application button
    And The customer has populated all field inputs and drop downs fields Employment status Occupation
    And The customer clicks on continue application button
    And The customer has populated all field inputs and drop downs fields correctly for holding page journey
    And The customer clicks on continue application button
    And  The customer will progress to the next screen - Check Your Application

  Scenario: Customer navigates back from quote screen and click on leave application
    And The customer clicks on continue application button
    And The customer proceed to next screen - Your quote
    When The customer navigates back to previous screen
    Then The leave modal presents:Are you sure you want to leave?
    And The leave modal presents:Once you have a quote for your Argos Monthly Payment Plan, you can’t go back to change your application details.
    When I click on the leave application button on popup model
    Then I proceed to Argos Trolley

  Scenario: Customer navigates back from quote screen then clicks on return to application button and close icon
    And The customer clicks on continue application button
    And The customer proceed to next screen - Your quote
    When The customer navigates back to previous screen
    Then The leave modal presents:Are you sure you want to leave?
    And The leave modal presents:Once you have a quote for your Argos Monthly Payment Plan, you can’t go back to change your application details.
    When I click on the return to application button on popup model
    Then The customer proceed to next screen - Your quote
    When The customer navigates back to previous screen
    Then The leave modal presents:Are you sure you want to leave?
    And The leave modal presents:Once you have a quote for your Argos Monthly Payment Plan, you can’t go back to change your application details.
    When I click on close application button on popup model
    Then The customer proceed to next screen - Your quote

  Scenario: Customer navigates back from Present Offer screen and click on leave application
    And I intercept XHR calls
    And The customer clicks on continue application button
    And I wait for 20 seconds
    When I get the loan id
    Then The customer proceed to next screen - Your quote
    When  The customer clicks on accept terms check box
    And The customer clicks on continue application button
    And I wait for 20 seconds
    And I post a decision ready call
    Then The customer lands on the Present offer page
    When The customer navigates back to previous screen
    Then The leave modal presents:Are you sure you want to leave?
    And The leave modal presents:Once you have a quote for your Argos Monthly Payment Plan, you can’t go back to change your application details.
    And The leave modal presents:A record of this application will be added to your credit file.
    When I click on the leave application button on popup model
    Then I proceed to Argos Trolley

  Scenario: Customer navigates back from Present Offer screen then clicks on return to application button and close icon
    And I intercept XHR calls
    And The customer clicks on continue application button
    And I wait for 20 seconds
    When I get the loan id
    And The customer proceed to next screen - Your quote
    And  The customer clicks on accept terms check box
    And The customer clicks on continue application button
    And I wait for 20 seconds
    And I post a decision ready call
    Then The customer lands on the Present offer page
    When The customer navigates back to previous screen
    Then The leave modal presents:Are you sure you want to leave?
    And The leave modal presents:Once you have a quote for your Argos Monthly Payment Plan, you can’t go back to change your application details.
    And The leave modal presents:A record of this application will be added to your credit file.
    When I click on the return to application button on popup model
    Then The customer lands on the Present offer page
    When The customer navigates back to previous screen
    Then The leave modal presents:Are you sure you want to leave?
    And The leave modal presents:Once you have a quote for your Argos Monthly Payment Plan, you can’t go back to change your application details.
    And The leave modal presents:A record of this application will be added to your credit file.
    When I click on close application button on popup model
    Then The customer lands on the Present offer page

  Scenario: Customer navigates back from Its time Sign screen and click on leave application
    And I intercept XHR calls
    And The customer clicks on continue application button
    And I wait for 20 seconds
    When I get the loan id
    And The customer proceed to next screen - Your quote
    And  The customer clicks on accept terms check box
    And The customer clicks on continue application button
    And I wait for 20 seconds
    And I post a decision ready call
    Then The customer lands on the Present offer page
    When The customer clicks on review and sign button
    Then The customer lands on the It’s time to sign screen
    When The customer navigates back to previous screen
    Then The leave modal presents:Are you sure you want to leave?
    And The leave modal presents:Once you have a quote for your Argos Monthly Payment Plan, you can’t go back to change your application details.
    And The leave modal presents:A record of this application will be added to your credit file.
    When I click on the leave application button on popup model
    Then I proceed to Argos Trolley

  Scenario: Customer navigates back from Its time Sign screen then clicks on return to application button and close icon
    And I intercept XHR calls
    And The customer clicks on continue application button
    And I wait for 20 seconds
    When I get the loan id
    And The customer proceed to next screen - Your quote
    And  The customer clicks on accept terms check box
    And The customer clicks on continue application button
    And I wait for 20 seconds
    And I post a decision ready call
    Then The customer lands on the Present offer page
    When The customer clicks on review and sign button
    Then The customer lands on the It’s time to sign screen
    When The customer navigates back to previous screen
    Then The leave modal presents:Are you sure you want to leave?
    And The leave modal presents:Once you have a quote for your Argos Monthly Payment Plan, you can’t go back to change your application details.
    And The leave modal presents:A record of this application will be added to your credit file.
    When I click on the return to application button on popup model
    Then The customer lands on the It’s time to sign screen
    When The customer navigates back to previous screen
    Then The leave modal presents:Are you sure you want to leave?
    And The leave modal presents:Once you have a quote for your Argos Monthly Payment Plan, you can’t go back to change your application details.
    And The leave modal presents:A record of this application will be added to your credit file.
    When I click on close application button on popup model
    Then The customer lands on the It’s time to sign screen
