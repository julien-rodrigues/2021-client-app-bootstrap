import styled from 'styled-components';

import { Wrapper } from '../../components/Wrapper/Styles';

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  ${Wrapper} {
    margin: 0 2rem;
    display: flex;
    flex-direction: column;
  }
`;
