import { takeEvery, put, call, select } from "redux-saga/effects"

/* Actions */
import {addAssetSuccess, deleteAssetSuccess, getWalletSuccess} from "./WalletActions"

/* Selectors */
import { selectToken, selectUserId } from "../Profile/ProfileSelectors"

/* Constants */
import {ADD_ASSET, DELETE_ASSET, GET_WALLET} from "./WalletTypes"

import config from "../../../config.json"
const { URL } = config

/* Utils */
import getHeaders from "../../utils/getHeaders"
import requestManager from "../../utils/requestManager"

export default function* walletSaga(){
  yield takeEvery(GET_WALLET, getWallet)
  yield takeEvery(ADD_ASSET, addAsset)
  yield takeEvery(DELETE_ASSET, deleteAsset)
}

function* getWallet(){
  const userId = yield select(selectUserId)
  const token = yield select(selectToken)

  const url = `${URL}/asset/user/${userId}`
  const headers = getHeaders("GET", token, null)

  const response = yield call(requestManager, url, headers)
  yield put(getWalletSuccess(response))
}

function* addAsset({ payload }){
  const USER_ID = yield select(selectUserId)
  const token = yield select(selectToken)

  const body = {
    ...payload,
    USER_ID,
  }

  const url = `${URL}/asset/`
  const headers = getHeaders("POST", token, body)

  const response = yield call(requestManager, url, headers)
  yield put(addAssetSuccess(response))
}

function* deleteAsset({ payload }){
  const token = yield select(selectToken)

  const url = `${URL}/asset/${payload.ASSET_ID}`
  const headers = getHeaders("DELETE", token, null)

  yield call(requestManager, url, headers)
  yield put(deleteAssetSuccess(payload.ASSET_ID))
}