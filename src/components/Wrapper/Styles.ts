import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.white.a};
  padding: 4rem 5rem;
  border-radius: 1.1rem;
  margin-bottom: 4rem;
  box-shadow: -1rem 2.2rem 3.4rem
    rgb(${({ theme }) => theme.colors.black.aRgb}, 0.1);
`;
