import { createGlobalStyle } from 'styled-components';

import { Theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html,
  body {
    padding: 0;
    margin: 0;
    font-size: 10px;
    font-family: ${({ theme }: { theme: Theme }) => theme.fonts.work};
    color: ${({ theme }: { theme: Theme }) => theme.colors.grey.a};
  }
`;
