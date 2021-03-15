import { put, StrictEffect, takeEvery } from 'redux-saga/effects';
import activities from '../data/activities.json';

import {
  FETCH_ACTIVITIES,
  fetchActivitiesSuccessAction,
  fetchActivitiesErrorAction,
} from '../actions/activities';

function* fetchActivities(): Generator<any> {
  try {
    yield put(fetchActivitiesSuccessAction(activities));
  } catch (e) {
    yield put(fetchActivitiesErrorAction());
  }
}

export default function* sagas(): Generator<StrictEffect> {
  yield takeEvery([FETCH_ACTIVITIES], fetchActivities);
}
