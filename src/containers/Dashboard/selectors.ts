import { createSelector } from 'reselect';
import { slice } from 'lodash';

import { ActivitiesState } from '../../reducers/activities';
import { getActivities } from '../../selectors/activities';
import { DashboardState, ActivitiesTable } from './reducer';

interface SelectorState {
  activities: ActivitiesState;
  dashboard: DashboardState;
}

const EMPTY_ARRAY = [];

const getRawActivitiesTableState = (state: SelectorState): ActivitiesTable =>
  state.dashboard.activitiesTable;

const getActivitiesRows = createSelector(
  [getActivities],
  (activities) => activities || EMPTY_ARRAY
);

export const getActivitiesTableState = createSelector(
  [getRawActivitiesTableState, getActivitiesRows],
  (tableState, activities) => {
    const first = 5;
    const offset = tableState.currentPage * first;

    return {
      currentPage: tableState.currentPage,
      numberOfPages: Math.ceil(activities.length / first),
      rows: slice(activities, offset, offset + first),
    };
  }
);
