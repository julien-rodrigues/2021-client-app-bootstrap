import { createStore, applyMiddleware, compose, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';

import createReducer from './reducers';
import sagas from './sagas';

function configureStore(initialState = {}): Store {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    createReducer(),
    initialState,
    compose(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(sagas);

  return store;
}

export default configureStore;
