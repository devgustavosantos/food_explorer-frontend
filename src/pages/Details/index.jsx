import { useState, useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router-dom';

import { AdmButtons } from '../../components/AdmButtons';
import { ButtonText } from '../../components/ButtonText';
import { ClientButtons } from '../../components/ClientButtons';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Ingredient } from '../../components/Ingredient';
import { Loading } from '../../components/Loading';
import { Wrapper } from '../../components/Wrapper';
import { useAuth } from '../../hooks/auth';
import { useRequest } from '../../hooks/request';
import { api } from '../../services/api';
import { Container, Content } from './styles';

export function Details() {
  const { userInfos } = useAuth();

  const [mealInfos, setMealInfos] = useState();

  const { manageRequests } = useRequest();

  const { id } = useParams();
  const navigate = useNavigate();

  function renderIngredients() {
    return mealInfos.ingredients.map(ingredient => {
      const { id, name, image } = ingredient;

      return (
        <Ingredient
          image={image}
          name={name}
          key={String(id)}
        />
      );
    });
  }

  function renderManipulationButtons() {
    const { meal_id, title, price, image } = mealInfos;

    if (!userInfos || !userInfos.isAdm) {
      return (
        <ClientButtons
          meal_id={meal_id}
          title={title}
          price={price}
          image={image}
          withIcon
        />
      );
    } else {
      return <AdmButtons meal_id={meal_id} />;
    }
  }

  useEffect(() => {
    async function fetchMealInfos() {
      const response = await manageRequests('get', `/meals/${id}`);

      if (response instanceof Error) {
        return navigate('/');
      }

      const theRequestWasSuccessful = response.status === 201;

      if (theRequestWasSuccessful) {
        return setMealInfos(response.data);
      }

      if (response.data) {
        alert(response.data.message);
      } else {
        alert(
          'N??o foi poss??vel carregar as informa????es! Por favor tente novamente mais tarde.'
        );
      }

      return navigate('/');
    }

    fetchMealInfos();
  }, []);

  return (
    <Container>
      <Header />
      <Wrapper>
        {mealInfos ? (
          <Content>
            <ButtonText
              title="voltar"
              icon={IoIosArrowBack}
              to="/"
            />
            <img
              src={`${api.defaults.baseURL}/files/meals/${mealInfos.image}`}
              alt={`Foto do item ${mealInfos.title}`}
            />
            <h1>{mealInfos.title}</h1>
            <p>{mealInfos.description}</p>
            <div className="ingredients">
              {mealInfos.ingredients && renderIngredients()}
            </div>
            <p className="price">
              R$ <span>{mealInfos.price}</span>
            </p>
            <div className="buttons">{renderManipulationButtons()}</div>
          </Content>
        ) : (
          <Loading />
        )}
      </Wrapper>
      <Footer />
    </Container>
  );
}
