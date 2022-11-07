import { useState } from "react";
import { Container } from "./styles";

export function Select({ order_id, status }) {
  const [currentStatus, setCurrentStatus] = useState(status);

  function handleStatus(e) {
    setCurrentStatus(e.target.value);
  }

  return (
    <Container>
      <div className="circles">
        <div className={currentStatus === "pending" ? "red" : "hidden"}></div>
        <div
          className={currentStatus === "preparing" ? "orange" : "hidden"}
        ></div>
        <div
          className={currentStatus === "delivered" ? "green" : "hidden"}
        ></div>
      </div>
      <select onChange={handleStatus} value={currentStatus} id="">
        <option value="pending">Pendente</option>
        <option value="preparing">Preparando</option>
        <option value="delivered">Entregue</option>
      </select>
    </Container>
  );
}
