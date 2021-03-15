import React, { MouseEventHandler } from 'react';

import * as S from './Styles';

interface Props {
  children: React.ReactNode;
  onClick: MouseEventHandler;
}

function Button({ onClick, children }: Props): JSX.Element {
  return (
    <S.Button onClick={onClick} type="button">
      {children}
    </S.Button>
  );
}

export default Button;
