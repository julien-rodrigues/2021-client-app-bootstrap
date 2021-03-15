import React from 'react';
import { map } from 'lodash';

import Pagination from './Pagination';

import * as S from './Styles';

export interface ActivitiesTableRow {
  imagePath: string;
  displayName: string;
}

interface Props {
  rows: ActivitiesTableRow[];
  currentPage: number;
  numberOfPages: number;
  setPage: Function;
}

function ActivitiesTable({
  rows,
  currentPage,
  numberOfPages,
  setPage,
}: Props): JSX.Element {
  return (
    <S.Table>
      <S.TableHead>
        <tr>
          <S.HeadCol>Icon</S.HeadCol>
          <S.HeadCol>Name</S.HeadCol>
        </tr>
      </S.TableHead>
      <tbody>
        {map(rows, (row, i) => (
          <S.TableRow key={i}>
            <S.TableCol>
              <S.Image>
                <img src={row.imagePath} alt={row.displayName} />
              </S.Image>
            </S.TableCol>
            <S.TableCol>{row.displayName}</S.TableCol>
          </S.TableRow>
        ))}
        <tr>
          <td colSpan={2}>
            <Pagination
              currentPage={currentPage}
              numberOfPages={numberOfPages}
              setPage={setPage}
            />
          </td>
        </tr>
      </tbody>
    </S.Table>
  );
}

export default ActivitiesTable;
