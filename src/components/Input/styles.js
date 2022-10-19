import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
  text-align: left;

  > input {
    margin-top: 10px;
    background-color: transparent;
    outline: none;
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 5px;
    padding: 15px;
    width: 100%;
  }
`;

export { Container };
