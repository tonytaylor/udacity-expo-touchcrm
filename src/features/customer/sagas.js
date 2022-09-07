import { takeEvery, actionChannel, call, all, put, select } from 'redux-saga/effects';

import { initializeStorage, readFromStorage, writeToStorage, clearStorage } from "../storage";

import { add, remove, load } from "./components/customerSlice";

export function* watchFetchCustomers() {
  yield takeEvery('customers/storageRequest', fetchCustomers);
}

export function* watchCreateCustomer() {
  yield takeEvery('customers/add', addCustomerToStorage);
}

export function* watchUpdateCustomer() {
  yield takeEvery('customers/update', addCustomerToStorage);
  // TODO: Look into the feasibility of composing a set of actions.
  //       We have the add and remove actions.  Update is simply a sequence of those actions.
  //       I'm fairly sure it can be done in a saga, but missing critical details.
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
    put(remove(payload)),
    put(add(payload))
  ]);
  /*const removalTask = yield fork(clearExistingCustomerRecordMatching, payload);
  const replaceTask = yield fork(replaceCustomerRecordWith, payload);*/
}

function* clearExistingCustomerRecordMatching(payload) {
  yield put(remove(payload));
}

function* replaceCustomerRecordWith(payload) {
  yield put(add(payload));
}

function* readAndLoad() {
  try {
    const customers = yield call(readFromStorage);
    if (Object.entries(customers).length > 0) { // forces a computation
      yield call(dispatchCustomerLoad, customers);
    }
  } catch (exception) {
    throw new Error('read from storage and/or load to state failed');
  }
}

function* dispatchCustomerLoad(customers) {
  yield put(load(customers));
}

function* fetchCustomers() {
  try {
    yield call(readAndLoad);
  } catch (exception) {
    //console.log('error:', exception.message);
    yield call(initializeStorage);
    yield call(readAndLoad);
  }
}

function* addCustomerToStorage() {
  const customers = yield select(state => state.customers);
  //console.log('customer state outgoing to storage:', customers);
  yield call(writeToStorage, customers);
}