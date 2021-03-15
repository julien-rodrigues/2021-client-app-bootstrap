import React from 'react';

import * as S from './Styles';

interface Props {
  children: React.ReactNode;
}

function App({ children }: Props): JSX.Element {
  return (
    <S.App>
      <S.AppHeader>
        <S.HeaderContent>
          <S.LogoWrapper>
            <img
              src="https://destiny.wiki.gallery/images/8/89/Raid.jpg"
              alt="App Logo"
            />
          </S.LogoWrapper>
        </S.HeaderContent>
      </S.AppHeader>
      <S.ContentWrapper>{children}</S.ContentWrapper>
    </S.App>
  );
}

export default App;
