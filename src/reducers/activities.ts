import { AnyAction } from 'redux';

import { Activity } from '../types';
import {
  FETCH_ACTIVITIES,
  FETCH_ACTIVITIES_ERROR,
  FETCH_ACTIVITIES_SUCCESS,
} from '../actions/activities';

export interface ActivitiesState {
  fetching: boolean;
  error: boolean;
  data: Activity[];
}

const initialState: ActivitiesState = {
  fetching: true,
  error: false,
  data: null,
};

function activitiesReducer(
  state = initialState,
  action: AnyAction
): ActivitiesState {
  switch (action.type) {
    case FETCH_ACTIVITIES:
      return { ...state, fetching: true, error: false };
    case FETCH_ACTIVITIES_SUCCESS:
      return { ...state, fetching: false, data: action.payload };
    case FETCH_ACTIVITIES_ERROR:
      return { ...state, fetching: false, error: true, data: null };
    default:
      return state;
  }
}

export default activitiesReducer;
