import { all } from 'redux-saga/effects'
import formSaga from './FormSagas'


export default function* rootSaga() {
  yield all([
    ...formSaga
  ])
}
