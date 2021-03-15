import React from 'react';

import Button from '../Button';

import * as S from './Styles';

interface Props {
  currentPage: number;
  numberOfPages: number;
  setPage: Function;
}

function Pagination({
  currentPage,
  numberOfPages,
  setPage,
}: Props): JSX.Element {
  const onClickHandler = (pageNumber: number) => (): void =>
    setPage(pageNumber);
  const currentPageDisplay = currentPage + 1;

  return (
    <S.PaginationWrapper>
      {currentPage > 0 && (
        <Button onClick={onClickHandler(currentPage - 1)}>Prev</Button>
      )}
      Page {currentPageDisplay} of {numberOfPages}
      {numberOfPages > currentPageDisplay && (
        <Button onClick={onClickHandler(currentPage + 1)}>Next</Button>
      )}
    </S.PaginationWrapper>
  );
}

export default Pagination;
