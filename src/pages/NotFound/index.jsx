import { FiHome } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Container } from './styles';

export function NotFound() {
  const navigate = useNavigate();

  function handleBack() {
    navigate('/');
  }

  return (
    <Container>
      <Header />
      <main>
        <h1>Erro 404</h1>
        <p>Desculpe, a página que você buscou está indisponível.</p>
        <Button
          title="Voltar para Página Inicial"
          icon={FiHome}
          onClick={handleBack}
        />
      </main>
      <Footer />
    </Container>
  );
}
