import { Container } from './styles';

export function ButtonText({ title, icon: Icon, to, onClick }) {
  return (
    <Container
      to={to}
      onClick={onClick}
    >
      {Icon && <Icon />}
      <p>{title}</p>
    </Container>
  );
}
