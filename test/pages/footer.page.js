const expect = require("chai").expect;
const constants = require("../../data/argos_info_constants");
const timeOut = 15000;

class FooterPage {
  /**
   * Define page elements
   */

  footerComponent() {
    return '#root footer[data-test="component-footer"]';
  }

  footerLinks() {
    return "#root footer p a";
  }

  privacyHubLink() {
    return '#root footer p a[data-test ="footer-privacy-hub"]';
  }

  privacyPolicyLink() {
    return '#root footer p a[data-test ="footer-privacy-policy"]';
  }

  cookiesPolicyLink() {
    return '#root footer p a[data-test ="footer-privacy-policy"]';
  }

  listOfCookiesLink() {
    return '#root footer p a[data-test ="footer-cookie-list"]';
  }

  cookiesPreferencesLink() {
    return '[data-test ="footer-cookie-preferences"]';
  }

  termsAndConditionsLink() {
    return "p:nth-of-type(1) > a:nth-of-type(5)";
  }

  footerCopyRightText() {
    return '#root footer p[data-test="footer-copyright"]';
  }

  footerStaticText() {
    return "//*[contains(text(),'Argos Limited is authorised and regulated by the F')]";
  }

  footerLogos() {
    return "#root footer .container span picture";
  }

  visaLogo() {
    return '#root footer .container span picture [alt="visa logo"]';
  }

  masterCardLogo() {
    return '#root footer .container span picture [alt="mastercard logo"]';
  }

  amexLogo() {
    return '#root footer .container span picture [alt="amex logo"]';
  }

  payPalLogo() {
    return '#root footer .container span picture [alt="paypal logo"]';
  }

  sslLogo() {
    return '#root footer .container span picture [alt="ssl logo"]';
  }

  /**
   *** define functions / methods
   */

  verifyFooterComponent() {
    let footerComponent = browser.$(this.footerComponent());
    let isExisting = footerComponent.isExisting();
    expect(isExisting).to.eql(true);
    console.log(`The footer component displaying is ` + isExisting);
  }

  verifyFooterLogo(visa, masterCard, amex, payPal, ssl) {
    try {
      if (visa) {
        let isExisting = browser.$(this.visaLogo()).isExisting();
        expect(isExisting).to.eql(true);
        console.log(
          `The ${visa} logo displaying on the footer is is ${isExisting}`
        );
      }
      if (masterCard) {
        let isExisting = browser.$(this.masterCardLogo()).isExisting();
        expect(isExisting).to.eql(true);
        console.log(
          `The ${masterCard} logo displaying on the footer is is ${isExisting}`
        );
      }
      if (amex) {
        let isExisting = browser.$(this.amexLogo()).isExisting();
        expect(isExisting).to.eql(true);
        console.log(
          `The ${amex} logo displaying on the footer is is ${isExisting}`
        );
      }

      if (payPal) {
        let isExisting = browser.$(this.payPalLogo()).isExisting();
        expect(isExisting).to.eql(true);
        console.log(
          `The ${payPal} logo displaying on the footer is ${isExisting}`
        );
      }
      if (ssl) {
        let isExisting = browser.$(this.sslLogo()).isExisting();
        expect(isExisting).to.eql(true);
        console.log(
          `The ${ssl} logo displaying on the footer is ${isExisting}\n`
        );
      }
    } catch (e) {
      console.log("NO LOGO FOUND ON THE FOOTER!", e);
    }
  }

  verifyFooterStaticText() {
    browser.$(this.footerStaticText()).scrollIntoView();
    browser.$(this.footerStaticText()).waitForDisplayed({ timeout: timeOut });
    let staticText = browser.$(this.footerStaticText()).getText();
    expect(staticText).to.eql(constants.FooterStatic_Text);
    console.log(staticText + "\n");
  }

  verifyFooterLinks(
    privacyHub,
    privacyPolicy,
    cookiesPolicy,
    listOfCookies,
    cookiesPreferences,
    termsAndConditions
  ) {
    try {
      if (privacyHub) {
        let isExisting = browser.$(this.privacyHubLink()).isExisting();
        browser.$(this.privacyHubLink()).scrollIntoView();
        expect(isExisting).to.eql(true);
        console.log(
          `The ${privacyHub} link displaying on the footer is ` + isExisting
        );
      }
      if (privacyPolicy) {
        let isExisting = browser.$(this.privacyPolicyLink()).isExisting();
        browser.$(this.privacyPolicyLink()).scrollIntoView();
        expect(isExisting).to.eql(true);
        console.log(
          `The ${privacyPolicy} link displaying on the footer is ` + isExisting
        );
      }

      if (cookiesPolicy) {
        let isExisting = browser.$(this.cookiesPolicyLink()).isExisting();
        browser.$(this.cookiesPolicyLink()).scrollIntoView();
        expect(isExisting).to.eql(true);
        console.log(
          `The ${cookiesPolicy} link displaying on the footer is ` + isExisting
        );
      }
      if (listOfCookies) {
        let isExisting = browser.$(this.listOfCookiesLink()).isExisting();
        browser.$(this.listOfCookiesLink()).scrollIntoView();
        expect(isExisting).to.eql(true);
        console.log(
          `The ${cookiesPolicy} link displaying on the footer is ` + isExisting
        );
      }

      if (cookiesPreferences) {
        let isExisting = browser.$(this.cookiesPreferencesLink()).isExisting();
        browser.$(this.cookiesPreferencesLink()).scrollIntoView();
        expect(isExisting).to.eql(true);
        console.log(
          `The ${cookiesPreferences} link displaying on the footer is ` +
            isExisting
        );
      }
      if (termsAndConditions) {
        let isExisting = browser.$(this.termsAndConditionsLink()).isExisting();
        browser.$(this.termsAndConditionsLink()).scrollIntoView();
        expect(isExisting).to.eql(true);
        console.log(
          `The ${termsAndConditions} link displaying on the footer is ` +
            isExisting
        );
      }
    } catch (e) {
      console.log("NO FOOTER LINKS FOUND !", e);
    }
  }

  verifyFooterArgosCopyRightText() {
    let argosCopyRightText = browser.$(this.footerCopyRightText()).getText();
    let isExisting = browser.$(this.footerCopyRightText()).isExisting();
    browser.$(this.footerCopyRightText()).scrollIntoView();
    console.log(isExisting);
    expect(argosCopyRightText).to.eql(constants.ArgosCopyRight_Text);
    console.log(argosCopyRightText);
  }

  clickOnPrivacyHubLink() {
    browser.$(this.privacyHubLink()).click();
  }

  clickOnPrivacyPolicyLink() {
    browser.$(this.privacyPolicyLink()).click();
  }

  clickOnCookiesPolicyLink() {
    browser.$(this.cookiesPolicyLink()).click();
  }

  clickOnListOfCookiesLink() {
    browser.$(this.listOfCookiesLink()).click();
  }

  clickOnTermsAndConditionsLink() {
    browser.$(this.termsAndConditionsLink()).click();
  }

  verifyFooterUrlOpening() {
    const handles = browser.getWindowHandles();
    expect(handles.length).to.be.greaterThan(1);
    if (handles.length > 1) {
      browser.switchToWindow(handles[1]);
      browser.closeWindow();
      browser.switchToWindow(handles[0]);
    } else {
      throw new Error("The footer link did not open");
    }
  }
}
export default new FooterPage();
