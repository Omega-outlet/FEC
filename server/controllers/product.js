const axios = require('axios');

module.exports = {
  // gets the first product from the API host's product array
  getProduct(req, res) {
    const options = {
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/',
      headers: {
        Authorization: `${process.env.TOKEN}`,
      },
    };
    axios({
      method: 'get',
      url: `${options.url}products`,
      headers: options.headers,
      responseType: 'json',
    })
      .then((response) => {
        res.send(response.data[0]);
      })
      .catch((error) => console.log('Error', error.message));
  },
};
