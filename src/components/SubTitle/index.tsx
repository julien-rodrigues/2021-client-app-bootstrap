import React from 'react';

import * as S from './Styles';

interface Props {
  children: React.ReactNode;
}

function Subtitle({ children }: Props): JSX.Element {
  return <S.SubTitle>{children}</S.SubTitle>;
}

export default Subtitle;
