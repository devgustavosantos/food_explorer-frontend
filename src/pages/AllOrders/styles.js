import styled from 'styled-components';

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
    margin-bottom: clamp(20px, 6vw, 35px);
  }

  > p {
    text-align: center;
  }
`;

const Table = styled.div`
  width: 100%;
  border-radius: 10px;
  overflow-x: auto;
  border: ${({ theme }) => `2px solid ${theme.COLORS.BLUE_200}`};

  table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
  }

  th,
  td {
    border: ${({ theme }) => `2px solid ${theme.COLORS.BLUE_200}`};
  }

  th {
    padding: clamp(10px, 3vw, 20px) clamp(15px, 4vw, 25px);
  }

  td {
    padding: clamp(10px, 3vw, 30px) clamp(10px, 3vw, 25px);
    font-size: clamp(14px, 4vw, 16px);
  }

  thead tr th {
    border-top: none;
  }

  thead tr th:first-child,
  tbody tr td:first-child {
    border-left: none;
  }

  thead tr th:last-child,
  tbody tr td:last-child {
    border-right: none;
  }

  tbody tr:last-child td {
    border-bottom: none;
  }

  thead tr th:last-child {
    min-width: 140px;
  }

  a {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;

export { Container, Content, Table };
