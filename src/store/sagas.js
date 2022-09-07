import { all } from 'redux-saga/effects';

import { watchAuthentications } from "../features/auth/sagas";
import { watchCreateCustomer, watchUpdateCustomer, watchFetchCustomers } from "../features/customer/sagas";

export default function* rootSaga() {
  yield all([
    watchAuthentications(),
    watchFetchCustomers(),
    watchCreateCustomer(),
    watchUpdateCustomer()
  ]);
};