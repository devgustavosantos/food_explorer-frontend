import { Container } from "./styles";

export function Button({
  title,
  isHighlighted = true,
  icon: Icon,
  type = "button",
  disabled = false,
  ...rest
}) {
  return (
    <Container
      type={type}
      isHighlighted={isHighlighted}
      disabled={disabled}
      {...rest}
    >
      {Icon && <Icon />}
      {title}
    </Container>
  );
}
