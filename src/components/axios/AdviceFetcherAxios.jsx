import React, { useState, useEffect} from "react";
import axios from "axios";

const AdviceFetcherAxios = () => { 
    const [advice, setAdvice] = useState("");


    const fetchAdvice = async () => {
        try {
            const response = await axios.get("https://api.adviceslip.com/advice");
            setAdvice(response.data.slip.advice);
        } catch (error) {
            console.error("Error al obtener el consejo:", error);
        }
    };

    useEffect(() => {
        fetchAdvice();
    }, []);

    return (
        <div>
            <h2>Consejo del dia (Axios)</h2>
            <p>{advice || "Cargando consejo..."}</p>
            <button onClick={fetchAdvice}>Obtener otro consejo</button>
        </div>
    );
}

export default AdviceFetcherAxios

