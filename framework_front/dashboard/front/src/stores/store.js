import {createStore, combineReducers} from "@reduxjs/toolkit"

import DashboardReducer from "./Dashboard/DashboardReducer"
import ProfileReducer from "./Profile/ProfileReducer"
import WalletReducer from "./Wallet/WalletReducer"

export default createStore(combineReducers({
  dashboard: DashboardReducer,
  profile: ProfileReducer,
  wallet: WalletReducer,
}))
