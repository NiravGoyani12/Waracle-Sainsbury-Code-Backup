@FPP2144

Feature: Continue CTA - from Docusign

        As a Customer, I want to be able to review and sign my contract electronically,
        so that I proceed with my loan application quickly and successfully purchase my chosen products.

        Background:
                Given The customer has an application setup from Argos checkout
       
        #THIS TEST WILL FAIL DUE ON BROWSERSTACK i0S DUE TO DEFECT - 2553
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
                And The customer lands on the It’s time to sign screen
                And The customer clicks on continue to docusign
                Then The customer is navigated to the docusign page
