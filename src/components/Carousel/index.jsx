import { useRef } from "react";

import { Card } from "../Card";
import { Container } from "./styles";

export function Carousel({ title, meals }) {
  const carousel = useRef(null);

  function handleCarouselRight(e) {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  function handleCarouselLeft(e) {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  return (
    <Container>
      <h2>{title}</h2>
      <div className="carousel-window">
        <button onClick={handleCarouselLeft}>{"<"}</button>
        <button onClick={handleCarouselRight}>{">"}</button>
        <div className="carousel-meals" ref={carousel}>
          {meals.map(meal => (
            <Card
              key={String(meal.id)}
              title={meal.title}
              description={meal.description}
              image={meal.image}
              price={meal.price}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
