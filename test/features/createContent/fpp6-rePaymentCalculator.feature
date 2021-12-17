@FPP-6 @FPP36 @1895
Feature: Create Content for Repayment Calculator (Summary)

  As Customer,
  I want to personalise my FPP loan results by selecting the repayment terms,
  so that I can understand the loan cost and monthly repayments before continuing with my application.
  
Background: 
     Given The customer has an application setup from Argos checkout

  Scenario:Customer lands on the calculator screen, and can view the calculator screen content
    Then The customer is presented with the Title as Argos Monthly Payment Plan 
    And The customer is presented with the Content1 as Adjust or enter the number of months you want to spread the cost over and we’ll show you the repayment details.
    And The customer is presented with the Content2 as This is an estimated example that might change based on your circumstances.
    And The customer is presented with the interactive payment slider
    And The customer is presented with Label1 as Trolley total
    And The customer is presented with Label2 as Cost per month
    And The customer is presented with Label3 as Number of monthly payments
    And The customer is presented with Label4 as Representative APR
    And The customer is presented with Label5 as Total charge for credit
    And The customer is presented with Label6 as Total payable
    And The customer is presented with Content7 as Credit subject to status. T&Cs apply
    And The customer is presented with Link as Learn more
    And The customer is presented with the Subheading8 as Representative example:
    And The customer is presented with the Content8 as You could set up an Argos Monthly Payment Plan of £300 over 24 months with 24 monthly repayments of £15.02. The total amount repayable will be £360.48. Representative 19.9% APR, annual interest rate (fixed) 19.9%.
    And The customer is presented with the Content9 as Loan and credit card providers can show you a Representative Example so you can easily compare different offers and decide which is best for you.
    And The customer is presented with the Subheading10 as How is interest calculated?
    And The customer is presented with the Content10 as The interest rate is fixed and guaranteed for the life of the plan. Interest at the annual interest rate is calculated each calendar day and is added to the plan monthly.
    And The customer is presented with the Subheading11 as Can I repay it early?
    And The customer is presented with the Content11 as You can pay off the remaining amount plus any interest owed at any point without penalties.