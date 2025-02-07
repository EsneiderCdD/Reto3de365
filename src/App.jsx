import React, { useState, useEffect } from 'react';
import AdviceAxios from './components/AdviceAxios';
import RandomDOg from './components/RandomDog';
import RandomCat from './components/RandomCat';
import AdviceFetcher from './components/AdviceFetcher';
import BreakingBadQuote from './components/BreakingBadQuote';
import DogImage from './components/DogImage';
import ChuckNorrisJoke from './components/ChuckNorrisJoke';
import RandomUsedCard from './components/RandomUsedCard';
import AdviceFetcherAxios from './components/axios/AdviceFetcherAxios';
import BreweryListAxios from './components/axios/BreweryListAxios';
import PokemonSearchAxios from './components/axios/PokemonSearchAxios';
const App = () => {

  const [advice, setAdvice] = useState('');

  // **Función para obtener un consejo aleatorio**
  const fetchAdvice = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      setAdvice(data.slip.advice); // Accedemos al consejo dentro del JSON
    } catch (error) {
      console.error('Error al obtener el consejo:', error);
    }
  };

  // **Usar useEffect para cargar un consejo al iniciar la app**
  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="app">
      <h1>Consejo del día</h1>
      <div className="advice-card">
        <p>{advice || 'Cargando consejo...'}</p>
        <button onClick={fetchAdvice}>Obtener otro consejo</button>
      </div>

      <div>
        <AdviceAxios /> 
        <RandomDOg />
        <RandomCat></RandomCat>
        <BreakingBadQuote></BreakingBadQuote>
        <AdviceFetcher />
        <DogImage></DogImage>
        <ChuckNorrisJoke></ChuckNorrisJoke>
        <RandomUsedCard></RandomUsedCard>
        <AdviceFetcherAxios></AdviceFetcherAxios>
        <BreweryListAxios></BreweryListAxios>
        <PokemonSearchAxios></PokemonSearchAxios>
      </div>


    </div>
    
  );
};

export default App;

