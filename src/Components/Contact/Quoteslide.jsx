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
      name: "Jonathan D.",
      citation: "Sale Closed in 2019",
      quote: "Door.com has been great. I feel like I got to work with a specialist at each point isdsadsadsadsadsadsadasdsa",
    },
    {
      name: "Peter C.",
      citation: "Sale Closed in 2019",
      quote: "I have bought and sold ten homes. This has been the most rewarding experience of them all. True professionalism and insight as well as great customer service makes me a believer in the Door.com business model.",
    },
    {
      name: "Paulette H.",
      citation: "Sale Closed in 2019",
      quote: "The entire experience from onboarding to the sale of our home has been professional, expedited quickly, and I saved close to $14,000 in commissions. I will absolutely be using Door.com for the sale of my next property.",
    },
    {
      name: "Ryan W.",
      citation: "Sale Closed in 2019",
      quote: "Service was excellent EVERY step of the process! No way to tell that Door.com provided a flat rate service by the way that they treated us and handled every step of the transactions.",
    },
    {
      name: "Kevin R.",
      citation: "Sale Closed in 2019",
      quote: "Everyone we worked with was very responsive, professional and easy to work with. A great experience all around. I work in this industry too so my expectations are high. Great work by all.",
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
