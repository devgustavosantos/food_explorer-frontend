import { FiHome } from "react-icons/fi";

import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";

export function NotFound() {
  return (
    <Container>
      <Header />
      <main>
        <h1>Erro 404</h1>
        <p>Desculpe, a página que você buscou está indisponível.</p>
        <Button title="Voltar para Página Inicial" icon={FiHome} />
      </main>
      <Footer />
    </Container>
  );
}
