import React, { Component } from 'react';
import PokemonGenerator from './Components/PokemonGenerator';
import { addPokemon, getPokemon, releasePokemon, updatePokemon } from './Services/teamManager';
import Team from './Components/team';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      team: []
    };

    this.catchPokemon = this.catchPokemon.bind(this);
    this.changePokemon = this.changePokemon.bind(this);
    this.deletePokemon = this.deletePokemon.bind(this);
  }

  // when the component loads, get poekmon team from Server
  componentDidMount() {
    getPokemon().then((team) => {
      this.setState({
        team
      });
    });
  }

  // Catch the Pokemon and add it to our team on the server
  catchPokemon(pokemon) {
    // run the add poekmon funciton from the service
    addPokemon(pokemon).then((res) => {
      // if the server cant add a pokemon to the team
      if(res.status !== 200) {
        // do nothing
      }
      // if it does add the pokemon get the new list of the team
      else {
        // run the service getPokemon
        getPokemon().then((team) => {
          // save the pokemon Team
          this.setState({
            team
          });
        });
      }
    });
  }

  // function that will run a service to change the name of a pokemon
  changePokemon(pokemon, name) {
    // run the service function
    updatePokemon(pokemon.teamMemberId, name).then(() => {
      // if we change the pokemon, get the new version of the team
      getPokemon().then((response) => {
        // updes the new team list
        this.setState({
          team: response
        }
        );
      });
    });
  }

  // Delete Pokemon
  deletePokemon(pokemon) {
    // run ther service funciton that does the axios to remove pokeon
    releasePokemon(pokemon.teamMemberId).then(() => {
      // when we remove a pokemon get the updated list
      getPokemon().then((response) => {
        this.setState({
          team: response
        }
        );
      });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png" alt="Pokemon" />
        </div>
        <PokemonGenerator
          catchPokemon={this.catchPokemon}
          teamFull={this.state.teamFull}
        />
        <Team
          team={this.state.team}
          update={this.changePokemon}
          release={this.deletePokemon}
        />
      </div>
    );
  }
}

export default App;
