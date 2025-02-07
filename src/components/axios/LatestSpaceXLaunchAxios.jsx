import React, { useState, useEffect } from "react";
import axios from "axios";

const LatestSpaceXLaunchAxios = () => {

    const [launch, setLaunch] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchLatestLaunch = async () => {
        try {
            setLoading(true);
            setError('');
            const response = await axios.get('https://api.spacexdata.com/v4/launches/latest');
            setLaunch(response.data);
        } catch (err) {
            setError('Error al obtener el lanzamiento de SpaceX.');
            setLaunch(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLatestLaunch();
    }, []);

    return (
        <div>
        <h2>Último Lanzamiento de SpaceX</h2>
        {loading ? (
          <p>Cargando lanzamiento...</p>
        ) : error ? (
          <p style={{ color: 'red' }}>{error}</p>
        ) : launch ? (
          <div>
            <p><strong>Misión:</strong> {launch.name}</p>
            <p><strong>Fecha (UTC):</strong> {new Date(launch.date_utc).toLocaleString()}</p>
            <p><strong>Detalles:</strong> {launch.details || 'No hay detalles disponibles.'}</p>
          </div>
        ) : (
          <p>No se encontró información del lanzamiento.</p>
        )}
        <button onClick={fetchLatestLaunch}>Actualizar Lanzamiento</button>
      </div>
    )
        
    
};


export default LatestSpaceXLaunchAxios;