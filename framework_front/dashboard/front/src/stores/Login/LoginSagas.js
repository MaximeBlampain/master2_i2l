import { takeEvery, put, call } from "redux-saga/effects"

/* Actions */
import { loginSuccess } from "./LoginActions"

/* Constants */
import { LOGIN, LOGIN_SUCCESS } from "./LoginTypes"

import config from "../../../config.json"
const { URL } = config

/* Utils */
import getHeaders from "../../utils/getHeaders"
import requestManager from "../../utils/requestManager"

export default function* loginSaga(){
    yield takeEvery(LOGIN, login)
}

function* login({ payload }){
    const url = `${URL}/user/auth`
    const headers = getHeaders("POST", "", payload)

    const response = yield call(requestManager, url, headers)
    yield put(loginSuccess(response))
}
