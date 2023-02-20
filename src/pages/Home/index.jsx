import Food from '../../assets/food.png';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Loading } from '../../components/Loading';
import { Wrapper } from '../../components/Wrapper';
import { Container, Desktop, Mobile } from './styles';
import { useHome } from './useHome';

export function Home() {
  const { organizedMeals, categories, renderCardsMobile, renderCardsDesktop } =
    useHome();

  if (organizedMeals.length === 0 || !categories) return <Loading />;

  return (
    <Container>
      <Header />
      <Wrapper>
        <Mobile>
          <div className="top-mobile">
            <img
              src={Food}
              alt="Imagem de comida"
            />
            <h1>Sabores inigualáveis</h1>
            <h3>Sinta o cuidado do preparo com ingredientes selecionados</h3>
          </div>
          {renderCardsMobile()}
        </Mobile>
        <Desktop>
          <div className="top-desktop">
            <img
              src={Food}
              alt="Imagem de comida"
            />
            <h1>Sabores inigualáveis</h1>
            <h3>Sinta o cuidado do preparo com ingredientes selecionados</h3>
          </div>
          {renderCardsDesktop()}
        </Desktop>
      </Wrapper>

      <Footer />
    </Container>
  );
}
