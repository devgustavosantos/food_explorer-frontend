import { TfiReceipt } from "react-icons/tfi";

import { Cart, Container, Content, Payment } from "./styles";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Meal } from "../../components/Meal";
import { Wrapper } from "../../components/Wrapper";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import qrCodeImg from "../../assets/qrcode.svg";
import pixImg from "../../assets/pix.svg";
import { FiCreditCard } from "react-icons/fi";
import { useState } from "react";

export function ShoppingCart() {
  const mealsAdd = [
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
  ];

  const [cardPayment, setCardPayment] = useState(false);

  function handlePaymentOption(withCard) {
    withCard ? setCardPayment(true) : setCardPayment(false);
  }

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
                  price={price}
                  image={image}
                  meal_amount={meal_amount}
                  isNew
                />
              );
            })}
            <p className="total-price">Total: R$ 103,88</p>
          </Cart>
          <Payment>
            <h1>Pagamento</h1>
            <div className="box-payment">
              <div className="buttons-payment">
                <button
                  type="button"
                  className={cardPayment ? "" : "selected-payment"}
                  onClick={() => handlePaymentOption(false)}
                >
                  <img src={pixImg} alt="Imagem do símbolo do Pix" />
                  PIX
                </button>
                <button
                  type="button"
                  className={cardPayment ? "selected-payment" : ""}
                  onClick={() => handlePaymentOption(true)}
                >
                  <FiCreditCard />
                  Crédito
                </button>
              </div>
              <div className="payment-option">
                <img
                  src={qrCodeImg}
                  alt="Imagem do qrCode"
                  className={cardPayment ? "hidden" : ""}
                />
                <form className={cardPayment ? "" : "hidden"}>
                  <Input
                    title="Número do Cartão"
                    placeholder="0000 0000 0000 0000"
                    type="number"
                  />
                  <div className="card-details">
                    <Input title="Validade" placeholder="04/25" type="text" />
                    <Input title="CVC" placeholder="000" type="number" />
                  </div>
                </form>
                <Button title="Finalizar Pagamento" icon={TfiReceipt} />
              </div>
            </div>
          </Payment>
        </Content>
      </Wrapper>
      <Footer />
    </Container>
  );
}
