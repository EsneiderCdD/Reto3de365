import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Importamos axios

const RandomDog = () => {
  // 1️⃣ Estado para almacenar la imagen del perro
  const [dogImage, setDogImage] = useState('');
  
  // 2️⃣ Función para obtener una imagen aleatoria
  const fetchDogImage = async () => {
    try {
      const { data } = await axios.get('https://dog.ceo/api/breeds/image/random');
      setDogImage(data.message); // Guardamos la URL de la imagen en el estado
    } catch (error) {
      console.error('Error al obtener la imagen del perro:', error);
    }
  };

  // 3️⃣ useEffect para cargar una imagen al iniciar el componente
  useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <div className='dog-card'>
      <h2>Imagen aleatoria de perro</h2>
      {dogImage ? <img src={dogImage} alt="Perro" /> : 'Cargando imagen...'}
      <button onClick={fetchDogImage}>Obtener otra imagen</button>
    </div>
  );
};

export default RandomDog;