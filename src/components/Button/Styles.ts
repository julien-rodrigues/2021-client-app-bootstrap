import styled from 'styled-components';

export const Button = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  padding: 0.5rem 1rem;
  font-weight: ${({ theme }) => theme.fonts.weights.semiBold};
  font-family: ${({ theme }) => theme.fonts.work};
  color: ${({ theme }) => theme.colors.white.a};
  transition: background 0.1s ease;
  border-radius: 1.1rem;
  outline: none;

  &:hover {
    background: rgba(${({ theme }) => theme.colors.white.aRgb}, 0.3);
  }
`;
