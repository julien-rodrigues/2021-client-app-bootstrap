import React, { useEffect } from 'react';
import { AnyAction } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import ActivitiesTable from '../../components/ActivitiesTable';
import Wrapper from '../../components/Wrapper';
import SubTitle from '../../components/SubTitle';
import { getActivitiesTableState } from './selectors';
import { fetchActivitiesAction } from '../../actions/activities';
import { setActivitiesTablePage } from './actions';
import { getActivitiesDataState } from '../../selectors/activities';

import * as S from './Styles';

function Dashboard(): JSX.Element {
  const dispatch = useDispatch();
  const { fetching, error } = useSelector(getActivitiesDataState);
  const activitiesTableState = useSelector(getActivitiesTableState);

  const fetchActivities = (): AnyAction => dispatch(fetchActivitiesAction());

  const setPage = (pageNumber: number): AnyAction =>
    dispatch(setActivitiesTablePage(pageNumber));

  useEffect(() => {
    fetchActivities();
  }, []);

  return (
    <>
      {fetching || error ? (
        <Wrapper>{error ? 'Oops!' : 'Loading...'}</Wrapper>
      ) : (
        <S.ContentWrapper>
          <Wrapper>
            <SubTitle>Activities List</SubTitle>
            <ActivitiesTable
              rows={activitiesTableState.rows}
              currentPage={activitiesTableState.currentPage}
              numberOfPages={activitiesTableState.numberOfPages}
              setPage={setPage}
            />
          </Wrapper>
        </S.ContentWrapper>
      )}
    </>
  );
}

export default Dashboard;
