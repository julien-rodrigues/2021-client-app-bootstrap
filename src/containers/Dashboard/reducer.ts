import { AnyAction } from 'redux';

import { SET_ACTIVITIES_TABLE_PAGE } from './actions';

export interface ActivitiesTable {
  currentPage: number;
}

export interface DashboardState {
  activitiesTable: ActivitiesTable;
}

const initialState: DashboardState = {
  activitiesTable: {
    currentPage: 0,
  },
};

function DashboardReducer(
  state = initialState,
  action: AnyAction
): DashboardState {
  switch (action.type) {
    case SET_ACTIVITIES_TABLE_PAGE:
      return {
        ...state,
        activitiesTable: {
          currentPage: action.payload,
        },
      };
    default:
      return state;
  }
}

export default DashboardReducer;
