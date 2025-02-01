import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomCat = () => {
    const [catImage, setCatImage] = useState('');

    const fetchCatImage = async () => {
        try {
            const { data } = await axios.get('https://api.thecatapi.com/v1/images/search');
            setCatImage(data[0].url);
        } catch (error) {
            console.error('Error al obtener la imagen del gato:', error);
        }           
    };

    useEffect(() => {   
        fetchCatImage();
    }, []); 

    return (
        <div className='cat-card'>
            <h2>Imagen aleatoria de gato</h2>
            {catImage ? <img src={catImage} alt="Gato" /> : 'Cargando imagen...'}
            <button onClick={fetchCatImage}>Obtener otra imagen</button>
        </div>          

    

    )   
};

export default RandomCat