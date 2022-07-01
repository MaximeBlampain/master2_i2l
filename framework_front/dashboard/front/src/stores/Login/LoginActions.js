import {
  LOGOUT,
  LOGIN,
  LOGIN_SUCCESS,
} from "./LoginTypes"

export function logout(){
  return { type: LOGOUT }
}

export function login(form){
  return {
    type: LOGIN,
    payload: form,
  }
}

export function loginSuccess(response){
  return {
    type: LOGIN_SUCCESS,
    payload: response,
  }
}