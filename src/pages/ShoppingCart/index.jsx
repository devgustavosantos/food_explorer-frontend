import { useEffect, useState } from "react";
import { TfiReceipt } from "react-icons/tfi";
import { FiCreditCard } from "react-icons/fi";

import { Cart, Container, Content, Payment } from "./styles";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Meal } from "../../components/Meal";
import { Wrapper } from "../../components/Wrapper";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import qrCodeImg from "../../assets/qrcode.svg";
import pixImg from "../../assets/pix.svg";
import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/cart";
import { api } from "../../services/api";

export function ShoppingCart() {
  const { userInfos } = useAuth();

  const { mealsInCart, handleRemoveMeal } = useCart();

  const [cardPayment, setCardPayment] = useState(false);

  const [totalPrice, setTotalPrice] = useState(0);

  function handlePaymentOption(withCard) {
    withCard ? setCardPayment(true) : setCardPayment(false);
  }

  function handleFinalizePurchase() {
    if (!userInfos) {
      const response = confirm(`
        Para utilizar esse recurso você precisa estar logado.
        Deseja se logar agora?
      `);

      if (response) {
        navigate("/login");
      }
    } else {
      alert(
        "Pedido feito com sucesso! Agora aguarde a confirmação do pagamento."
      );
    }
  }

  useEffect(() => {
    const calculatedPrice = mealsInCart.reduce(
      (previousValue, currentValue) => {
        return previousValue + currentValue.price * currentValue.amount;
      },
      0
    );

    const formattedPrice = calculatedPrice.toFixed(2);

    setTotalPrice(formattedPrice);
  }, [mealsInCart]);

  return (
    <Container>
      <Header />
      <Wrapper>
        <Content>
          {!mealsInCart.length ? (
            <h1>Nenhum prato foi adicionado ainda!</h1>
          ) : (
            <>
              <Cart>
                <h1>Carrinho</h1>
                {mealsInCart.map(meal => {
                  const { meal_id, title, price, image, amount } = meal;
                  return (
                    <Meal
                      key={String(meal_id)}
                      id={meal_id}
                      title={title}
                      price={Number(price * amount).toFixed(2)}
                      image={image}
                      meal_amount={amount}
                      onClick={() => handleRemoveMeal(meal_id)}
                      isNew
                    />
                  );
                })}
                <p className="total-price">Total: R$ {totalPrice}</p>
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
                        <Input
                          title="Validade"
                          placeholder="04/25"
                          type="text"
                        />
                        <Input title="CVC" placeholder="000" type="number" />
                      </div>
                    </form>
                    <Button
                      title="Finalizar Pagamento"
                      icon={TfiReceipt}
                      onClick={handleFinalizePurchase}
                    />
                  </div>
                </div>
              </Payment>
            </>
          )}
        </Content>
      </Wrapper>
      <Footer />
    </Container>
  );
}
