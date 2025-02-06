import React, { useState, useEffect } from "react";

const ChuckNorrisJoke = ()  => {
    const [joke, setJoke] = useState('');
    const [iconUrl, setIconURL] = ('');

    const [copySuccess, setCopySuccess] = useState('');

    const fetchJoke = async () => {
        try {
            const response = await fetch('https://api.chucknorris.io/jokes/random');
            const data = await response.json(); 
            setJoke(data.value);
            setIconURL (data.icon_url);
        }   catch (error) {
            console.error('Error al obtener el chiste:', error);
        }
    };
    useEffect(() => {
        fetchJoke();
    }, []);
    
    
    const copyJokeToClipboard = async () => {
        try {
          await navigator.clipboard.writeText(joke);
          setCopySuccess('¡Chiste copiado!');
          // Opcional: limpiar el mensaje después de unos segundos
          setTimeout(() => setCopySuccess(''), 2000);
        } catch (error) {
          console.error('Error al copiar el chiste:', error);
          setCopySuccess('Error al copiar');
        }
      };
      
    return (
        <div className="joke-container">
          <h2>Chiste de Chuck Norris</h2>
          {/* Mostrar el ícono si existe */}
          {iconUrl && <img src={iconUrl} alt="Icono de Chuck Norris" width="50" />}
          {/* Mostrar el chiste o un mensaje de carga */}
          <p>{joke || 'Cargando chiste...'}</p>
          <button onClick={fetchJoke}>Obtener otro chiste</button>
          <button onClick={copyJokeToClipboard}>Copiar chiste</button>
          {/* Mostrar mensaje de copia exitosa o error */}
          {copySuccess && <p style={{ color: 'green' }}>{copySuccess}</p>}
        </div>
      );


};

export default ChuckNorrisJoke