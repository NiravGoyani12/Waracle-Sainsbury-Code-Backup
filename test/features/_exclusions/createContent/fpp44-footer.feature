@FPP-44
Feature: Footer

  As a Customer,
  I want to be presented with the appropriate footer on all screens,
  so that I can continue with my application consistently.

  Background:
    Given The customer has an application setup from Argos checkout

  Scenario Outline: Customer navigates through all FPP application screens and clicks on any of the footer links
    And The customer navigates to <page> screen
    When The customer clicks on the footer Terms & conditions link
    Then The footer link Url open in new window
    Examples:
      | page                  |
      | Are You Eligible      |
      | What Can You Expect   |
      | How We Use Your Data |
      | About You             |
      | Your Details          |
      | Your Occupation       |
      | Your Financials       |
      | Review Application    |


  Scenario Outline: Customer navigates through all FPP application screens to verify Footer Component
    And The customer navigates to <page> screen
    Then The customer can see the footer component
    And The customer can see footer logo as visa,masterCard,amex,paypal,ssl
    And The customer can see the static text
    And The customer can see footer links as Privacy hub,Privacy policy,Cookies policy,List of cookies,Cookie preferences,Terms & conditions
    And The customer can see Argos copyright
    Examples:
      | page                  |
      | Are You Eligible      |
      | What Can You Expect   |
      | How We Use Your Data |
      | About You             |
      | Your Details          |
      | Your Occupation       |
      | Your Financials       |
      | Review Application    |

  Scenario Outline: Customer navigates through any one of the FPP application screens and clicks on all of the footer links
    Given The customer navigates to Am I Eligible screen
    When The customer clicks on the footer <link> link
    Then The footer link Url open in new window
    Examples:
      | link               |
      | Privacy hub        |
      | Privacy policy     |
      | Cookies policy     |
      | List of cookies    |
      | Terms & conditions |
