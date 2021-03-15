import styled from 'styled-components';

export const App = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  min-height: 100vh;
  background: linear-gradient(
    ${({ theme }) => theme.colors.grey.b},
    ${({ theme }) => theme.colors.white.a}
  );
`;

export const AppHeader = styled.header`
  background: ${({ theme }) => theme.colors.grey.a};
  box-shadow: 0 0 0.5rem rgba(${({ theme }) => theme.colors.black.aRgb}, 0.5);
  height: 7.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoWrapper = styled.div`
  width: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 6rem;
  }
`;

export const ContentWrapper = styled.main`
  width: 85vw;
  align-self: center;
`;

export const HeaderContent = styled.div`
  width: 90vw;
`;
