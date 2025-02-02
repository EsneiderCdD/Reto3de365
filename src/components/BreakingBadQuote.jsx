import React, { useState, useEffect } from "react";

const BreakingBadQuote = () => {
  // Estado para almacenar la cita y el autor
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  // Función para obtener una cita aleatoria
  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.breakingbadquotes.xyz/v1/quotes");
      const data = await response.json();
      setQuote(data[0].quote);
      setAuthor(data[0].author);
    } catch (error) {
      console.error("Error al obtener la cita:", error);
    }
  };

  // Cargar una cita al iniciar el componente
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quote-container">
      <h2>💬 Cita de Breaking Bad</h2>
      {quote ? (
        <blockquote>
          <p>"{quote}"</p>
          <cite>- {author}</cite>
        </blockquote>
      ) : (
        <p>Cargando cita...</p>
      )}
      <br />
      <button onClick={fetchQuote}>Obtener otra cita</button>
    </div>
  );
};

export default BreakingBadQuote;
