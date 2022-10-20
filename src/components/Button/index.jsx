import { Container } from "./styles";

export function Button({
  title,
  isHighlighted = true,
  icon: Icon,
  type,
  ...rest
}) {
  return (
    <Container type={type} isHighlighted={isHighlighted} {...rest}>
      {Icon && <Icon />}
      {title}
    </Container>
  );
}
