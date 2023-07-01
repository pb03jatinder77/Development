const axios = require('axios');

/** get your Loaction */
exports.getLoaction = async (request, result) => {
    try {
      const response =  await axios.get(`http://ip-api.com/json/${request}`);
      result(null, response);
    } catch (err) {
      result(err, null);
    }
  };
  