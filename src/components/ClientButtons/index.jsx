import { Container } from "./styles";

import { Button } from "../Button";
import { TfiReceipt } from "react-icons/tfi";

export function ClientButtons({ dishId, withIcon = false }) {
  return (
    <Container className="client-buttons">
      <div className="amount-buttons">
        <button>-</button>
        <span>01</span>
        <button>+</button>
      </div>
      {withIcon ? (
        <Button icon={TfiReceipt} title="incluir" />
      ) : (
        <Button title="incluir" />
      )}
    </Container>
  );
}
