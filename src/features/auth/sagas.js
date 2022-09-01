import { takeEvery } from 'redux-saga/effects';

export function* watchAuthentications() {
  yield takeEvery('auth/setAuth', authResponse);
}

function* authResponse() {
  console.log('authentication action occurred:', new Date(Date.now()));
}

