import { all } from 'redux-saga/effects';

import { watchAuthentications } from "../features/auth/sagas";
import { watchCreateCustomer, watchUpdateCustomer } from "../features/customer/sagas";

export default function* rootSaga() {
  yield all([
    watchAuthentications(),
    watchCreateCustomer(),
    watchUpdateCustomer()
  ]);
};