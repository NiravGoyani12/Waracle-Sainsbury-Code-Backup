import verifyLeaveApplicationButton from "../common_assertions/verifyLeaveApplicationButton";
import constants from "../../data/argos_info_constants";
let timeOut = 30000;

class LeaveApplicationModal {
  /**
   * Define page elements
   */

  modalTitle() {
    return "//h4[@id='component-modal-drawer-title']";
  }

  modalContent() {
    return "//*[contains(text(), 'Are')]";
  }

  modalContinueButton() {
    return "[data-testid='decline-button']";
  }
  modalXIconButton() {
    return "[class='Drawerstyles__CloseButton-sc-7kh0ae-3 iRRqrO']";
  }

  returnToApplicationButtonOnPopupModel() {
    return "[data-testid='accept-button']";
  }

  closeApplicationButtonOnPopupModel() {
     return "[data-test='component-modal-button-close']";
  }

  componentAlertOnPopupModel() {
    return "[data-test='component-alert']";
  }

  componentTextOnPopupModel() {
    return "//*[contains(text(), 'Once you have a quote for your Argos Monthly Payment Plan,')]";
  }

  verifyLeaveApplicationButtonText() {
    const expected_ContinueButtonText = "Continue application";
    const continueApplicationButtonText = browser
      .$(this.modalContinueButton())
      .getText();
    if (
      (assert(
        continueApplicationButtonText.includes(expected_ContinueButtonText)
      ),
      `The continue application button does not include the expected text ${expected_ContinueButtonText}`)
    ) {
      console.log(
        `The continue application button text is ${continueApplicationButtonText}`
      );
    }
  }

  checkModalContent(content) {
    let actualData;
    switch (content) {
      case "Leave without completing?":
        browser.$(this.modalTitle()).waitForDisplayed({timeout:timeOut});
        actualData = browser.$(this.modalTitle()).getText();
        expect(content).to.eql(actualData);
        console.log(`The modal title is ${actualData}`);
        break;
      case "Content":
        browser.$(this.modalContent()).waitForDisplayed({timeout:timeOut});
        actualData = browser.$(this.modalContent()).getText();
        expect(constants.Leave_Modal_Content).eql(
          actualData.replace(/(\r\n|\n|\r)/gm, "")
        );
        console.log(
          `The content on the leave application modal is ${actualData}`
        );
        break;
      case "Leave application button":
        verifyLeaveApplicationButton();
        break;
      case "Continue application button":
        this.verifyLeaveApplicationButtonText();
        break;
      case "Are you sure you want to leave?":
        browser.$(this.modalTitle()).waitForDisplayed({timeout:timeOut});
        actualData = browser.$(this.modalContent()).getText();
        expect(content).to.eql(actualData);
        console.log(`The modal pop up content is ${actualData}`);
        break;
      case "Once you have a quote for your Argos Monthly Payment Plan, you can’t go back to change your application details.":
        browser.$(this.componentTextOnPopupModel()).waitForDisplayed({timeout:timeOut});
        actualData = browser.$(this.componentTextOnPopupModel()).getText();
        expect(content).to.eql(actualData);
        console.log(`The modal text on pop up content is ${actualData}`);
        break;
      case "A record of this application will be added to your credit file.":
        browser.$(this.componentAlertOnPopupModel()).waitForDisplayed({timeout:timeOut});
        actualData = browser.$(this.componentAlertOnPopupModel()).getText();
        expect(content).to.eql(actualData);
        console.log(`The modal alert content is ${actualData}`);
        break;
      default:
        throw new Error("Content does not exist");
    }
  }

  closeModal() {
    browser.$(this.modalXIconButton()).click();
  }

  clickOnLeaveApplicationButtonOnPopupModel() {
    browser.$(this.modalContinueButton()).click();
  }

  clickOnReturnToApplicationButtonOnPopupModel() {
    browser.$(this.returnToApplicationButtonOnPopupModel()).click();
  }

  clickOnApplicationCloseButtonOnPopupModel() {
    browser.$(this.closeApplicationButtonOnPopupModel()).click();
  }

}
export default new LeaveApplicationModal();
