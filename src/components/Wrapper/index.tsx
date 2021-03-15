import React from 'react';

import * as S from './Styles';

interface Props {
  children: React.ReactNode;
}

function Wrapper({ children }: Props): JSX.Element {
  return <S.Wrapper>{children}</S.Wrapper>;
}

export default Wrapper;
