import { combineReducers } from "redux"

import CryptoReducer from "./Crypto/CryptoReducer"
import ProfileReducer from "./Profile/ProfileReducer"
import WalletReducer from "./Wallet/WalletReducer"

export default combineReducers({
  crypto: CryptoReducer,
  profile: ProfileReducer,
  wallet: WalletReducer,
})