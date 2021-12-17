@FPP2195  @FPP-1916

Feature: Disable direct page navigation

    As a Customer I should not be able to navigate to a page directly without
    going via the repayment calculator screen.

    Scenario Outline: Customer attempts to navigate directly to various pages across the application.
        And The customer navigates to <page> screen
        Then the error page displays

        Examples:
            | page                   |
            | are you eligible       |
            | what can you expect    |
            | how we use your data   |
            | about you              |
            | your details           |
            | your occupation        |
            | your financials        |
            | review application     |
            | important information  |
            | approval               |
            | time to sign           |
