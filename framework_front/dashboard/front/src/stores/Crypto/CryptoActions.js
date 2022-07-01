import {
  GET_ALL_CRYPTOS,
  GET_ALL_CRYPTOS_SUCCESS
} from "./CryptoTypes"

export function getAllCryptos(){
  return {
    type: GET_ALL_CRYPTOS,
  }
}

export function getAllCryptosSuccess(response){
  return {
    type: GET_ALL_CRYPTOS_SUCCESS,
    payload: response,
  }
}