import { Container } from './styles';

export function Wrapper({ children }) {
  return <Container className="my-wrapper">{children}</Container>;
}
