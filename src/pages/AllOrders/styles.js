import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .my-wrapper {
    flex-grow: 1;
  }
`;

const Content = styled.main`
  width: 100%;
  padding: 30px 0;

  h1 {
    font-weight: 500;
  }
`;

const Table = styled.table`
  text-align: left;
  border-collapse: collapse;

  th,
  td {
    border: ${({ theme }) => `2px solid ${theme.COLORS.GRAY_700}`};
  }

  th {
    padding: 25px;
  }

  td {
    padding: 30px 25px;
  }
`;

export { Container, Content, Table };
