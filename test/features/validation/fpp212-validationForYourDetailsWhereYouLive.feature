@FPP-212 @FPP-2771
Feature: Validation for Your details and Where you live Pt 2

  As a Customer, I want to be confident that the
  information required about myself is relevant to my application,
  so that I can meet KYC requirements to confirm my identity.

  Background:
    Given The customer has an application setup from Argos checkout
    And The customer navigates to your details screen
    #And The customer clicks on accept cookies button

  Scenario Outline: Customer is prompted to enter Previous address but leaves one or more Previous address mandatory field(s) blank - unhappy path
    When The customer has populated all fields with time at current address being less than 2 years
    When The customer leaves <Field> mandatory field blank
    When The customer clicks on continue application button
    And  The customer will be presented with the following validation error:<Error Message>
    When The customer corrects the error against the mandatory <Field>
    Then The error validation message will disappear for <Error Message>

    Examples:
      | Field        | Error Message              |
      | Postcode     | Please enter postcode.     |
      | House Name   | Please enter house name.   |
      | House Number | Please enter house number. |
      | Town         | Please enter Town/city.    |

  Scenario:Customer is on Your details and Where you live screen, and has lived in current address for less than 2 years.
    When The customer has populated all fields with time at current address being less than 2 years
    Then The customer will be presented with the following validation error:We need your address for the previous 2 years to perform a credit check.

  Scenario:Customer is required to input previous address history  - happy path
    When The customer has populated all fields with time at current address being less than 2 years
    When The customer will be able to capture their Previous address
    When The customer clicks on continue application button
    Then The customer will progress to the next screen Your Occupation

  Scenario:Customer leaves optional field blank from Previous address capture
    When The customer has populated all fields with time at current address being less than 2 years
    When The customer completes mandatory previous address fields only and leaves County blank
    When The customer clicks on continue application button
    Then The customer will progress to the next screen Your Occupation

  Scenario:Customer is on the Your details and Where you live screen, wants to progress with their FPP application, but has selected 0 for Years at previous address and 0 for Months at previous address - unhappy flow
    When The customer has populated all fields with time at current address being less than 2 years
    And  The customer has populated Years and Months previous address as 0
    When The customer clicks on continue application button
    And  The customer will be presented with the following validation error:Please select how long you’ve been at the previous address.
    Then The customer will not progress to the next screen Your Occupation
