import { useState, useRef, useEffect } from "react";

import { Container } from "./styles";

import { Button } from "../Button";
import { Card } from "../Card";

export function SectionMeals({ title, meals }) {
  const [showAllCards, setShowAllCards] = useState(false);

  const [heightOfFewCards, setHeightOfFewCards] = useState(0);
  const [heightOfAllCards, setHeightOfAllCards] = useState(0);

  const mealsContainer = useRef();

  function getTheHeightOfACard() {
    const card = mealsContainer.current.querySelector(".my-card");

    const cardHight = card.offsetHeight;

    const cardMargin = Number(
      window
        .getComputedStyle(card, null)
        .getPropertyValue("margin-bottom")
        .split("px")[0]
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

  function getTheHeightOfAllCards() {
    const size = getTheHeightOfACard();

    let totalHeight = 0;

    meals.forEach(meal => (totalHeight += size));

    return totalHeight;
  }

  function handleVisibleCards() {
    if (showAllCards) {
      setShowAllCards(prevState => !prevState);
    } else {
      setShowAllCards(prevState => !prevState);
    }
  }

  function renderButtons() {
    if (meals.length < 3) return null;

    if (showAllCards) {
      return <Button title="Mostrar menos" onClick={handleVisibleCards} />;
    } else {
      return <Button title="Mostrar mais" onClick={handleVisibleCards} />;
    }
  }

  useEffect(() => {
    const fewCards = getTheHeightOfSomeCards();
    const allCards = getTheHeightOfAllCards();

    setHeightOfFewCards(fewCards);
    setHeightOfAllCards(allCards);
  }, []);

  return (
    <Container
      className="my-section-meals"
      heightOfFewCards={heightOfFewCards}
      heightOfAllCards={heightOfAllCards}
    >
      <h2>{title}</h2>
      <div
        className={showAllCards ? "show-all" : "show-few"}
        ref={mealsContainer}
      >
        {meals.map(meal => {
          const { id, title, description, image, price } = meal;

          return (
            <Card
              key={String(id)}
              meal_id={id}
              title={title}
              description={description}
              image={image}
              price={price}
            />
          );
        })}
      </div>
      {/* {showAllCards ? (
        <Button title="Mostrar menos" onClick={handleVisibleCards} />
      ) : (
        <Button title="Mostrar mais" onClick={handleVisibleCards} />
      )} */}
      {renderButtons()}
    </Container>
  );
}
