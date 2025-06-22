import React, { useEffect, useState } from "react";
import { Animated } from "react-animated-css";
import Confetti from "react-confetti";
import {
  BackgroundImages,
  MainContent,
  BorderedText,
  Day,
  Direction,
  Controls,
} from "./components";
import "./App.css"; // Estilos personalizados

function App() {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Hacer desaparecer el confeti después de 5 segundos
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {/* <h1 style={{textAlign: 'center', color: '#0074D9'}}>Invitación Liam</h1> */}
      {showConfetti && <Confetti colors={["#0074D9", "#1E90FF", "#00BFFF", "#3399FF", "#3A5FCD"]} />}

      <BackgroundImages />
      <Animated
        animationIn="fadeIn"
        isVisible={true}
      > 
      <div className="content">
        <MainContent />
        <div className="day-content">
          <BorderedText text="Sabado" />
          <Day day="5" month="Julio" />
          <BorderedText text="2:30 P.M." />
        </div>
        <Direction direction="D. F., Tenorios, Iztapalapa, 09680 Ciudad de México, CDMX, México" />
        <Controls />
      </div>
      </Animated>
    </div>
  );
}

export default App;
