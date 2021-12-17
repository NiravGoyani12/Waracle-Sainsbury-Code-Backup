const config = require("../config/main.conf");
class NavigationUtility {
  navigateToPreviousScreen(){
    browser.back();
  }

};

export default new NavigationUtility();
