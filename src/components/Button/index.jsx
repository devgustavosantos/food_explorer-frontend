import { Container } from './styles';

export function Button({
  title,
  onClick,
  isHighlighted = true,
  icon: Icon,
  type = 'button',
  disabled = false,
  ...rest
}) {
  return (
    <Container
      onClick={onClick}
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
