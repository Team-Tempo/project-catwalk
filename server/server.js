const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const cors = require('cors');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const PORT = 1337;
const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.all('/*', (req, res) =>  {
  axios({
    method: req.method,
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hratx${req.url}`,
    headers: {
      Authorization: GITHUB_TOKEN,
    },
    data: req.body
  })
  .then((response) => {
    console.log('Success')
    res.send(response.data);
  })
  .catch((err) => {
    res.status(400).send('Error')
    console.log('There was an error', err);
  })
})


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})