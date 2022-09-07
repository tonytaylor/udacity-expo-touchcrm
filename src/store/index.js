import {createStore, applyMiddleware, combineReducers, createReducer} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import { isEmpty } from 'ramda';

import rootSaga from "./sagas";
import reducer from './reducer';

export const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log('The action: ', action);
  const result = next(action);
  console.log('The new state: ', store.getState());
  console.groupEnd();
  return result;
};

const createMockReducer = (initialState) => {
  return createReducer(initialState, (state) => {
    return state;
  });
}


const initializeStore = (state = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    (isEmpty(state)) ? combineReducers(reducer) : createMockReducer(state),
    applyMiddleware(sagaMiddleware, logger)
  );
  sagaMiddleware.run(rootSaga);

  return store;
};

export default initializeStore;