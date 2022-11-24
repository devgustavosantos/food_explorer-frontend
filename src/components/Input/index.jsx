import { Container } from "./styles";
import { IMaskInput } from "react-imask";

export function Input({
  title,
  type,
  placeholder,
  value,
  onChange,
  onKeyPress,
  ...rest
}) {
  return (
    <Container className="my-input">
      <p>{title}</p>

      <IMaskInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        {...rest}
      />
    </Container>
  );
}
