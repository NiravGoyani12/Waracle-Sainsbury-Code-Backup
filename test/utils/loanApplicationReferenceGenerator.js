
const axios = require("axios");
const environment = require("../../test/config/environments.conf");
const jsSHA = require("jssha");

var loanRef;

const calculateHMAC = body => {
  const shaObj = new jsSHA("SHA3-256", "TEXT", {hmacKey: {value: environment.hmac_secret, format: "TEXT"}});
  shaObj.update(JSON.stringify(body));
  return shaObj.getHash("HEX");
};

class LoanApplicationIDGenerator {

  getLoanId() {
    const request = browser.getRequest(1);
    loanRef = request.response.body.loanApplicationReference;
    console.log(request.response.body);
    console.log(`The customer loan reference is: ${loanRef}`);
  }

  postLoanId() {
    console.log(`The customer loan reference is being used for decision ready is: ${loanRef}`);
    const body = {
      appRef: loanRef,
      channel: "Web",
      decision: "Approved",
      status: "PIDIQ",
    };
    const hmac = calculateHMAC(body);
    axios.post(
      environment.decision_ready_webhook_url,
      body,
      { headers: { authorization: `SB-HMAC-SHA3-256 ${hmac}` } }
    );
  }
}

export default new LoanApplicationIDGenerator();
