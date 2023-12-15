// import { BASE_URL } from "./modules/apiModule.JS";
const BASE_URL = "https://pokeapi.co/api/v2/";

class PokemonApi {
  constructor() {
    this.baseUrl = BASE_URL;
  }

  async getPokemon(name) {
    try {
      const pokemonResponse = await axios.get(`${this.baseUrl}pokemon/${name}`);
      return pokemonResponse;
    } catch (error) {}
  }
}
