import { Fragment, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Loading } from '../../components/Loading';
import { Select } from '../../components/Select';
import { Wrapper } from '../../components/Wrapper';
import { useAuth } from '../../hooks/auth';
import { useRequest } from '../../hooks/request';
import { Container, Content, Table } from './styles';

export function AllOrders() {
  const [orders, setOrders] = useState();

  const { manageRequests } = useRequest();
  const { userInfos } = useAuth();

  const navigate = useNavigate();

  function formatDateTime(datetime) {
    const [date, time] = datetime.split(' ');

    const [, mouth, day] = date.split('-');

    const [hour, minutes] = time.split(':');

    const formattedDateAndTime = `${day}/${mouth} ás ${hour - 3}h${minutes}`;

    return formattedDateAndTime;
  }

  useEffect(() => {
    async function fetchOrders() {
      const response = await manageRequests('get', '/orders');

      const theRequestWasSuccessful = Array.isArray(response.data);

      if (theRequestWasSuccessful) {
        setOrders(response.data);

        return;
      }

      if (response.data) {
        alert(response.data.message);
      } else {
        alert(
          'Não foi possível carregar os pedidos! Por favor tente novamente mais tarde.'
        );
      }
      return navigate('/');
    }

    fetchOrders();
  }, []);

  return (
    <Container>
      <Header />
      <Wrapper>
        {!orders ? (
          <Loading />
        ) : (
          <Content>
            <h1>Pedidos</h1>
            {orders.length == 0 ? (
              <p>Você ainda não possui nenhum pedido.</p>
            ) : (
              <Table>
                <table>
                  <thead>
                    <tr>
                      <th>Status</th>
                      <th>Código</th>
                      <th>Detalhamento</th>
                      <th>Data e hora</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map(order => {
                      const { id, status, meals, created_at } = order;

                      return (
                        <tr key={String(id)}>
                          <td>
                            {
                              <Select
                                order_id={id}
                                status={status}
                                disabled={!userInfos.isAdm}
                              />
                            }
                          </td>
                          <td>
                            <Link to={`/order/${id}`}>
                              {String(id).padStart(8, '0')}
                            </Link>
                          </td>
                          <td>
                            {meals.map((meal, index) => {
                              const lastItemInArray = index == meals.length - 1;

                              return (
                                <Fragment key={meal.order_meal_id}>
                                  {meal.meal_amount}x {meal.title}
                                  {lastItemInArray ? '' : ', '}
                                </Fragment>
                              );
                            })}
                          </td>
                          <td>{formatDateTime(created_at)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </Table>
            )}
          </Content>
        )}
      </Wrapper>
      <Footer />
    </Container>
  );
}
