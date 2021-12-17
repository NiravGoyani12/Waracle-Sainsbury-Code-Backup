@FPP-185
Feature: Validation for Check your application - Your occupation section

    Background:
        Given The customer has an application setup from Argos checkout
        When The customer navigates to your details screen
        And The customer enters mobile number with spaces within the field as 07898909897
        And The customer clicks on continue application button
        And The customer has populated all field inputs and drop downs fields Employment status Occupation
        And The customer clicks on continue application button
        And The customer has populated all field inputs and drop downs fields correctly for holding page journey
        And The customer clicks on continue application button
        And  The customer will progress to the next screen - Check Your Application
        And The customer clicks to edit Your Occupation section

# These scenarios need to refactor as employer input field is hidden and not able to see on UI
    Scenario: Customer corrects a field after an error validation has appeared
        When The customer edits Employment status to Full Time Employed
        And The customer has edited Occupation status field
        # And The customer has edited The Employer field with invalid characters
        And The customer clicks on done button
        # And The customer will be presented with the message: Please tell us the name of your employer. If your employer’s name has characters such as ‘&’ or ‘?’ then please leave them out.
        # And The customer has edited The Employer field
        # Then The validation message and red box border disappears

    Scenario: Customer clicks to edit Your Occupation section, wants to progress with their FPP application and has left Employer field empty - unhappy flow
        When The customer edits Employment status to Full Time Employed
        # When The customer edits Employer field to be blank
        And The customer has edited Occupation status field
        And The customer clicks on done button
        # Then The customer will be presented with the message: Please enter your employer’s name

    # Scenario:Customer has clicked to edit Your Occupation, and edits Employer field with invalid characters
    #     Then The customer edits Employment status to Full Time Employed
    #     And The customer has edited Occupation status field
    #     And The customer has edited The Employer field with invalid characters
    #     And The customer clicks on done button
    #     Then The customer will be presented with the message: Please tell us the name of your employer. If your employer’s name has characters such as ‘&’ or ‘?’ then please leave them out.
    #     And The customer clicks on Continue application button
    #     And The customer will not be able to progress

    Scenario:Customer has clicked to edit Your Occupation, has updated one or more fields, and clicks to proceed with application - happy path
        And The customer has edited Occupation status field
        And The customer has edited Employment status field
        # And The customer has edited The Employer field
        And The customer clicks on done button
        And The customer clicks on continue application button
        Then The customer proceed to next screen - Your quote

    Scenario:Customer clicks to edit Your Occupation section, updates this section, and wants to progress with their FPP application - happy flow
        And The customer has edited Occupation status field
        And The customer has edited Employment status field
        # And The customer has edited The Employer field
        And The customer clicks on done button
        Then The your occupation section will display Full Time Employed
        And The done button will no longer be displayed
        And The edit link for the ‘Your occupation’ section will re-appear
