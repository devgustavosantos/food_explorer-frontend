import { Container } from "./styles";

export function Input({ title, type, placeholder, value, onChange, ...rest }) {
  return (
    <Container className="my-input">
      <p>{title}</p>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </Container>
  );
}
