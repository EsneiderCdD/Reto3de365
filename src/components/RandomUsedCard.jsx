import React, { useState, useEffect } from 'react';

const RandomUserCard = () => {
  // Estado para almacenar la información del usuario (inicialmente null)
  const [user, setUser] = useState(null);

  // Función asíncrona para obtener datos del usuario desde la API
  const fetchUser = async () => {
    try {
      // Hacemos la solicitud a la API de Random User
      const response = await fetch('https://randomuser.me/api/');
      // Convertimos la respuesta a objeto JavaScript
      const data = await response.json();
      // La API devuelve un objeto con la propiedad "results", que es un array; tomamos el primer usuario
      setUser(data.results[0]);
    } catch (error) {
      console.error('Error al obtener el usuario:', error);
    }
  };

  // useEffect se usa para llamar a fetchUser() cuando el componente se monta (solo una vez)
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <h2>Usuario Aleatorio</h2>
      {user ? (
        <div>
          <img src={user.picture.large} alt="Foto de usuario" width="150" />
          <p>
            {user.name.first} {user.name.last}
          </p>
          <p>{user.email}</p>
        </div>
      ) : (
        <p>Cargando usuario...</p>
      )}
      <button onClick={fetchUser}>Obtener otro usuario</button>
    </div>
  );
};

export default RandomUserCard;

