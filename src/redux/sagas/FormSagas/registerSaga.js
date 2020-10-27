import { put, takeLatest, select } from 'redux-saga/effects'
import { REGISTER } from '../../constants/formConstants'
import * as apiEndpoint from '../api/endpoints/form'
import { API } from '../api/API'


export function* fetchRegister({ data }) {
  try {
    const response = yield API.post(apiEndpoint.REGISTER, { data })
  } catch (err) {
    console.log('err: ', err);
  }
}


export function* registerWatcher() {
  yield takeLatest(REGISTER, fetchRegister)
}


export default [registerWatcher()]
