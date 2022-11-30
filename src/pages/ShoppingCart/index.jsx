import { useEffect, useState } from 'react';
import { FiCreditCard } from 'react-icons/fi';
import { TfiReceipt } from 'react-icons/tfi';
import { useNavigate } from 'react-router-dom';

import pixImg from '../../assets/pix.svg';
import qrCodeImg from '../../assets/qrcode.svg';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Meal } from '../../components/Meal';
import { Wrapper } from '../../components/Wrapper';
import { useAuth } from '../../hooks/auth';
import { useCart } from '../../hooks/cart';
import { useRequest } from '../../hooks/request';
import { Cart, Container, Content, Payment } from './styles';

export function ShoppingCart() {
  const { userInfos } = useAuth();
  const { mealsInCart, handleRemoveMeal, emptyTheCart } = useCart();
  const { manageRequests } = useRequest();

  const navigate = useNavigate();

  const [cardPayment, setCardPayment] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiringDate, setCardExpiringDate] = useState('');
  const [cardSecurityCode, setCardSecurityCode] = useState('');

  const [totalPrice, setTotalPrice] = useState(0);

  function handlePaymentOption(withCard) {
    withCard ? setCardPayment(true) : setCardPayment(false);
  }

  function validateIfAInputIsEmpty() {
    const isAnyInputEmpty =
      !cardNumber || !cardExpiringDate || !cardSecurityCode;

    return isAnyInputEmpty ? true : false;
  }

  function warnAboutEmptyInputs(haveAnyEmpty) {
    if (haveAnyEmpty) {
      alert(
        'Para realizar o pagamento por cartão, é necessário preencher todos os campos! Verifique e tente novamente.'
      );
    }
  }

  function validateThatTheSizeOfTheInputsIsRight() {
    const allIsCorrect =
      cardNumber.length === 19 &&
      cardExpiringDate.length === 5 &&
      cardSecurityCode.length === 3;

    return allIsCorrect;
  }

  function alertAboutTheWrongAmountOfNumber(allNumbersAreRight) {
    if (!allNumbersAreRight) {
      alert(
        'Parece que alguns números do cartão foram preenchidos incorretamente! Verifique e tente novamente.'
      );
    }
  }

  function validateCreditCardFields() {
    const isAnyInputEmpty = validateIfAInputIsEmpty();
    warnAboutEmptyInputs(isAnyInputEmpty);

    const allNumbersAreCorrect = validateThatTheSizeOfTheInputsIsRight();
    alertAboutTheWrongAmountOfNumber(allNumbersAreCorrect);

    const passedAllValidations = !isAnyInputEmpty && allNumbersAreCorrect;

    return passedAllValidations;
  }

  async function handleFinalizePurchase() {
    if (!userInfos) {
      const response = confirm(`
        Para utilizar esse recurso você precisa estar logado.
        Deseja se logar agora?
      `);

      if (response) {
        navigate('/login');
      }

      return;
    }

    let validationOfPaymentFields = true;

    if (cardPayment) {
      validationOfPaymentFields = validateCreditCardFields();
    }

    if (!validationOfPaymentFields) return;

    const reduceMeals = mealsInCart.map(meal => {
      return {
        meal_id: meal.meal_id,
        amount: meal.amount,
      };
    });

    const response = await manageRequests('post', '/orders', reduceMeals);

    const wasTheRequestSuccessfullyMade = response.status === 201;

    if (wasTheRequestSuccessfullyMade) {
      emptyTheCart();

      alert(
        'Pedido feito com sucesso! Agora aguarde a confirmação do pagamento.'
      );

      navigate('/all-orders');

      return;
    }

    if (response.data) {
      return alert(response.data.message);
    } else {
      return alert(
        'Não foi possível concluir a compra! Por favor tente novamente mais tarde.'
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
                      className={cardPayment ? '' : 'selected-payment'}
                      onClick={() => handlePaymentOption(false)}
                    >
                      <img
                        src={pixImg}
                        alt="Imagem do símbolo do Pix"
                      />
                      PIX
                    </button>
                    <button
                      type="button"
                      className={cardPayment ? 'selected-payment' : ''}
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
                      className={cardPayment ? 'hidden' : ''}
                    />
                    <form className={cardPayment ? '' : 'hidden'}>
                      <Input
                        title="Número do Cartão"
                        placeholder="0000 0000 0000 0000"
                        type="text"
                        mask="0000 0000 0000 0000"
                        value={cardNumber}
                        onChange={e => setCardNumber(e.target.value)}
                      />
                      <div className="card-details">
                        <Input
                          title="Validade"
                          placeholder="04/25"
                          type="text"
                          mask="00/00"
                          value={cardExpiringDate}
                          onChange={e => setCardExpiringDate(e.target.value)}
                        />
                        <Input
                          title="CVC"
                          placeholder="000"
                          type="text"
                          mask="000"
                          value={cardSecurityCode}
                          onChange={e => setCardSecurityCode(e.target.value)}
                        />
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
