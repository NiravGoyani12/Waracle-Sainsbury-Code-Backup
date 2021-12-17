@FPP-696
Feature:Validation for Your Occupation and Your Occupation section from Review application screen

    As a Customer, I want to be confident that the information required about my employment status
    is relevant to my application,so that I can qualify under Argos/SB’s risk profile.

    Background:
        Given The customer has an application setup from Argos checkout
        And The customer navigates to your details screen
        And The customer enters mobile number with spaces within the field as 07898909897
        And The customer clicks on continue application button

    Scenario Outline: Customer is on the Your Occupation screen, selects Unemployed or House Person as their employment status, and wants to progress to next screen
        When The customer selects <Occupation> as Employment status
        And Occupation field will be greyed out
        And The customer will not be able to select populate Occupation field
        Then The customer will progress to next screen Finance details upon clicking the Continue button
        Examples:
            | Occupation   |
            | Unemployed   |
            | House Person |

    Scenario Outline: Customer is on the Review your application screen, and edits their Employment status to Unemployed or House Person in the Occupation section
        And The customer has populated all field inputs and drop downs fields Employment status Occupation
        And The customer clicks on continue application button
        And The customer has populated all field inputs and drop downs fields correctly for holding page journey
        And The customer clicks on continue application button
        And  The customer will progress to the next screen - Check Your Application
        And The customer clicks to edit Your Occupation section
        When The customer selects <Occupation> as Employment status
        And Occupation field will be greyed out
        And The customer will not be able to select populate Occupation field
        And The customer clicks on done button
        And The your occupation section will display <Occupation>
        Then The edit link for the ‘Your occupation’ section will re-appear
        Examples:
            | Occupation   |
            | Unemployed   |
            | House Person |