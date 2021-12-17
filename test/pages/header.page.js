const expect = require("chai").expect;
const timeOut = 20000;

class HeaderPage {
  /**
   *** define css locators
   */

  header() {
    return "//div[@id='root']/header";
  }

  argosLogo() {
    return "img[alt='Argos Logo']";
  }

  secureIcon() {
    return '#root  header  [data-testid="secure-icon"]';
  }

  secureIconText() {
    return '#root  header  [data-testid="secure-icon"] p';
  }

  /**
   *** define functions / methods
   */

  verifyHeaderComponent() {
    browser.$(this.header()).waitForDisplayed({ timeout: timeOut  });
    let isExisting = browser.$(this.header()).isExisting();
    expect(isExisting).to.eql(true);
    console.log(isExisting);
  }

  verifyArgosLogoVisibility() {
    browser.$(this.argosLogo()).waitForDisplayed({ timeout: timeOut });
    let isExisting = browser.$(this.argosLogo()).isExisting();
    expect(isExisting).to.eql(true);
    console.log(isExisting);
  }

  verifySecureIconPresence() {
    browser.$(this.secureIcon()).waitForDisplayed({ timeout: timeOut });
    let isExisting = browser.$(this.secureIcon()).isExisting();
    expect(isExisting).to.eql(true);
    console.log(isExisting);
  }
}

export default new HeaderPage();
