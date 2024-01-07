import React, { useEffect, useState } from "react";
import "./Quoteslide.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Quoteslide() {
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    AOS.init(); // Inicializa AOS
    let current = 1;

    const cycleReviews = () => {
      if (current === 5) {
        current = 1;
      } else {
        current += 1;
      }
      setActiveSlide(current);
    };

    const intervalId = setInterval(() => {
      cycleReviews();
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const reviews = [
    {
      name: "Alan Turing",
      citation: "- Matemático, Lógico y padre de la ciencia de la computación",
      quote: "Solo podemos ver poco del futuro, pero lo suficiente para darnos cuenta de que hay mucho que hacer.",
    },
    {
      name: "Michael Jordan",
      citation: "- Exjugador de la NBA y leyenda del deporte",
      quote: "Siempre he creído que si pones el trabajo, los resultados vendrán.",
    },
    {
      name: "Ludwig von Mises",
      citation: "- Economista y Teórico de la Escuela Austriaca",
      quote: "La acción es el medio más fundamental para mejorar nuestras condiciones. No esperes a que las cosas cambien, ¡cámbialas tú mismo!",
    },
    {
      name: "George Boole",
      citation: "- Fundador de la Lógica Matemática",
      quote: "La mente que se abre a una nueva idea nunca volverá a su tamaño original.",
    },
    {
      name: "Ayn Rand",
      citation: "- Filósofa, Novelista y creadora del objetivismo",
      quote: "La razón y la lógica son las herramientas fundamentales para la toma de decisiones y la mejora personal.",
    },
  ];

  return (
    <div className="App" data-aos="fade-right">
      <ul className="carousel__list">
        {reviews.map((review, index) => {
          const { citation, name, quote } = review;
          const count = index + 1;
          return (
            <li
              className={`carousel__item
                ${count === activeSlide ? " active" : ""}
                ${count < activeSlide ? " left" : ""}
                ${count > activeSlide ? " right" : ""}
              `}
              key={count}
            >
              <blockquote className="carousel__quote">
                <cite>
                  <span className="carousel__name">{name}</span>
                  <span className="carousel__citation">{citation}</span>
                </cite>
                <p>"{quote}"</p>
              </blockquote>
            </li>
          );
        })}
        <li className="carousel__indicator">
        <span
            className={`carousel__dot${activeSlide === 1 ? " active" : ""}`}
          />
          <span
            className={`carousel__dot${activeSlide === 2 ? " active" : ""}`}
          />
          <span
            className={`carousel__dot${activeSlide === 3 ? " active" : ""}`}
          />
          <span
            className={`carousel__dot${activeSlide === 4 ? " active" : ""}`}
          />
          <span
            className={`carousel__dot${activeSlide === 5 ? " active" : ""}`}
          />
        </li>
      </ul>
    </div>
  );
}

export default Quoteslide;
