import { Container } from "./styles";

export function Input({ title, type, placeholder, ...rest }) {
  return (
    <Container className="my-input">
      <p>{title}</p>

      <input type={type} placeholder={placeholder} {...rest} />
    </Container>
  );
}
