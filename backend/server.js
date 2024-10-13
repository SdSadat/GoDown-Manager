const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authController = require('./authController');
const godowns = require('./data/godowns.json');
const items = require('./data/items.json');
const { compareSync } = require('bcryptjs');


const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/auth/login', authController.login);

app.get('/', (req, res) => {
  res.status(200).send("Welcome to the Server!");
});

app.get('/protected', authController.verifyToken, (req, res) => {
  res.status(200).send("You have access!");
});

app.get('/godowns', (req, res) => {
  res.status(200).send(godowns);
});

app.get('/items/:godownId', (req, res) => {
  console.log('req.params', req.params);
  const godownId = req.params.godownId;
  const godownItems = [];
  items.forEach(item => {
    // console.log('item.godown_id', item.godown_id, ' ', godownId);
    if (item.godown_id === godownId) {
      godownItems.push(item);
    }
  });
  console.log(godownItems.length)
  res.status(200).send(godownItems);
});


app.get('/godowns/:godownId/children', (req, res) => {
  const godownId = req.params.godownId;
  const childGoDowns = godowns.filter(godown => godown.parent_id === godownId);
  res.status(200).send(childGoDowns);
});

app.listen(5000, () => console.log('Server is running on port 5000'));
