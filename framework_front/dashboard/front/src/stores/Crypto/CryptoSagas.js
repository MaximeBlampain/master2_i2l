import { takeEvery, put, call, select } from "redux-saga/effects"

/* Actions */
import { getAllCryptosSuccess } from "./CryptoActions"

/* Selectors */
import { selectToken } from "../Profile/ProfileSelectors"

/* Constants */
import { GET_ALL_CRYPTOS } from "./CryptoTypes"

import config from "../../../config.json"
const { URL } = config

/* Utils */
import getHeaders from "../../utils/getHeaders"
import requestManager from "../../utils/requestManager"

export default function* cryptoSaga(){
  yield takeEvery(GET_ALL_CRYPTOS, getAllCryptos)
}

function* getAllCryptos(){
  const token = yield select(selectToken)
  const url = `${URL}/crypto/all`
  const headers = getHeaders("GET", token, null)

  const response = yield call(requestManager, url, headers)
  yield put(getAllCryptosSuccess(response))
}
