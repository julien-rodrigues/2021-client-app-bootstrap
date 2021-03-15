import styled from 'styled-components';

export const Table = styled.table`
  width: 35rem;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background: ${({ theme }) => theme.colors.blue.a};
  color: ${({ theme }) => theme.colors.white.a};
`;

export const HeadCol = styled.th`
  font-size: 1.6rem;
  padding: 1rem 2rem;
  font-weight: ${({ theme }) => theme.fonts.weights.semiBold};
`;

export const TableRow = styled.tr`
  background: ${({ theme }) => theme.colors.white.a};
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.grey.b};
`;

export const TableCol = styled.td`
  font-size: 1.6rem;
  padding: 2rem;
`;

export const Image = styled.div`
  width: 3rem;
  height: 3rem;
  background: ${({ theme }) => theme.colors.grey.a};

  img {
    width: 100%;
  }
`;

export const PaginationWrapper = styled.div`
  background: ${({ theme }) => theme.colors.blue.a};
  color: ${({ theme }) => theme.colors.white.a};
  font-size: 1.6rem;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
