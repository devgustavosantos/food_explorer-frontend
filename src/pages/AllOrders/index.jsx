import { Fragment, useState } from "react";

import { Container, Content, Table } from "./styles";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { Select } from "../../components/Select";

export function AllOrders() {
  const [orders, setOrders] = useState([
    {
      id: 32,
      status: "delivered",
      created_at: "2022-10-18 14:27:32",
      meals: [
        {
          order_meal_id: 44,
          title: "Strogonoff",
          meal_amount: 2,
        },
        {
          order_meal_id: 43,
          title: "Macarrão 4",
          meal_amount: 5,
        },
        {
          order_meal_id: 42,
          title: "Pizza",
          meal_amount: 3,
        },
      ],
    },
    {
      id: 31,
      status: "pending",
      created_at: "2022-10-17 18:20:35",
      meals: [
        {
          order_meal_id: 41,
          title: "Strogonoff",
          meal_amount: 2,
        },
        {
          order_meal_id: 40,
          title: "Macarrão",
          meal_amount: 1,
        },
        {
          order_meal_id: 39,
          title: "Pizza",
          meal_amount: 3,
        },
      ],
    },
    {
      id: 30,
      status: "preparing",
      created_at: "2022-10-17 15:00:08",
      meals: [
        {
          order_meal_id: 38,
          title: "Macarrão 6",
          meal_amount: 5,
        },
        {
          order_meal_id: 37,
          title: "Macarrão",
          meal_amount: 3,
        },
        {
          order_meal_id: 36,
          title: "Pizza",
          meal_amount: 2,
        },
      ],
    },
  ]);

  function formatDateTime(datetime) {
    const [date, time] = datetime.split(" ");

    const [, mouth, day] = date.split("-");

    const [hour, minutes] = time.split(":");

    const formattedDateAndTime = `${day}/${mouth} ${hour - 3}h${minutes}`;

    return formattedDateAndTime;
  }
  return (
    <Container>
      <Header />
      <Wrapper>
        <Content>
          <h1>Pedidos</h1>
          <Table>
            <thead>
              <tr>
                <th>Status</th>
                <th>Código</th>
                <th>Detalhamento</th>
                <th>Data e hora</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={String(order.id)}>
                  <td>
                    {<Select order_id={order.id} status={order.status} />}
                  </td>
                  <td>{String(order.id).padStart(8, "0")}</td>
                  <td>
                    {order.meals.map((meal, index) => {
                      const lastItemInArray = index == order.meals.length - 1;

                      return (
                        <Fragment key={meal.order_meal_id}>
                          {meal.meal_amount}x {meal.title}
                          {lastItemInArray ? "" : ", "}
                        </Fragment>
                      );
                    })}
                  </td>
                  <td>{formatDateTime(order.created_at)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Content>
      </Wrapper>
      <Footer />
    </Container>
  );
}
