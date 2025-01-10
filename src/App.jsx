import React, { useState, useEffect } from 'react';

const App = () => {
  // **Estado para almacenar el consejo**
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
    </div>
  );
};

export default App;
