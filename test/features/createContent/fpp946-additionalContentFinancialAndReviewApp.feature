@FPP-946
Feature: Add additional content to Financial Details and Review Application section

  Additional content to be presented at the bottom of Finance screen,within Bank account details component
  Additional content to be presented at the bottom of Finance section of the Check my application screen,within Bank account details component

Background:
    Given The customer has an application setup from Argos checkout

  Scenario: Customer lands on Your Financials screen
    And The customer navigates to your financials screen
    When The customer is viewing the bank account details section
    Then The additional information Content1 as By entering your account details here, you’re confirming:
    And The additional information Tick point1 as The account accepts Direct Debits.
    And The additional information Tick point2 as You’re named on the account
    And The additional information Tick point3 as You’re authorised to set up Direct Debits on the account without any other account holder authorisation.
    And The additional information Content2 as A copy of the Direct Debit Guarantee will be sent to you when the loan is opened.
    And The customer can see the Direct Debit Guarantee link
    When The customer click on the Direct Debit Guarantee link
    Then The customer can see the Direct Debit Guarantee Side Drawer

  Scenario: Customer lands on Check my application screen and can see the additional information at the bottom of the Your financials section
    Given The customer navigates to review application screen
    When The customer has clicked to edit the Your financials section
    Then The customer can see the bank account details section
    Then The additional information on the finance details section Content1 as By entering your account details here, you’re confirming:
    And The additional information on the finance details section Tick point1 as The account accepts Direct Debits.
    And The additional information on the finance details section Tick point2 as You’re named on the account
    And The additional information on the finance details section Tick point3 as You’re authorised to set up Direct Debits on the account without any other account holder authorisation.
    And The additional information on the finance details section content2 as A copy of the Direct Debit Guarantee will be sent to you when the loan is opened.
    And The customer can see the Direct Debit Guarantee link on the Your financials section
    When The customer click on the Direct Debit Guarantee link on the Your financials section
    Then The customer can see the Direct Debit Guarantee Side Drawer on the Your financials section
