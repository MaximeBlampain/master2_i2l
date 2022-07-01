import { all } from "redux-saga/effects"

import loginSaga from "./Login/LoginSagas"
import signupSaga from "./Signup/SignupSagas"
import profileSaga from "./Profile/ProfileSagas"
import cryptoSaga from "./Crypto/CryptoSagas"
import walletSaga from "./Wallet/WalletSagas"

export default function* () {
  yield all([
    loginSaga(),
    signupSaga(),
    profileSaga(),
    cryptoSaga(),
    walletSaga(),
  ])
}
