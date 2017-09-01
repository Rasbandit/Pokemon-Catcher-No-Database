let team = [];
let id = 0;
const MAX_TEAM_SIZE = 6;

module.exports = {
  // add Pokemon to our team array
  addPokemon(req, res) {
    const pokemon = req.body;
    // if we have too many pokemon
    if (team.length >= MAX_TEAM_SIZE) {
      // return to the client an error
      res.status(500);
    } else {
      // add an id property
      pokemon.teamMemberId = id;
      // inrement id
      id += 1;
      // push the pokemon
      team.push(pokemon);
      // send a confirmation to the client
      res.status(200).send();
    }
  },

  // send the pokemon team
  getPokemon(req, res) {
    // send the pokemon team
    res.status(200).send(team);
  },

  // update the name of the pokemon or set to a nickName
  updatePokemon(req, res) {
    //
    const newName = req.body.name;
    const teamMemberId = req.params.teamMemberId;
    team = team.map((pokemon) => {
      if(pokemon.teamMemberId == teamMemberId) {
        pokemon.name = newName;
        return pokemon;
      }
      return pokemon;
    });

    res.status(200).send();
  },

  releasePokemon(req, res) {
    const teamMemberId = req.params.teamMemberId;
    team = team.filter(pokemon => !(pokemon.teamMemberId == teamMemberId));
    res.status(200).send(team);
  }
}
;
