@FPP-2771
Feature:Validation for FE - Previous address fields to be updated including validations

  As a Customer, I want to be able to edit the previous address fields to be updated
  including validations so that I can correct where appropriate in order to proceed with my application.

  Background:
    Given The customer has an application setup from Argos checkout
    And The customer navigates to your details screen

  Scenario: Customer is prompted to enter Previous address but leaves both House name and House number blank
    When The customer has populated all fields with time at current address being less than 2 years
    And The customer completes mandatory previous address fields and leaves House Name and House Number empty
    When The customer clicks on continue application button
    And  The customer will be presented with the following validation error:Please enter either a House number or House name.
    When The customer corrects the error against the mandatory House Number
    And The error validation message will disappear for Please enter either a House number or House name.
    When The customer clicks on continue application button
    Then The customer will progress to the next screen Your Occupation

  Scenario Outline:Customer is prompted to enter Previous address, completes all fields and leaves any of the following fields blank - flat number, street name, and county.
    When The customer has populated all fields with time at current address being less than 2 years
    When The customer completes mandatory previous address fields only and leaves <Field> blank
    When The customer clicks on continue application button
    Then The customer will progress to the next screen Your Occupation

    Examples:
      | Field       |
      | Flat Number |
      | Street Name |
      | County      |

  Scenario Outline:Customer is prompted to enter Previous address but inputs format incorrectly
    When The customer has populated all fields with time at current address being less than 2 years
    When The customer inputs incorrect <Field> mandatory field in previous address
    When The customer clicks on continue application button
    Then The customer will be presented with the following validation error:<Error Message>
    When The customer corrects the error against the mandatory <Field>
    And The error validation message will disappear for <Error Message>
    When The customer clicks on continue application button
    Then The customer will progress to the next screen Your Occupation

    Examples:
      | Field        | Error Message                                                   |
      | House Number | Please enter a valid House number, between 1 and 10 characters. |
      | Street       | Please enter a valid Street name, between 1 and 40 characters.  |
      | Town         | Please enter a valid Town/city, between 1 and 40 characters.    |
      | County       | Please enter a valid County,  between 1 and 30 characters.      |
      | Postcode     | Please enter a valid postcode, this must be within the UK.      |
