import { createSelector } from "reselect"

const crypto = state => state.crypto

export const selectCryptoList = createSelector(
  [crypto],
  select => select?.list
)
