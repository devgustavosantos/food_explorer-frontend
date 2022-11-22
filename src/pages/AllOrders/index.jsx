import { Fragment, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Container, Content, Table } from "./styles";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { Select } from "../../components/Select";
import { Loading } from "../../components/Loading";
import { useRequest } from "../../hooks/request";

export function AllOrders() {
  const [orders, setOrders] = useState();

  console.log({ orders });

  const [isAdm, setIsAdm] = useState(false);

  const { manageRequests } = useRequest();

  const navigate = useNavigate();

  function formatDateTime(datetime) {
    const [date, time] = datetime.split(" ");

    const [, mouth, day] = date.split("-");

    const [hour, minutes] = time.split(":");

    const formattedDateAndTime = `${day}/${mouth} ás ${hour - 3}h${minutes}`;

    return formattedDateAndTime;
  }

  useEffect(() => {
    async function fetchOrders() {
      const response = await manageRequests("get", "/orders");

      console.log({ response });

      const theRequestWasSuccessful = Array.isArray(response.data);

      console.log({ theRequestWasSuccessful });

      if (theRequestWasSuccessful) {
        setOrders(response.data);

        return;
      }

      if (response.data) {
        alert(response.data.message);
      } else {
        alert(
          "Não foi possível carregar os pedidos! Por favor tente novamente mais tarde."
        );
      }
      return navigate("/");
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
                              disabled={!isAdm}
                            />
                          }
                        </td>
                        <td>
                          <Link to={`/order/${id}`}>
                            {String(id).padStart(8, "0")}
                          </Link>
                        </td>
                        <td>
                          {meals.map((meal, index) => {
                            const lastItemInArray = index == meals.length - 1;

                            return (
                              <Fragment key={meal.order_meal_id}>
                                {meal.meal_amount}x {meal.title}
                                {lastItemInArray ? "" : ", "}
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
          </Content>
        )}
      </Wrapper>
      <Footer />
    </Container>
  );
}
