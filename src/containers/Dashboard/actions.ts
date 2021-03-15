import { AnyAction } from 'redux';

export const SET_ACTIVITIES_TABLE_PAGE = 'dashboard/SET_ACTIVITIES_TABLE_PAGE';

export const setActivitiesTablePage = (payload: number): AnyAction => ({
  type: SET_ACTIVITIES_TABLE_PAGE,
  payload,
});
