import { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { InputImage } from '../../components/InputImage';
import { Loading } from '../../components/Loading';
import { NewIngredient } from '../../components/NewIngredient';
import { Wrapper } from '../../components/Wrapper';
import { useRequest } from '../../hooks/request';
import { Container, Form, Ingredients, Description, Modal } from './styles';

export function New() {
  const [modalOpen, setModalOpen] = useState(false);

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [newIngredient, setNewIngredient] = useState('');
  // const [ingredientsOfThisMeal, setIngredientsOfThisMeal] = useState([]);
  const [ingredientsRegisteredInDB, setIngredientsRegisteredInDB] = useState();

  const navigate = useNavigate();

  const { manageRequests } = useRequest();

  function handleModal() {
    setModalOpen(prevState => !prevState);
  }

  // function checkIfTheInputIsEmpty(inputValue) {
  //   return inputValue ? true : false;
  // }

  function handleAddNewIngredient() {
    console.log('oi');
  }

  function handleRegisterMeal() {
    console.log({ name, category, price, description });
  }

  async function fetchIngredients() {
    const response = await manageRequests('get', '/ingredients');

    return response;
  }

  function validateTheResponse(response) {
    const isAValidResponse = Array.isArray(response.data);

    return isAValidResponse;
  }

  function showMessageIfThereIsAnError(withoutErros) {
    if (!withoutErros) {
      alert(
        'N??o foi poss??vel carregar os dados! Por favor, tente novamente mais tarde.'
      );
    }
  }

  function checkIfThisPageWillBeRendered(hadNoProblem) {
    if (hadNoProblem) return;

    navigate('/');
  }

  async function loadData() {
    const response = await fetchIngredients();
    const responseChecked = validateTheResponse(response);
    showMessageIfThereIsAnError(responseChecked);

    checkIfThisPageWillBeRendered(responseChecked);

    setIngredientsRegisteredInDB(response.data);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Container>
      <Header />
      {!ingredientsRegisteredInDB ? (
        <Loading />
      ) : (
        <Wrapper>
          <Form>
            <ButtonText
              title="voltar"
              icon={IoIosArrowBack}
              to="/"
            />
            <h1>Adicionar Prato</h1>
            <InputImage />
            <Input
              title="Nome"
              placeholder="Ex.: Salada Ceasar"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <Input
              title="Categoria"
              placeholder="Ex.: Prato Principal"
              value={category}
              onChange={e => setCategory(e.target.value)}
            />
            <Ingredients>
              <p>Ingredientes</p>
              <div className="new-ingredients">
                <NewIngredient value="sal" />
                <NewIngredient value="a????car" />
                <NewIngredient value="fermento americano" />
                <NewIngredient
                  isNew
                  value={newIngredient}
                  onChange={e => setNewIngredient(e.target.value)}
                  onClick={handleAddNewIngredient}
                />
              </div>
            </Ingredients>

            <Input
              title="Pre??o"
              placeholder="R$ 00,00"
              type="text"
              mask="R$ 00,00"
              value={price}
              onChange={e => setPrice(e.target.value)}
            />
            <Description>
              <p>Descri????o</p>
              <textarea
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composi????o..."
                value={description}
                onChange={e => setDescription(e.target.value)}
              ></textarea>
            </Description>
            <Button
              title="Adicionar prato"
              isHighlighted={false}
              onClick={handleRegisterMeal}
            />
          </Form>
        </Wrapper>
      )}
      <Footer />
      <Modal className={modalOpen ? 'open' : 'close'}>
        <div className="alert">
          <button
            type="button"
            onClick={handleModal}
          >
            <FiX />
          </button>
          <h2>Ingrediente Novo!</h2>
          <p>
            Identificamos que voc?? adicionou um Ingrediente novo. Gostaria de
            adicionar uma foto ?? ele?
          </p>
          <Input
            title="Nome"
            placeholder="Ex.: Sal"
          />
          <InputImage />
          <Button
            title="Cadastrar sem foto"
            isHighlighted={false}
          />
          <Button title="Cadastrar com foto" />
        </div>
      </Modal>
    </Container>
  );
}
