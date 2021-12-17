@FPP-945
Feature:  Why we need your bank account number side drawer content

    As a Customer, I want to be able to understand why Argos needs my bank account number,
    so that I am informed as to which bank account number I should use for the FPP application.

    Background:
        Given The customer has an application setup from Argos checkout
        And The customer navigates to review application screen

    Scenario: Customer clicks on ‘Why do you need my bank account number?’ link from Finance details section from Review my application screen
        When The customer has clicked to edit the Your financials section
        When The customer clicks on the ‘Why do you need my bank account number’ link
        Then Side drawer component Opens and displayed
        And Customer can see Side drawer Title as Why we need your bank account details
        And Customer can see Text on Side drawer as Your bank account number will be used to help us verify your identity for the plan application. The account number you enter here will be the account used for direct debit should your payment plan be approved and you complete your application with us.The account cannot be changed until your first direct debit has been made.
        And Customer can see close icon on Side drawer
        And Customer can see Close CTA on Side drawer