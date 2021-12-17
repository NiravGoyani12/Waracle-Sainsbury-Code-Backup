@FPP-662
Feature:  Content for learn more side drawer from My Quote - high probability

    As a Customer, I want to be able to understand the terms used in my personal quote, so that I can be as
    informed as much as possible when choosing to continue with my application.

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
        And The customer clicks on continue application button  
        And The stage 3 holding page is displayed
        And The customer proceed to next screen - Your quote

    Scenario: Customer clicks on the Learn more side drawer link from Quote screen with High probability
        And The customer clicks on the learn more link
        And The customer can see the content as:Quote terms
        And The customer can see the content as:Trolley total:
        And The customer can see the content as:Trolley total content
        And The customer can see the content as:Cost per month:
        And The customer can see the content as:Cost per month content
        And The customer can see the content as:Number of monthly payments:
        And The customer can see the content as:Number of monthly payments content
        And The customer can see the content as:APR:
        And The customer can see the content as:Representative APR content
        And The customer can see the content as:Total charge for credit:
        And The customer can see the content as:Total charge for credit content
        And The customer can see the content as:Total payable:
       And The customer can see the content as:Total payable content
       And  The X close icon is displayed
       Then The side draw close button is displayed
