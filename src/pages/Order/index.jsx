/* eslint-disable indent */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Check from '../../assets/situation/check.svg';
import Clock from '../../assets/situation/clock.svg';
import ForkAndKnife from '../../assets/situation/fork-knife.svg';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Loading } from '../../components/Loading';
import { Meal } from '../../components/Meal';
import { Wrapper } from '../../components/Wrapper';
import { useRequest } from '../../hooks/request';
import { Cart, Container, Content, Situation } from './styles';

export function Order() {
  const [orderInfos, setOrderInfos] = useState();

  const { manageRequests } = useRequest();

  const { id } = useParams();

  const navigate = useNavigate();

  function renderSituation(status) {
    switch (status) {
      case 'pending':
        return (
          <>
            <img
              src={Clock}
              alt="Foto de um relógio."
            />
            <p>Aguardando confirmação do pagamento</p>
          </>
        );
      case 'preparing':
        return (
          <>
            <img
              src={Check}
              alt="Foto de um sinal de positivo."
            />
            <p>Pagamento aprovado!</p>
          </>
        );
      case 'delivered':
        return (
          <>
            <img
              src={ForkAndKnife}
              alt="Foto de um garfo e uma faca."
            />
            <p>Pedido entregue!</p>
          </>
        );
    }
  }

  useEffect(() => {
    async function fetchOrderInfos() {
      const orderResponse = await manageRequests('get', `/orders/${id}`);

      const wasTheRequestSuccessfullyMade = orderResponse.data.id;

      if (wasTheRequestSuccessfullyMade) {
        return setOrderInfos(orderResponse.data);
      }

      if (orderResponse instanceof Error) {
        alert(
          'Não foi possível carregar as informações! Por favor tente novamente mais tarde.'
        );
      }

      if (orderResponse.data) {
        alert(orderResponse.data.message);
      } else {
        alert(
          'Não foi possível carregar as informações! Por favor tente novamente mais tarde.'
        );
      }

      return navigate('/');
    }

    fetchOrderInfos();
  }, []);

  return (
    <Container>
      <Header />
      <Wrapper>
        {!orderInfos ? (
          <Loading />
        ) : (
          <Content>
            <Cart>
              <h1>Pedido {String(orderInfos.id).padStart(6, '0')}</h1>
              {orderInfos.meals.map(meal => {
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
              <p className="total-price">Total: R$ {orderInfos.price}</p>
            </Cart>
            <Situation>
              <h1>Situação</h1>
              <div className="infos-situation">
                {renderSituation(orderInfos.status)}
              </div>
            </Situation>
          </Content>
        )}
      </Wrapper>
      <Footer />
    </Container>
  );
}
