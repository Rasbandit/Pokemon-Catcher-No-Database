import React, { Component } from 'react';
import IndividualPokemon from './IndividualPokemon';

export default class Team extends Component {
  constructor(props) {
    super(props);

    this.state = {
      team: props.team
    };
  }

  // when we get a new list of pokemon or the team is modified in any way
  // save the new team
  componentWillReceiveProps(props) {
    this.setState({
      team: props.team
    });
  }

  render() {
    // loop through the pokemon team passed in and make a component for each one
    // pass it the needed funcionality to delete the pokemon and update it
    const team = this.state.team.map((pokemon, index) => (<IndividualPokemon
      pokemon={pokemon}
      key={pokemon.name}
      update={this.props.update}
      release={this.props.release}
    />)
    );
    return (
      <div className="team">
        <h1>Your Pokemon Team</h1>
        <div className="teamList">
          {team}
        </div>
      </div>
    );
  }
}
