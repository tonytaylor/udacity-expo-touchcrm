import { takeEvery, actionChannel, call, all, put, select, fork, join, take } from 'redux-saga/effects';

import { initializeStorage, readFromStorage, writeToStorage, clearStorage } from "../storage";

import { add, remove, load } from "./customerSlice";

export function* watchFetchCustomers() {
  yield takeEvery('customers/storageRequest', fetchCustomers);
}

export function* watchCreateCustomer() {
  yield takeEvery('customers/add', addCustomerToStorage);
}

export function* watchUpdateCustomer() {
  //yield takeEvery('customers/update', addCustomerToStorage);
  yield takeEvery('customers/update', outWithOldInWithNew);
}

function* outWithOldInWithNew(action) {
  //console.log('update occurred with payload:', action.payload);
  yield put(remove(action));
  // TODO: Look into the cause of what's occurring below. The action object
  //       has a `payload` in its `payload` at this point. Works without issue, otherwise.
  yield put(add(action.payload));
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