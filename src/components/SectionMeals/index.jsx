import { useState, useRef, useEffect } from 'react';

import { Button } from '../Button';
import { Card } from '../Card';
import { Container } from './styles';

export function SectionMeals({ title, meals }) {
  const [showAFewCards, setShowAFewCards] = useState(true);

  const [heightOfFewCards, setHeightOfFewCards] = useState(0);

  const mealsContainer = useRef();

  function getTheHeightOfACard() {
    const card = mealsContainer.current.querySelector('.my-card');

    const cardHight = card.offsetHeight;

    const cardMargin = Number(
      window
        .getComputedStyle(card, null)
        .getPropertyValue('margin-bottom')
        .split('px')[0]
    );

    return cardHight + cardMargin;
  }

  function getTheHeightOfSomeCards() {
    const size = getTheHeightOfACard();

    const visibleCards = meals.length >= 3 ? 3 : meals.length;

    let totalHeight = 0;

    for (let c = 0; c < visibleCards; c++) {
      totalHeight += size;
    }

    return totalHeight;
  }

  function handleVisibleCards() {
    if (showAFewCards) {
      setShowAFewCards(prevState => !prevState);
    } else {
      setShowAFewCards(prevState => !prevState);
    }
  }

  function renderButtons() {
    if (meals.length < 3) return null;

    if (showAFewCards) {
      return (
        <Button
          title="Mostrar mais"
          onClick={handleVisibleCards}
        />
      );
    } else {
      return (
        <Button
          title="Mostrar menos"
          onClick={handleVisibleCards}
        />
      );
    }
  }

  useEffect(() => {
    function showAllCardsDuringASearch() {
      const fewCards = getTheHeightOfSomeCards();

      setHeightOfFewCards(fewCards);
    }

    showAllCardsDuringASearch();
  }, []);

  return (
    <Container
      className="my-section-meals"
      heightOfFewCards={heightOfFewCards}
    >
      <h2>{title}</h2>
      <div
        className={showAFewCards ? 'show-few' : ''}
        ref={mealsContainer}
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
      {renderButtons()}
    </Container>
  );
}
