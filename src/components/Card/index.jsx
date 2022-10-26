import { useState } from "react";

import { Container } from "./styles";

import { ClientButtons } from "../ClientButtons";
import { AdmButtons } from "../AdmButtons";

export function Card({ title, description, price, image }) {
  const [isAdm, setIsAdm] = useState(false);

  return (
    <Container>
      <img
        src={`https://images.pexels.com/${image}`}
        alt={`Foto do prato ${title}`}
      />
      <h2>{`${title} >`}</h2>
      <p>{description}</p>
      <p>R$ {price}</p>
      {isAdm ? <AdmButtons /> : <ClientButtons />}
    </Container>
  );
}
