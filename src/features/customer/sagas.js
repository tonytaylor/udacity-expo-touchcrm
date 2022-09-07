import { takeEvery, take, actionChannel, call, all, put } from 'redux-saga/effects';

export function* watchCreateCustomer() {
  yield takeEvery('customers/add', addCustomerToStorage);
}

export function* watchUpdateCustomer() {
  console.log('listening for updates. . .');
  /*const updates = yield actionChannel('customers/update');
  while (true) {
    const { payload } = yield take(updates);
    // this is a blocking call.
    yield call(outWithOldInWithNew, payload);
  }*/
}

function* outWithOldInWithNew(payload) {
  // we intend to effect the customer remove and add actions to
  // implement the update action
  console.log('update occurred with payload:', payload);
  yield all([
    put({ type: 'customers/remove', payload }),
    put({ type: 'customers/add', payload })
  ]);
  /*const removalTask = yield fork(clearExistingCustomerRecordMatching, payload);
  const replaceTask = yield fork(replaceCustomerRecordWith, payload);*/
}

function* clearExistingCustomerRecordMatching(payload) {
  yield put({ type: 'customers/remove', payload });
}

function* replaceCustomerRecordWith(payload) {
  yield put({ type: 'customers/add', payload });
}

function* addCustomerToStorage() {
  console.log('add customer to storage');
}