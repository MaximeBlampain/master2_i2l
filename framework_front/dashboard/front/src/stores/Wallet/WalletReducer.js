import {
  GET_WALLET_SUCCESS,
  ADD_ASSET_SUCCESS,
  DELETE_ASSET_SUCCESS,
} from "./WalletTypes";

const INITIAL_STATE = {
  assets: []
}

export default function WalletReducer(
  state = INITIAL_STATE,
  { type, payload },
){
  switch(type){
    case GET_WALLET_SUCCESS :
      return { ...state, assets: payload}
    case ADD_ASSET_SUCCESS:
      return {
        ...state,
        assets: [
          ...state.assets,
          payload,
        ]
      }
    case DELETE_ASSET_SUCCESS:
      const deletedIndex = state.assets.findIndex(asset => asset.ASSET_ID === payload.id)
      const newAssets = [...state.assets]
      newAssets.splice(deletedIndex, 1)
      return {
        ...state,
        assets: newAssets
      }
    default:
      return state
  }
}