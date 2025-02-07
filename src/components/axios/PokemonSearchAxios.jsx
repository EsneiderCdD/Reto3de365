import React, { useState, useEffect} from "react";
import axios from 'axios';

const PokemonSearchAxios = () => {
    const [query, setQuery] = useState('');
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const searchPokemon = async () => {
        if (!query) return;
        setLoading(true);
        setError('');
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`);
            setPokemon(response.data);
        } catch (error) {
            setError('Pokemon no encontrado');
            setPokemon(null);
        } finally {
            setLoading(false);
        }
    };  
    return (
    <div>
      <h2>Buscar Pokémon</h2>
      <input 
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Ingrese el nombre del Pokémon"
      />
      <button onClick={searchPokemon}> Buscar </button>
      {loading && <p>Cargando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {pokemon && (
        <div>
          <h3>{pokemon.name}</h3>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p><strong>Altura: </strong> {pokemon.height}</p>
          <p><strong>Peso: </strong> {pokemon.weight}</p>
          <p><strong>Habilidades: </strong> {pokemon.abilities.map((ability) => ability.ability.name).join(', ')}</p>
        </div>
      )}
    </div>
  );
};
export default PokemonSearchAxios;
    