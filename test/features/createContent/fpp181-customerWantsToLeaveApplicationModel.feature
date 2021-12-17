@FPP181

Feature: Customer wants to leave application - modals

   As a Customer, I want to be advised that by leaving the application that my FPP application will not be saved,
   and how this might impact my journey,so that I can confidently decide whether
   or not I want to leave or continue with my application.

   Background:
      Given The customer has an application setup from Argos checkout

   Scenario: Customer wants to Leave application from low probability quote screen and check the modal content
      And The customer navigates to your details screen
      And The customer enters mobile number with spaces within the field as 07898909897
      And The customer clicks on continue application button
      And The customer has populated all field inputs and drop downs fields Employment status Occupation
      And The customer clicks on continue application button
      When The customer has populated all details with a low income
      And  The customer clicks on continue application button
      And  The customer will progress to the next screen - Check Your Application
      And  The customer clicks on continue application button
      And  The customer proceed to next screen - Your quote
      And I click on Leave application
      Then I proceed to Argos Trolley

   Scenario: Customer wants to Leave application from high probability quote screen and check the modal content
      When The customer navigates to your details screen
      And The customer enters mobile number with spaces within the field as 07898909897
      And The customer clicks on continue application button
      And The customer has populated all field inputs and drop downs fields Employment status Occupation
      And The customer clicks on continue application button
      And The customer has populated all field inputs and drop downs fields correctly for holding page journey
      And The customer clicks on continue application button
      And  The customer will progress to the next screen - Check Your Application
      And The customer clicks on continue application button
      And The customer proceed to next screen - Your quote
      And I click on Leave application
      And The leave modal presents:Leave without completing?
      And The leave modal presents:Content
      And  The leave modal presents:Leave application button
      And The leave modal presents:Continue application button
      And  I close the leave modal
      Then page url contains:my-quote

   Scenario: Customer wants to Leave application from calacutor screen and check the modal content
      And I click on Leave application
      And The leave modal presents:Leave without completing?
      And The leave modal presents:Content
      And  The leave modal presents:Leave application button
      Then The leave modal presents:Continue application button
      And  I close the leave modal

   Scenario Outline: Customer wants to Leave application from various screens and check the modal content
      And The customer navigates to <page> screen
      And I click on Leave application
      And The leave modal presents:Leave without completing?
      And The leave modal presents:Content
      And  The leave modal presents:Leave application button
      And The leave modal presents:Continue application button
      And  I close the leave modal
      Then page url contains:<endpoint>
      Examples:
         | page                   | endpoint               |
         | are you eligible       | are-you-eligible       |
         | what can you expect    | what-can-you-expect    |
         | how we use your data   | how-we-use-your-data   |
         | about you              | about-you              |
         | your details           | your-details           |
         | your occupation        | your-occupation        |
         | your financials        | your-financials        |
         | review application     | review-application     |
         | important information  | important-information  |