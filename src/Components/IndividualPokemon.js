import React, { Component } from 'react';

export default class IndividualPokemon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: props.pokemon,
      newName: props.pokemon.name
    };
  }

  // when the user types a new name in the text box
  handleChange(newName) {
    this.setState({
      newName
    });
  }

  render() {
    return(
      <div className="pokemonCard">
        <img src={this.state.pokemon.sprites.front_default} alt={this.state.pokemon.name} />
        <div className="pokemonCardRight">
          <div className="pokmonCardTop">
            <h4>Lv: {this.state.pokemon.lvl}</h4>
            <input type="text" className="pokemonCardInput" value={this.state.newName} onChange={(e) => { this.handleChange(e.target.value); }} />
          </div>
          <div className="buttons">
            <button onClick={() => { this.props.update(this.state.pokemon, this.state.newName); }}>Update</button>
            <button onClick={() => { this.props.release(this.state.pokemon); }}>Release</button>
          </div>
        </div>
      </div>
    );
  }
}
