import {
  DELETE_PROFILE,
  UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS,
} from "./ProfileTypes"

export function update(form){
  return {
    type: UPDATE_PROFILE,
    payload: form,
  }
}

export function updateSuccess(response){
  return {
    type: UPDATE_PROFILE_SUCCESS,
    payload: response,
  }
}

export function deleteUser(USER_ID){
  return {
    type: DELETE_PROFILE,
    payload: USER_ID,
  }
}