import React, { useState, useEffect } from "react";
import axios from "axios";


const BreweryListAxios = () => {

    const [breweries, setBreweries] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchBreweries = async () => {
        try {
            setLoading(true); 
            const response = await axios.get("https://api.openbrewerydb.org/breweries");
       
            setBreweries(response.data);

        } catch (error) { 
            console.error("Error al obtener las cervecerias:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBreweries();
    }, []);





    return (
  <div>
    <h2>Lista de Cervecerías</h2>
    {loading ? (
      <p>Cargando cervecerías...</p>
    ) : (
      <ul>
        {breweries.map((brewery) => (
          <li key={brewery.id}>
            <strong>{brewery.name}</strong> - {brewery.city}, {brewery.state}
          </li>
        ))}
      </ul>
    )}
    <button onClick={fetchBreweries}>Actualizar Lista</button>
  </div>
);

};

export default BreweryListAxios;