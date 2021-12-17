
@FPP-1684
Feature: Continue CTA - from Present Offer

        As Customer, I want to be able to continue
        from the ‘Present offer' screen, so that I can progress with my FPP application.

        Background:
                Given The customer has an application setup from Argos checkout

        Scenario: Customer lands on the Quote screen, and has high probability on loan acceptance.
                When The customer navigates to your details screen
                And The customer enters their details using the bypass strategy
                And The customer clicks on continue application button
                And The customer has populated all field inputs and drop downs fields Employment status Occupation
                And The customer clicks on continue application button
                And The customer has populated all field inputs and drop downs fields correctly for holding page journey
                And The customer clicks on continue application button
                And  The customer will progress to the next screen - Check Your Application
                And I intercept XHR calls
                And The customer clicks on continue application button
                And I wait for 30 seconds
                When I get the loan id
                And The customer proceed to next screen - Your quote
                And  The customer clicks on accept terms check box
                And The customer clicks on continue application button
                And I wait for 30 seconds
                And I post a decision ready call
                When The customer lands on the Present offer page
                And The customer clicks on review and sign button
                Then The customer lands on the It’s time to sign screen




