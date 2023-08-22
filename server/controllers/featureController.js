const axios = require('axios');

module.exports = {
  // gets specific product
  getFeatures(req, res) {
    const options = {
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/',
      headers: {
        Authorization: `${process.env.TOKEN}`,
      },
    };
    axios({
      method: 'get',
      url: `${options.url}products/${req.query.currentProductID}`,
      headers: options.headers,
      responseType: 'json',
    })
      .then((response) => {
        res.send(response.data);
      })
      .catch(() => res.sendStatus(500));
  },
};
