@FPP-37
Feature: Interactive Repayment Slider with Indicative Results

    As a Customer, I want to personalise my FPP loan results by selecting the repayment terms,
    so that I can understand the loan cost and monthly repayments before continuing with my application.

    Background:
        Given The customer has an application setup from Argos checkout
        #And  The customer clicks on accept cookies button

    Scenario:Customer lands on Calculator screen and interactive loan calculator is populated
        And the customer changes the duration term to 6
        And the duration term will be set to 6
        And the minimum duration will be set to 6
        And the maximum duration will be set to 12
        And the trolley total will be set to £320.00
        And the cost per month will be set to £40.40
        And the number of payments will be set to 6
        And the representative APR will be set to 19.9%
        And the total charge for credit will be set to £12.41
        And the total payable will be £242.40
        When the customer changes the duration term to 7
         And the trolley total will be set to £320.00
        And the cost per month will be set to £34.89
        And the number of payments will be set to 7
        And the representative APR will be set to 19.9%
        And the total charge for credit will be set to £14.24
        And the total payable will be £244.23
        When the customer changes the duration term to 8
        And the trolley total will be set to £320.00
        And the cost per month will be set to £30.75
        And the number of payments will be set to 8
        And the representative APR will be set to 19.9%
        And the total charge for credit will be set to £16.01
        And the total payable will be £246.00
        When the customer changes the duration term to 9
        And the trolley total will be set to £320.00
        And the cost per month will be set to £27.54
        And the number of payments will be set to 9
        And the representative APR will be set to 19.9%
        And the total charge for credit will be set to £17.87
        And the total payable will be £247.86
        When the customer changes the duration term to 10
        And the trolley total will be set to £320.00
        And the cost per month will be set to £24.97
        And the number of payments will be set to 10
        And the representative APR will be set to 19.9%
        And the total charge for credit will be set to £19.71
        And the total payable will be £249.70
        When the customer changes the duration term to 11
        And the trolley total will be set to £320.00
        And the cost per month will be set to £22.87
        And the number of payments will be set to 11
        And the representative APR will be set to 19.9%
        And the total charge for credit will be set to £21.58
        And the total payable will be £251.57