const axios = require("axios");
const application_data = require("../../data/application_id_setup_constants");
const environment = require("../../test/config/environments.conf");
class ApplicationIDGenerator {
  getApplicationId() {
    const response = axios.post(
      environment.dev3_setup_endpoint,
      application_data
    );
    return response.then((result) => {
      let appId = result.data.applicationId
      console.log(`The application id is: ${appId}\n`)
      return result.data.applicationId;
    });
  }
}

export default new ApplicationIDGenerator();
