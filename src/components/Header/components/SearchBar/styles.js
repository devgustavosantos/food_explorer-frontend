import styled from 'styled-components';

const Container = styled.form`
  background-color: ${({ theme }) => theme.COLORS.BLUE_300};
  border-radius: 5px;
  display: flex;
  gap: 15px;
  padding: 15px;
  width: 100%;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.COLORS.WHITE};
  flex-grow: 1;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_900};
    font-size: clamp(1.4rem, 4vw, 1.6rem);
  }
`;

const ButtonSearch = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.COLORS.GRAY_900};
  display: flex;
  font-size: 2rem;
  justify-content: center;
`;

export { Container, Input, ButtonSearch };
