/* Constants */
import {GET_ALL_CRYPTOS_SUCCESS} from "./CryptoTypes"

const INITIAL_STATE = {
  list: []
}

export default function CryptoReducer(
  state = INITIAL_STATE,
  { type, payload },
){
  switch(type){
    case GET_ALL_CRYPTOS_SUCCESS:
      return {
        ...state,
        list: payload
      }
    default:
      return state
  }
}