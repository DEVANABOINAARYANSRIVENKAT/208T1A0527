const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

let numbers = [];

app.get('/api/numbers', (req, res) => {
  res.json(numbers);
});

app.post('/api/numbers', (req, res) => {
  const newNumber = req.body;
  numbers.push(newNumber);
  res.json(newNumber);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});