import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Importamos axios

const AdviceAxios = () => {
  // Estado para almacenar el consejo
  const [advice, setAdvice] = useState('');

  // Función para obtener un consejo usando axios
  const fetchAdvice = async () => {
    try {
      const { data } = await axios.get('https://api.adviceslip.com/advice');
      setAdvice(data.slip.advice);
    } catch (error) {
      console.error('Error al obtener el consejo:', error);
    }
  };

  // useEffect para cargar un consejo al iniciar el componente
  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="advice-card">
      <h2>Consejo con Axios</h2>
      <p>{advice || 'Cargando consejo...'}</p>
      <button onClick={fetchAdvice}>Obtener otro consejo</button>
    </div>
  );
};

export default AdviceAxios;
