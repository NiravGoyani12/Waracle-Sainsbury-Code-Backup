@FPP-966
Feature: Create side drawer content for Direct Debit Guarantee

Background:

    Given The customer has an application setup from Argos checkout

  Scenario:  Customer clicks on the Direct Debit Guarantee link from Your Financials Screen
    And The customer navigates to your financials screen
    When The customer is viewing the bank account details section
    When The customer click on the Direct Debit Guarantee link
    Then The customer can see the Direct Debit Guarantee Side Drawer
    Then The side drawer will appear with Heading1 as Direct Debit Guarantee
    And The side drawer will appear with Bullet1 as The Guarantee is offered by all banks and building societies that accept instructions to pay Direct Debits.
    And The side drawer will appear with Bullet2 as If there are any changes to the amount, date or frequency of your Direct Debit, Sainsbury’s Bank will notify you (normally 10 working days) in advance of your account being debited or as otherwise agreed. If you request Sainsbury’s Bank to collect a payment, confirmation of the amount and date will be given to you at the time of the request.
    And The side drawer will appear with Bullet3 as If an error is made in the payment of your Direct Debit, by Sainsbury’s Bank or your bank or building society, you are entitled to a full and immediate refund of the amount paid from your bank or building society.
    And The side drawer will appear with Sub-bullet as If you receive a refund you are not entitled to, you must pay it back when Sainsbury’s Bank asks you to.
    And The side drawer will appear with Bullet4 as You can cancel a Direct Debit at any time by simply contacting your bank or building society. Written confirmation may be required. Please also notify us.
    And The side drawer will appear with close icon
    And The side drawer will appear with Close CTA

  Scenario: Verify close CTA button functionality on Direct Debit Side drawer for Your Financials Screen
    Given The customer navigates to your financials screen
    When The customer is viewing the bank account details section
    When The customer click on the Direct Debit Guarantee link
    Then The customer can see the Direct Debit Guarantee Side Drawer
    When The customer opts to close the Direct Debit Side Drawer using close button
    Then The Direct Debit Side Drawer component will close

  Scenario: Customer clicks on the Direct Debit Guarantee link from expanded Finance section of Review my application screen
    Given The customer navigates to review application screen
    When The customer has clicked to edit the Your financials section
    Then The customer can see the bank account details section
    When The customer click on the Direct Debit Guarantee link on the Your financials section
    Then The customer can see the Direct Debit Guarantee Side Drawer on the Your financials section
    And The side drawer on the finance details section will appear with Heading1 as Direct Debit Guarantee
    And The side drawer on the finance details section will appear with Bullet1 as The Guarantee is offered by all banks and building societies that accept instructions to pay Direct Debits.
    And The side drawer on the finance details section will appear with Bullet2 as If there are any changes to the amount, date or frequency of your Direct Debit, Sainsbury’s Bank will notify you (normally 10 working days) in advance of your account being debited or as otherwise agreed. If you request Sainsbury’s Bank to collect a payment, confirmation of the amount and date will be given to you at the time of the request.
    And The side drawer on the finance details section will appear with Bullet3 as If an error is made in the payment of your Direct Debit, by Sainsbury’s Bank or your bank or building society, you are entitled to a full and immediate refund of the amount paid from your bank or building society.
    And The side drawer on the finance details section will appear with Sub-bullet as If you receive a refund you are not entitled to, you must pay it back when Sainsbury’s Bank asks you to.
    And The side drawer on the finance details section will appear with Bullet4 as You can cancel a Direct Debit at any time by simply contacting your bank or building society. Written confirmation may be required. Please also notify us.
    And The side drawer on the finance details section will with close icon
    And The side drawer on the finance details section will with Close CTA

  Scenario: Verify close icon functionality on Direct Debit Guarantee Side Drawer from Review my application screen
    Given The customer navigates to review application screen
    When The customer has clicked to edit the Your financials section
    Then The customer can see the bank account details section
    When The customer click on the Direct Debit Guarantee link on the Your financials section
    Then The customer can see the Direct Debit Guarantee Side Drawer on the Your financials section

  Scenario: Verify close CTA button functionality on Direct Debit Side Drawer from Review my application screen
    Given The customer navigates to review application screen
    When The customer has clicked to edit the Your financials section
    Then The customer can see the bank account details section
    When The customer click on the Direct Debit Guarantee link on the Your financials section
    Then The customer can see the Direct Debit Guarantee Side Drawer on the Your financials section
    When The customer opts to close the Direct Debit Side Drawer using close button on finance details section
    Then The Direct Debit Side Drawer component will close on finance details section