const axios = require('axios');

module.exports = {
  getQuestions: (req, res) => {
    const productId = req.query.product_id;
    const { page } = req.query;
    const { count } = req.query;

    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/', {
      params: {
        product_id: productId,
        page,
        count,
      },
      headers: {
        Authorization: process.env.TOKEN,
      },
    })
      .then((response) => res.status(200).send(response.data))
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: 'Failed!' });
      });
  },
};
