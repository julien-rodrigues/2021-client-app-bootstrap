import { AnyAction } from 'redux';

export const FETCH_ACTIVITIES = 'activities/FETCH_ACTIVITIES';
export const FETCH_ACTIVITIES_SUCCESS = 'activities/FETCH_ACTIVITIES_SUCCESS';
export const FETCH_ACTIVITIES_ERROR = 'activities/FETCH_ACTIVITIES_ERROR';

export const fetchActivitiesAction = (): AnyAction => ({
  type: FETCH_ACTIVITIES,
});

export const fetchActivitiesErrorAction = (): AnyAction => ({
  type: FETCH_ACTIVITIES_ERROR,
});

export const fetchActivitiesSuccessAction = (payload): AnyAction => ({
  type: FETCH_ACTIVITIES_SUCCESS,
  payload,
});
