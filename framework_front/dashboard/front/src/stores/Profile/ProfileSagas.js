import { takeEvery, put, call, select } from "redux-saga/effects"

/* Actions */
import { updateSuccess } from "./ProfileActions"
import { logout } from "../Login/LoginActions"

/* Selectors */
import { selectToken } from "./ProfileSelectors"

/* Constants */
import { UPDATE_PROFILE, DELETE_PROFILE } from "./ProfileTypes"

import config from "../../../config.json"
const { URL } = config

/* Utils */
import getHeaders from "../../utils/getHeaders"
import requestManager from "../../utils/requestManager"

export default function* profileSaga(){
  yield takeEvery(UPDATE_PROFILE, update)
  yield takeEvery(DELETE_PROFILE, deleteUser)
}

function* update({ payload }){
  const token = yield select(selectToken)
  const url = `${URL}/user/`
  const headers = getHeaders("PATCH", token, payload)

  const response = yield call(requestManager, url, headers)
  yield put(updateSuccess(response))
}

function* deleteUser({ payload }){
  const token = yield select(selectToken)
  const url = `${URL}/user/`
  const headers = getHeaders("DELETE", token, payload)

  yield call(requestManager, url, headers)
  yield put(logout())
}