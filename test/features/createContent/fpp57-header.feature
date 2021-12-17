@FPP-57 @FPP-1916
Feature: Create Header for Screens

  As a Customer,
  I want to be presented with the appropriate header on all screens,
  so that I can continue with my application consistently.
  Background:
    Given The customer has an application setup from Argos checkout

  Scenario Outline: Customer navigates through all FPP application screens, and is presented with the header consistently
    When The customer navigates to <page> screen
    Then The customer can see the header component
    And The customer can see Argos logo on the header
    And The customer can see Secure icon on the header
    Examples:
      | page                   |
      | Are You Eligible       |
      | What Can You Expect    |
      | How We User Your Data  |
      | About You              |
      | Your Details           |
      | Your Occupation        |
      | Your Financials        |
      | Review Application     |
