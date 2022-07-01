import { takeEvery, put, call } from "redux-saga/effects"

/* Actions */
import { signupSuccess } from "./SignupActions"

/* Constants */
import { SIGNUP } from "./SignupTypes"

import config from "../../../config.json"
const { URL } = config

/* Utils */
import getHeaders from "../../utils/getHeaders"
import requestManager from "../../utils/requestManager"

export default function* signupSaga(){
    yield takeEvery(SIGNUP, signup)
}

function* signup({ payload }){
    const url = `${URL}/user/`
    const headers = getHeaders("POST", "", payload)
    const response = yield call(requestManager, url, headers)
    yield put(signupSuccess(response))
}
