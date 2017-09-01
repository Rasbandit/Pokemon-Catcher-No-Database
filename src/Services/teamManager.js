import axios from 'axios';

export function addPokemon(pokemon) {
  return axios.post('http://localhost:3030/team', pokemon).then(res => res);
}

export function getPokemon() {
  return axios.get('http://localhost:3030/team').then(res => res.data);
}

export function releasePokemon(id) {
  return axios.delete(`http://localhost:3030/team/${id}`).then(res => res);
}

export function updatePokemon(id, name) {
  console.log(id, name);
  return axios.put(`http://localhost:3030/team/${id}`, { name }).then(res => res);
}
