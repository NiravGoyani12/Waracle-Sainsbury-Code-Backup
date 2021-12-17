@FPP-161 @FPP-1896

Feature:Create Content for Important info (AE Light)

   Background:
      Given The customer has an application setup from Argos checkout
      And The customer navigates to important information screen

   Scenario: Customer lands on the Important information screen after continuing from the Calculator screen and displays correct content
      And The important information screen displays:Your Argos Monthly Payment
      And The important information screen displays:Is an Argos Monthly Payment Plan right for me?
      And The important information screen displays:Argos Monthly Payment Plans allow you to purchase
      And The important information screen displays:Interest is charged from the day you sign
      And The important information screen displays:The interest rate on a Plan varies based
      And The important information screen displays:If you want to regularly change
      And The important information screen displays:Before signing the agreement, it’s important
      And The important information screen displays:What else do I need to know?
      And The important information screen displays:You can make an overpayment on this Plan at any time
      And The important information screen displays:You have the right to pay off all of the money
      And The important information screen displays:We may change the terms of the Plan agreement
      And The important information screen displays:Purchases on the Argos Monthly Payment Plan
      And The important information screen displays:What if I can’t pay?
      And The important information screen displays:If you don’t make payments on your Argos Monthly Payment Plan
      And The important information screen displays:I still have questions!
      And The important information screen displays:If you have any questions or would like
      And The next button is displayed
      Then Leave application button is displayed

   Scenario: Customer lands on the Important information screen and can navigate to FPP FAQ's
      And I click on the AE FAQ's
      Then The FAQ page for FPP is displays the the following url:https://www.argos.co.uk/help/argos-monthly-payment-plan