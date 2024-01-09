import React, { useEffect, useState } from "react";
import "./Quoteslide.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Trans } from 'react-i18next';

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
      citation: <Trans i18nKey="cita1" components={[<span className="different" key="0" />]} />,
      quote: <Trans i18nKey="quote1" components={[<span className="different" key="0" />]} />,
    },
    {
      name: "Michael Jordan",
      citation: <Trans i18nKey="cita2" components={[<span className="different" key="0" />]} />,
      quote: <Trans i18nKey="quote2" components={[<span className="different" key="0" />]} />,
    },
    {
      name: "Ludwig von Mises",
      citation: <Trans i18nKey="cita3" components={[<span className="different" key="0" />]} />,
      quote: <Trans i18nKey="quote3" components={[<span className="different" key="0" />]} />,
    },
    {
      name: "George Boole",
      citation: <Trans i18nKey="cita4" components={[<span className="different" key="0" />]} />,
      quote: <Trans i18nKey="quote4" components={[<span className="different" key="0" />]} />,
    },
    {
      name: "Ayn Rand",
      citation: <Trans i18nKey="cita5" components={[<span className="different" key="0" />]} />,
      quote: <Trans i18nKey="quote5" components={[<span className="different" key="0" />]} />,
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
