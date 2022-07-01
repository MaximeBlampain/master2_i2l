import { createSelector } from "reselect"

const profile = state => state.profile

export const selectUserId = createSelector(
  [profile],
  select => select?.USER_ID
)
export const selectFirstname = createSelector(
  [profile],
  select => select?.FIRSTNAME
)
export const selectLastname = createSelector(
  [profile],
  select => select?.LASTNAME
)
export const selectEmail = createSelector(
  [profile],
  select => select?.EMAIL
)
export const selectLanguageKey = createSelector(
  [profile],
  select => select?.LANGUAGE_KEY
)
export const selectToken = createSelector(
  [profile],
  select => select?.token
)