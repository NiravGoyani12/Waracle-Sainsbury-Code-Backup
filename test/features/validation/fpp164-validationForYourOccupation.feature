@FPP-164
Feature: Validation for Your Occupation

    As a Customer, I want to be confident that the information
    required about my employment status is relevant to my application,
    so that I can qualify under Argos/SB’s risk profile.

    Background:
        Given The customer has an application setup from Argos checkout
        And The customer navigates to your details screen
        And The customer enters mobile number with spaces within the field as 07898909897
        And The customer clicks on continue application button
        And The customer navigates to the Your occupation screen

    Scenario: Customer is on the Your Occupation screen, wants to progress with their FPP application and has left Occupation field empty - unhappy flow
        When The customer leaves Occupation field blank after selecting it
        When Employment status is not Retired or Student
        When The customer clicks on Continue application button or navigates away from the drop down
        Then The customer will be presented with the validation message: Please select your occupation.
        Then The customer will not progress to next screen
        
    # These scenarios need to refactor as employer input field is hidden and not able to see on UI
    # Scenario: Customer is on the Your Occupation screen, wants to progress with their FPP application and has left Employer field empty - unhappy flow
    #     # When The customer leaves Employer field blank
    #     When Employment status is not Retired or Student
    #     When The customer clicks on Continue application button or navigates away from the drop down
    #     Then The customer will be presented with the validation message: Please enter your employer’s name.
    #     Then The customer will not progress to next screen

    # Scenario: Customer populates Employer field with invalid characters
    #     When The customer attempts to input invalid characters into the Employer field
    #     When The customer clicks on Continue application button or navigates away from the drop down
    #     Then The customer will be presented with the validation message: Please tell us the name of your employer. If your employer’s name has characters such as ampersand or question mark then please leave them out.
    #     Then The customer will not progress to next screen

    Scenario: Customer is on the Your Occupation screen, completes this screen, and wants to progress with their FPP application - happy flow
        When The customer has populated all field inputs and drop downs fields Employment status Occupation
        When The customer clicks on continue application button
        Then The customer will progress to the next screen - Your Finance Details

    Scenario: Customer is on Your Occupation screen, is Retired, and wants to progress to the next screen - happy flow
        When The customer selects Retired as Employment status
        Then Occupation field will be greyed out
        Then The customer will not be able to select populate Occupation and Employer name fields
        Then The customer will progress to next screen Finance details upon clicking the Continue button

    Scenario: Customer is on Your Occupation screen, is a Student, and wants to progress to the next screen - happy flow
        When The customer selects Student as Employment status
        Then Occupation and Employer name fields will be greyed out
        Then The customer will not be able to select populate Occupation and Employer name fields
        Then The customer will progress to next screen Finance details upon clicking the Continue button
