import { useEffect, useState } from "react";

import Check from "../../assets/situation/check.svg";
import Clock from "../../assets/situation/clock.svg";
import ForkAndKnife from "../../assets/situation/fork-knife.svg";

import { Cart, Container, Content, Situation } from "./styles";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Meal } from "../../components/Meal";
import { Wrapper } from "../../components/Wrapper";

export function Order() {
  const [mealsAdd, setMealsAdd] = useState([
    {
      id: 1,
      title: "Pizza",
      price: 32.59,
      image:
        "photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      meal_amount: 2,
    },
    {
      id: 2,
      title: "Macarrão",
      price: 32.05,
      image:
        "photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      meal_amount: 1,
    },
    {
      id: 5,
      title: "Macarrão 6",
      price: 32.05,
      image:
        "photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      meal_amount: 3,
    },
  ]);

  const [totalPrice, setTotalPrice] = useState(0);

  const [situation, setSituation] = useState("pending");

  function renderSituation(situation) {
    switch (situation) {
      case "pending":
        return (
          <>
            <img src={Clock} alt="Foto de um relógio." />
            <p>Aguardando confirmação do pagamento</p>
          </>
        );
      case "preparing":
        return (
          <>
            <img src={Check} alt="Foto de um sinal de positivo." />
            <p>Pagamento aprovado!</p>
          </>
        );
      case "delivered":
        return (
          <>
            <img src={ForkAndKnife} alt="Foto de um garfo e uma faca." />
            <p>Pedido entregue!</p>
          </>
        );
    }
  }

  useEffect(() => {
    const calculatedPrice = mealsAdd.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.price * currentValue.meal_amount;
    }, 0);

    const formattedPrice = calculatedPrice.toFixed(2);

    setTotalPrice(formattedPrice);
  }, [mealsAdd]);

  return (
    <Container>
      <Header />
      <Wrapper>
        <Content>
          <Cart>
            <h1>Carrinho</h1>
            {mealsAdd.map(meal => {
              const { id, title, price, image, meal_amount } = meal;
              return (
                <Meal
                  key={String(id)}
                  id={id}
                  title={title}
                  price={Number(price * meal_amount).toFixed(2)}
                  image={image}
                  meal_amount={meal_amount}
                />
              );
            })}
            <p className="total-price">Total: R$ {totalPrice}</p>
          </Cart>
          <Situation>
            <h1>Situação</h1>
            <div className="infos-situation">{renderSituation(situation)}</div>
          </Situation>
        </Content>
      </Wrapper>
      <Footer />
    </Container>
  );
}
