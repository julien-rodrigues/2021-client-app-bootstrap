import { createSelector } from 'reselect';

import { ActivitiesState } from '../reducers/activities';
import { Activity } from '../types';

type SelectorState = { activities: ActivitiesState };

const getFetchState = (state: SelectorState): boolean =>
  state.activities.fetching;
const getErrorState = (state: SelectorState): boolean => state.activities.error;
export const getActivities = (state: SelectorState): Activity[] =>
  state.activities.data;

export const getActivitiesDataState = createSelector(
  [getFetchState, getErrorState],
  (fetching, error) => ({ fetching, error })
);
