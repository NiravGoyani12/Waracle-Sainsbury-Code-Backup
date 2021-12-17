@FPP-270
Feature:Create Accessibility modal and requirement capture

    Background:
        Given The customer has an application setup from Argos checkout
        And The customer navigates to how we use your data screen
        When Customer has launched the modal to receive documentation in an accessible format

    Scenario:Customer launches the link to receive documentation in an accessible format
        And The communication modal displays:Accessible Communication?
        And The communication modal displays:Communication content
        And The communication modal displays: None radio button
        And The communication modal displays: Large Print radio button
        And The communication modal displays:Braille radio button
        And The communication modal displays:Audio radio button
        And The communication modal displays:Confirm button
        And The communication modal displays:Close button
        And The communication modal displays:X icon

    Scenario:Customer makes a communication selection,and confirms and closed
        And  Customer has made a radio button selection:Large Print
        When The customer clicks on the communication modal confirm button
        And  The communication modal displays:Accessible Communication?
        And  The communication modal displays:Thanks, we have updated your preference.
        And  The communication modal displays:Close button
        When The customer clicks on the communication modal close button
        And  The communication modal is closed
        Then The how we use your data title is displayed