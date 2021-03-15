import styled from 'styled-components';

export const SubTitle = styled.h2`
  display: flex;
  justify-content: center;
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.blue.a};
  padding-bottom: 3rem;
  text-align: center;
`;
