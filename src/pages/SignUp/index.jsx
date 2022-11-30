import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '../../assets/logo.svg';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Loading } from '../../components/Loading';
import { useRequest } from '../../hooks/request';
import { validateDataToSignUp } from '../../utils/dataValidator';
import { Container, Brand, Form } from './styles';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showLoadingScreen, setShowLoadingScreen] = useState(false);

  const { manageRequests } = useRequest();
  const navigate = useNavigate();

  async function handleSignUp() {
    const allInputIsValid = validateDataToSignUp({
      name,
      email,
      password,
    });

    if (!allInputIsValid) return;

    setShowLoadingScreen(prevState => !prevState);

    const response = await manageRequests('post', 'users', {
      name,
      email,
      password,
    });

    setShowLoadingScreen(prevState => !prevState);

    if (response instanceof Error) {
      return navigate('/off-air');
    }

    const theResultWasASuccess = response.status === 201;

    if (!theResultWasASuccess) {
      if (response.data) {
        alert(response.data.message);
      } else {
        alert('Não foi possível logar. Por favor tente novamente mais tarde.');
      }

      return;
    }

    alert('Usuário cadastrado com sucesso! Agora você pode se logar.');
    navigate('/login');
  }

  return (
    <Container>
      <Brand>
        <img
          src={Logo}
          alt=" Logo do food explorer"
        />
        <h1>food explorer</h1>
      </Brand>
      <Form>
        <div className="top">
          <img
            src={Logo}
            alt=" Logo do food explorer"
          />
          <h1>food explorer</h1>
        </div>
        <h2>Crie sua conta</h2>
        <Input
          title="Seu nome:"
          type="text"
          placeholder="Exemplo: Maria da Silva"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input
          title="E-mail:"
          type="text"
          placeholder="exemplo@exemplo.com.br"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          title="Senha:"
          type="password"
          placeholder="No mínimo 6 caracteres"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button
          title="Criar conta"
          type="button"
          isHighlighted
          onClick={handleSignUp}
        />
        <ButtonText
          title="Já tenho uma conta"
          to="/login"
        />
      </Form>
      {showLoadingScreen && <Loading />}
    </Container>
  );
}
