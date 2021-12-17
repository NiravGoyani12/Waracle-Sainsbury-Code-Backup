@FPP-98
Feature:Create Content for Present Offer

    As a Customer, I want to be able to see my contractual offer,
    so that I can view the details before accepting to continue with my application.

    Background:
        Given The customer has an application setup from Argos checkout
        And The customer navigates to approval screen

    Scenario: Customer is accepted with an offer, and navigates to the Present Offer page
        When The customer lands on the Present offer page
        And The Present offer page displays:Congratulations!
        And The Present offer page displays:You’ve been accepted
        And The Present offer page displays:We’re pleased to say we’ve approved
        And The Present offer page displays:Argos Monthly Payment Plan Personalised Quote
        And The Present offer page displays:Trolley total
        And The Present offer page displays:Cost per month
        And The Present offer page displays:Number of monthly payments
        And The Present offer page displays:APR (Annual Percentage Rate)
        And The Present offer page displays:Total charge for credit
        And The Present offer page displays:Total payable
        And The Present offer page displays:Review and sign documents button
        Then Leave application button is displayed
