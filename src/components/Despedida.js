import React, { useState } from 'react';

// Las citas motivacionales para cada meta
const motivationalQuotes = {
  "Ser exitoso": [
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día. - Robert Collier",
    "El único lugar donde el éxito viene antes que el trabajo es en el diccionario. - Vidal Sassoon",
    "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. - Albert Schweitzer"
  ],
  "Tener una familia": [
    "Una familia feliz es un refugio en medio de las tormentas de la vida. - J. K. Rowling",
    "La familia no es algo importante, lo es todo. - Michael J. Fox",
    "La familia es el ancla en la vida de uno. - Jodi Picoult"
  ],
  "Tener una carrera estable": [
    "La estabilidad es la base de una vida plena. - Zig Ziglar",
    "El trabajo duro es la base del éxito. - Michelle Obama",
    "El éxito consiste en ir de fracaso en fracaso sin perder el entusiasmo. - Winston Churchill"
  ],
  "Viajar por el mundo": [
    "El mundo es un libro y aquellos que no viajan leen solo una página. - San Agustín",
    "Viajar es la única cosa que puedes comprar que te hace más rico. - Anónimo",
    "No se viaja para escapar de la vida, sino para que la vida no se nos escape. - Anónimo"
  ],
  "Ayudar a los demás": [
    "La mayor satisfacción de la vida es hacer feliz a los demás. - Anónimo",
    "El mejor modo de encontrarse a uno mismo es perderse en el servicio de los demás. - Mahatma Gandhi",
    "Haz el bien y no mires a quién. - Anónimo"
  ]
};

const Despedida = () => {
  const [gameStarted, setGameStarted] = useState(false); 
  const [selectedGoal, setSelectedGoal] = useState(""); 
  const [quote, setQuote] = useState(""); 

  const handleStartGame = () => {
    setGameStarted(true); 
  };

  const handleGoalSelect = (goal) => {
    setSelectedGoal(goal); 
    const randomQuote = motivationalQuotes[goal][Math.floor(Math.random() * motivationalQuotes[goal].length)]; 
    setQuote(randomQuote); 
  };

  return (
    <section>
      <h2>Despedida Interactiva</h2>
      {!gameStarted ? (
        <div>
          <p>¿Qué metas tienes en tu vida?</p>
          <button onClick={handleStartGame} className="custom-btn">Comenzar</button>
        </div>
      ) : (
        <div>
          <h3>Elige una de tus metas:</h3>
          <ul>
            {Object.keys(motivationalQuotes).map((goal) => (
              <li key={goal}>
                <button onClick={() => handleGoalSelect(goal)} className="custom-btn">{goal}</button>
              </li>
            ))}
          </ul>
          {quote && (
            <div>
              <h4>Cita Motivacional:</h4>
              <p>{quote}</p>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Despedida;
