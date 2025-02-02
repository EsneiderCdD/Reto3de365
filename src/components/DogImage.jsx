import React, { useState, useEffect } from 'react';

const DogImage = () => {
  const [imageUrl, setImageUrl] = useState('');

  const fetchDogImage = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setImageUrl(data.message);
    } catch (error) {
      console.error('Error al obtener la imagen:', error);
    }
  };

  useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <div>
      <h2>Imagen de un Perro 🐶</h2>
      {imageUrl ? <img src={imageUrl} alt="Perro" width="300" /> : <p>Cargando imagen...</p>}
      <br />
      <button onClick={fetchDogImage}>Obtener otra imagen</button>
    </div>
  );
};

export default DogImage;
