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
        res.status(500).send({ message: 'Failed to get question list!' });
      });
  },
  updateHelpful: (req, res) => {
    const { type, id } = req.params;
    console.log(type, id);
    let endpoint;
    if (type === 'questions') {
      endpoint = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${id}/helpful`;
    } else if (type === 'answers') {
      endpoint = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/answers/${id}/helpful`;
    } else {
      res.status(400).send({ message: 'Wrong type!' });
      return;
    }
    axios.put(endpoint, {}, {
      headers: {
        Authorization: process.env.TOKEN,
      },
    })
      .then(() => {
        res.status(204).send();
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: 'Failed to update Helpful!' });
      });
  },
};
