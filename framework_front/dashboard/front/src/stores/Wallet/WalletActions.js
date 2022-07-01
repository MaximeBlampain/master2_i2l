import {
  ADD_ASSET,
  ADD_ASSET_SUCCESS,
  DELETE_ASSET,
  DELETE_ASSET_SUCCESS,
  GET_WALLET,
  GET_WALLET_SUCCESS
} from "./WalletTypes";


export function getWallet(){
  return {
    type: GET_WALLET,
  }
}

export function getWalletSuccess(response){
  return {
    type: GET_WALLET_SUCCESS,
    payload: response
  }
}

export function addAsset(asset){
  return {
   type: ADD_ASSET,
   payload: asset
  }
}

export function addAssetSuccess(response){
  return {
    type: ADD_ASSET_SUCCESS,
    payload: response
  }
}

export function deleteAsset(id){
  return {
    type: DELETE_ASSET,
    payload: id
  }
}

export function deleteAssetSuccess(id){
  return  {
    type: DELETE_ASSET_SUCCESS,
    payload: id
  }
}