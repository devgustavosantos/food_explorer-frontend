import { useRef } from 'react';

import { Card } from '../Card';
import { Container } from './styles';

export function Carousel({ title, meals }) {
  const carousel = useRef(null);

  function getCardWidth() {
    const card = carousel.current.querySelectorAll('.my-card')[1];

    const cardWidth = card.offsetWidth;

    const cardMargin = Number(
      window
        .getComputedStyle(card, null)
        .getPropertyValue('margin-right')
        .split('px')[0]
    );

    return cardWidth + cardMargin;
  }

  function handleCarouselRight(e) {
    e.preventDefault();

    const size = getCardWidth();

    carousel.current.scrollLeft += size;
  }

  function handleCarouselLeft(e) {
    e.preventDefault();

    const size = getCardWidth();

    carousel.current.scrollLeft -= size;
  }

  return (
    <Container>
      <h2>{title}</h2>
      <div className="carousel-window">
        {meals.length > 2 && (
          <>
            <button onClick={handleCarouselLeft}>{'<'}</button>
            <button onClick={handleCarouselRight}>{'>'}</button>
          </>
        )}
        <div
          className="carousel-meals"
          ref={carousel}
        >
          {meals.map(meal => {
            const { id, title, description, image, price, favorite } = meal;

            return (
              <Card
                key={String(id)}
                meal_id={id}
                title={title}
                description={description}
                image={image}
                price={price}
                isFav={favorite}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}
