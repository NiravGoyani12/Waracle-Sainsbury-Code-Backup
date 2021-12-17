@FPP-487
Feature: Create content for How we'll use your personal information side drawer

    As a Customer, I want to be able to understand the Argos/Sainsbury’s will use my data,
    so that I can choose to continue with my application.

    Background:
        Given The customer has an application setup from Argos checkout
        And The customer navigates to how we use your data screen
        When The applicant clicks on the How we will use your data link

    Scenario: Applicant has clicked on Sainsbury's Group Privacy Hub link.
        And  Displays Sainsbury’s Group Privacy Hub link
        When The applicant has clicked on the Sainsbury’s Group Privacy Hub link within the side drawer
        Then A new browser window or tab will open taking user to the following link:https://privacy-hub.sainsburys.co.uk

    Scenario: Applicant has clicked on side drawer link from ‘How we will use your data' screen.
        When  The correct content for how use your data side draw:title is displayed
        And  The correct content for how use your data side draw:content_one is displayed
        And  The correct content for how use your data side draw:content_two is displayed
        And  The correct content for how use your data side draw:content_four is displayed
        And  The X close icon is displayed
        Then The close button is displayed