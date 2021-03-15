import { combineReducers, Reducer } from 'redux';

import activitiesReducer from './activities';
import dashboardReducer from '../containers/Dashboard/reducer';

function createReducer(): Reducer {
  return combineReducers({
    activities: activitiesReducer,
    dashboard: dashboardReducer,
  });
}

export default createReducer;
