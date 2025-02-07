import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RickAndMortyCharactersAxios = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchCharacters = async (page) => {
    try {
      setLoading(true);
      setError('');
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
      setCharacters(response.data.results);
    } catch (err) {
      setError('Error al obtener personajes.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters(currentPage);
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(prevPage => (prevPage > 1 ? prevPage - 1 : 1));
  };

  return (
    <div>
      <h2>Personajes de Rick and Morty (Página {currentPage})</h2>
      {loading ? (
        <p>Cargando personajes...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <ul>
          {characters.map((character) => (
            <li key={character.id}>
              <strong>{character.name}</strong> - {character.species} - {character.status}
            </li>
          ))}
        </ul>
      )}
      <button onClick={prevPage} disabled={currentPage === 1}>Anterior</button>
      <button onClick={nextPage}>Siguiente</button>
    </div>
  );
};

export default RickAndMortyCharactersAxios;
