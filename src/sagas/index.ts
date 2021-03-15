import { all, fork, StrictEffect } from 'redux-saga/effects';

import activitiesSagas from './activities';

export default function* sagas(): Generator<StrictEffect> {
  yield all([fork(activitiesSagas)]);
}
