import React, { useState } from 'react';
import confetti from 'canvas-confetti'; // Importamos la librería
import fotoo from './fotoo.jpg';  // Importamos la imagen

const LogrosVirtudes = () => {
  // Estado para controlar si la imagen se muestra
  const [showImage, setShowImage] = useState(false);

  // Función para disparar confeti
  const handleCelebrate = () => {
    // Mostrar la imagen por 3 segundos
    setShowImage(true);
    setTimeout(() => {
      setShowImage(false); // Ocultar la imagen después de 3 segundos
    }, 3000);

    // Disparar confeti más grande y en toda la pantalla
    confetti({
      particleCount: 200,         // Más partículas de confeti
      spread: 90,                 // Ángulo de dispersión
      startVelocity: 40,          // Velocidad inicial más rápida
      decay: 0.9,                 // Mantener los trozos por más tiempo
      scalar: 1.5,                // Hacer el confeti más grande
      origin: { x: 0.5, y: 0.5 }, // Hacer que el confeti venga desde el centro de la pantalla
    });
  };

  return (
    <section>
      <h2>Mis logros y virtudes</h2>
      <p>
        Desde pequeño me destaqué siempre en prácticamente todo lo que hacía, adquirí buenas calificaciones y en la mayoría de veces en mi clase
        quedaba ya sea en el primer puesto, o en el segundo. Recibí numerosas premiaciones por mi actitud tranquila, pacífica y respetuosa
        ante los demás. Soy una persona empática, la cual está dispuesta siempre a ayudar al prójimo.
        Desde los 7 años practico fútbol y he estado en numerosos equipos en mi ciudad. Jugando torneos importantes como
        "Torneo Nacional". En este torneo nos enfrentamos a equipos de otras ciudades. "Pony Futbol". En este torneo nos enfrentamos a equipos muy fuertes
        de esta ciudad y disponíamos de la oportunidad de que, en caso de que clasificáramos, empezaríamos a jugar contra equipos de otras ciudades, incluso 
        países y todo sería televisado. "Liga Antioqueña". Este es el torneo más importante en Antioquia y nos enfrentábamos con equipos muy fuertes de todo
        este departamento.
        <br /> Cabe recalcar que siempre fui muy enfocado y disciplinado con dicho deporte, ganando así numerosos premios y torneos.
      </p>
      <button onClick={handleCelebrate} className="custom-btn">
        ⚽️ ¡Celebrar!
      </button>
      {/* Mostrar la imagen temporalmente */}
      <div className={`image-container ${showImage ? 'active' : ''}`}>
        <img src={fotoo} alt="Yo celebrando" />
      </div>
    </section>
  );
};

export default LogrosVirtudes;
