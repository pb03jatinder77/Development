const axios = require('axios');
/** get you ip adress */
exports.getIPAddress = async (request, result) => {
  try {
    const response = await axios.get('https://api.ipify.org?format=json');
    const data = response.data.ip
    result(null, data);
  } catch (err) {
    result( err, null);
  }
};
