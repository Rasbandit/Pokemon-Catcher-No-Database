const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 3030;
const teamManager = require('./controllers/teamManager');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/team', teamManager.getPokemon);
app.post('/team', teamManager.addPokemon);
app.put('/team/:teamMemberId', teamManager.updatePokemon);
app.delete('/team/:teamMemberId', teamManager.releasePokemon);

app.listen(port, () => {
  console.log(`Ship docked at port: ${port}`);
});
