
@FPP-96
Feature: Create Content for Your Quote - Loan Probability

        As a Customer, I want to be able to understand the impact on
        my credit file before consenting to a hard credit search
        so that I can choose to continue with my application.

        Background:
                Given The customer has an application setup from Argos checkout

        Scenario: Customer lands on the Quote screen, and has low probability on loan acceptance direct.
                And The customer navigates to your details screen
                And The customer enters mobile number with spaces within the field as 07898909897
                And The customer clicks on continue application button
                And The customer has populated all field inputs and drop downs fields Employment status Occupation
                And The customer clicks on continue application button
                When The customer has populated all details with a low income
                And  The customer clicks on continue application button
                And  The customer will progress to the next screen - Check Your Application
                And  The customer clicks on continue application button
                And  The customer proceed to next screen - Your quote
                And The your quote screen displays:probability imagery
                And The your quote screen displays:Loan probability
                And The your quote screen displays:refuse content
                And The your quote screen displays:info banner
                And The your quote screen displays:further info
                And The your quote screen displays:Checkbox content
                And The your quote screen displays:Checkbox content two
                And Continue application button is displayed
                Then Leave application button is displayed

        Scenario: Customer lands on the Quote screen, and has high probability on loan acceptance.
                When The customer navigates to your details screen
                And The customer enters mobile number with spaces within the field as 07898909897
                And The customer clicks on continue application button
                And The customer has populated all field inputs and drop downs fields Employment status Occupation
                And The customer clicks on continue application button
                And The customer has populated all field inputs and drop downs fields correctly for holding page journey
                And The customer clicks on continue application button
                And  The customer will progress to the next screen - Check Your Application
                And The customer clicks on continue application button
                And The customer proceed to next screen - Your quote
                And The your quote screen displays:Your quote
                And The your quote screen displays:Loan probability
                And The your quote screen displays:probability imagery
                And The your quote screen displays:accept content
                And The your quote screen displays:Argos Monthly Payment Plan Personalised Quote
                And The your quote screen displays:Trolley total
                And The your quote screen displays:Trolley total amount
                And The your quote screen displays:Cost per month
                And The your quote screen displays:Cost per month amount
                And The your quote screen displays:Number of monthly payments
                And The your quote screen displays:Number of monthly payments amount
                And The your quote screen displays:APR (Annual Percentage Rate)
                And The your quote screen displays:APR amount
                And The your quote screen displays:Total charge for credit
                And The your quote screen displays:Total charge for credit amount
                And The your quote screen displays:Total payable
                And The your quote screen displays:Total payable amount
                And The your quote screen displays:Learn more link
                And The your quote screen displays:Credit subject to status
                And The your quote screen displays:Credit subject to status text
                And The your quote screen displays:T&Cs apply
                And The your quote screen displays:Checkbox content
                And The your quote screen displays:Checkbox content two
                And  Continue application button is displayed
                Then Leave application button is displayed





