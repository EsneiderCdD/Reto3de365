import { useState, useEffect } from "react";

const AdviceFetcher = () => {
    const [advice,setAdvice] = useState ('');

    const fetchAdvice = async () => {
        try {
            const response = await fetch('https://api.adviceslip.com/advice');//llamamos a la API
            const data = await response.json(); //Convertimos la respuesta a JSON
            setAdvice(data.slip.advice) //Guardamos el consejo en el estado
        }   catch (error) { 
            console.error('Error al obtener consejo', error);
        }
    };

    useEffect(() => {
        fetchAdvice();
    }, []);

    return (
        <div>
            <h2>Consejo del dia</h2>
            <p>{advice || 'Cargando consejo...'}</p>
            <button onClick={fetchAdvice}>Obtenr otro Consejo</button>
        </div>
    );
};

export default AdviceFetcher;