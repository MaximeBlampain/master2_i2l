import { createSelector } from "reselect"

const wallet = state => state.wallet

export const selectCryptoAssets = createSelector(
  [wallet],
  select => select?.assets
)
