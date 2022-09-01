import { all } from 'redux-saga/effects';

import { watchAuthentications } from "../features/auth/sagas";

export default function* rootSaga() {
  yield all([ watchAuthentications() ]);
};