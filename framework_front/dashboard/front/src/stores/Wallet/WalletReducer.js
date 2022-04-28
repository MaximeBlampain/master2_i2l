import {
  GET_WALLET,
  ADD_ASSET,
  EDIT_ASSET,
  DELETE_ASSET,
} from "./WalletTypes";

const INITIAL_STATE = {
  cryptoAssets: []
}

export default function WalletReducer(
  state = INITIAL_STATE,
  { type, payload },
){
  switch(type){
    case GET_WALLET :
      return { ...state, cryptoAssets: payload}
  }
  return state
}