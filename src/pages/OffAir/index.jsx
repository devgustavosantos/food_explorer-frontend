import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Wrapper } from '../../components/Wrapper';
import { Container } from './styles';

export function OffAir() {
  return (
    <Container>
      <Header />
      <Wrapper>
        <main>
          <div>🛠️&#xFE0F;</div>
          <h1>No momento estamos em manutenção</h1>
          <p>Espere alguns minutos e tente novamente!</p>
        </main>
      </Wrapper>
      <Footer />
    </Container>
  );
}
