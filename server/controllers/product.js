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
  getRandomProduct(req, res) {
    const min = 0;
    const max = 10;
    const productsCount = 11;
    // get random product from [min] through [max] of the returned products array
    // the returned product array returns [productsCount] number of products
    // constraints: 0 <= min < max < productsCount
    const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
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
      params: { count: productsCount },
    })
      .then((response) => {
        res.send(response.data[randomNum]);
      })
      .catch((error) => console.log('Error', error.message));
  },
};
