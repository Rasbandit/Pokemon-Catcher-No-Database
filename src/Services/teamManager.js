import axios from 'axios';

export function addPokemon(pokemon) {
  return axios.post('/team', pokemon).then(res => res);
}

export function getPokemon() {
  return axios.get('/team').then(res => res.data);
}

export function releasePokemon(id) {
  return axios.delete(`/team/${id}`).then(res => res);
}

export function updatePokemon(id, name) {
  console.log(id, name);
  return axios.put(`/team/${id}`, { name }).then(res => res);
}
