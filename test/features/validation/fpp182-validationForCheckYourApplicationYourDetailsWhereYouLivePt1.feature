@FPP-182
Feature:Validation for Check your application - About you and Where you live section (Pt1 of 2)

        As a Customer, I want to be able to edit and have my details validated,
        so that I can correct where appropriate in order to proceed with my application.

        Background:
                Given The customer has an application setup from Argos checkout
                And The customer navigates to your details screen
                And The customer enters mobile number with spaces within the field as 07898909897
                And The customer clicks on continue application button
                And The customer has populated all field inputs and drop downs fields Employment status Occupation
                And The customer clicks on continue application button
                And The customer has populated all field inputs and drop downs fields correctly for holding page journey
                And The customer clicks on continue application button
                And  The customer will progress to the next screen - Check Your Application
                And The customer clicks to edit About you section

        Scenario: Customer has clicked to edit About you section, has updated one or more fields, and clicks to proceed with application - happy path
                When The customer inputs email address as:John_Smith@hotmail.com
                And The customer inputs mobile number as:07995133458
                And The customer clicks on done button
                And The customer clicks on continue application button
                And The stage 3 holding page is displayed
                And The customer proceed to next screen - Your quote

        Scenario:Customer has clicked to edit About you section, has updated one or more fields, and clicks to proceed with application - happy path
                When The customer inputs email address as:johnmail@hotmail.com
                And  The customer clicks on done button
                And The customer clicks on continue application button
                And The stage 3 holding page is displayed

        Scenario:Customer has clicked to edit About you section, has input an email address in an incorrect format, and wants to continue - unhappy flow
                When The customer inputs email address as:johnmail.mail
                And  The customer clicks on done button
                Then The customer will be presented with the following validation error:Please enter a valid email address.
                And The customer will not progress past the check my application screen

        Scenario:Customer has clicked to edit About you section, has completed all fields, but has selected 0 for Years at current address and 0 for Months at current address - unhappy flow
                And The customer has populated current Years and Months at current address as 0,0
                Then The customer will be presented with the following validation error:Please select how long you’ve been at the current address.

        Scenario:Customer has clicked to edit About you section, has completed all fields, and has edited  0 for Years and 0 for Months at Previous  address
                And The customer has populated current Years and Months at current address as 1,0
                And The customer has populated previous Years and Months at previous address as 0,0
                Then The customer will be presented with the following validation error:Please select how long you’ve been at the previous address.

        Scenario:Customer has clicked to edit About you section, and has input a mobile phone number in  an incorrect format - unhappy flow
                When The customer inputs mobile number as:07864******
                And  The customer clicks on done button
                Then The customer will be presented with the following validation error:Please enter a valid mobile phone number. eg. 07123123123.
                And The customer will not progress past the check my application screen

        Scenario:Customer edits age as less than 18 years
                When The customer enters their DOB equating to less than 18 years old
                And  The customer clicks on done button
                Then The customer will be presented with the following validation error:You must be 18 years old or over in order to progress with your application.

        Scenario:Customer edits their DOB and they are 83 years of age or over at the end of their loan term - unhappy path
                When The customer enters their DOB 83 or older at the end of their loan term
                And  The customer clicks on done button
                Then The customer will be presented with the following validation error:You must be less than 83 years old at the end of the loan term.

        Scenario:Customer edits DOB incorrect format (must use numbers)
                When The customer inputs dob as:01,01,198
                And   The customer clicks on done button
                Then The customer will be presented with the following validation error:Please enter a valid date of birth.

        Scenario:Customer has clicked to edit About you section, does not edit any field, and clicks Done button - happy flow
                And The customer clicks on done button
                Then The Your details and Where you live section will display all fields unchanged
                And The done button will no longer be displayed
                And The edit link will be displayed for About you section

        Scenario: Customer has clicked to Edit the Your details and Where you live section, updates this section, and clicks Done button - happy flow
                When The customer inputs email address as:John_Smith@hotmail.com
                And The customer inputs mobile number as:07995133458
                And The customer inputs dob as:01,01,1975
                And The customer clicks on done button
                Then The your details section displays:John_Smith@hotmail.com,07995133458,01-01-1975

        #THESE SCENARIOS BELOW HAVE ISSUES ON IOS WILL REMOVE
        #Scenario: Customer has selected to edit a specific section, has made 1 or more changes to a field and / or drop down, and clicks ‘Continue’ button before clicking ‘Done’ button.
                #When The customer inputs email address as:johnmail@hotmail.com
                #And The customer inputs mobile number as:07978657199
                #And The customer clicks on continue application button
                #Then The done error message displays:Please confirm by clicking "Done"

        #Scenario:Customer has clicked to edit About you section, and has deleted / cleared the input from one or more of the Your details and Where you live section, and tries to proceed - unhappy flow
                #When The customer inputs email address as:null
                #And  The customer clicks on done button
                #Then The customer will be presented with the following validation error:Please enter your email address.