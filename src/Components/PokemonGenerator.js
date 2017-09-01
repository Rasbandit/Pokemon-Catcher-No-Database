import React, { Component } from 'react';
import getPokemon from '../Services/PokemonAPI';


export default class PokemonGenerator extends Component {
  constructor() {
    super();

    this.state = {
      randomPokemon: {}
    };
  }

  // generate a random pokemon
  generatePokemon() {
    // we only want a pokemon from the original 151
    const generationOne = 151;
    // generate a random bumber betwen 1-151
    const randomPokemonNumber = Math.floor(Math.random() * generationOne);
    // run the service to get get pokemon from the pokeAPI
    getPokemon(randomPokemonNumber).then((response) => {
      // save the pokemon
      this.setState({
        randomPokemon: response
      });
    });
  }

  // save the pokemon to our team
  catchPokemon() {
    // if there is not a random pokemon
    if(!this.state.randomPokemon.name) {
      // end the function
      return;
    }
    // run the catch pokemon function from the parent (app) component
    this.props.catchPokemon(this.state.randomPokemon);
    // clear the random pokemon so they can not catch the same one twice
    this.setState({
      randomPokemon: {}
    });
  }


  render() {
    return (
      <div className="generator">
        <h2>Lvl: {this.state.randomPokemon.lvl ? this.state.randomPokemon.lvl : ''} {this.state.randomPokemon.name} </h2>
        <div className="imgContainer">
          <img src={this.state.randomPokemon.sprites ? this.state.randomPokemon.sprites.front_default : ''} alt="" />
        </div>
        <button onClick={() => { this.generatePokemon(); }}>Find Pokemon</button>
        <button onClick={() => { this.catchPokemon(); }}>Catch Pokemon</button>
      </div>
    );
  }
}
