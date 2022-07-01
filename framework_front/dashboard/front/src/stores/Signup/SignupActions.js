import {
  SIGNUP,
  SIGNUP_SUCCESS
} from "./SignupTypes"

export function signup(form){
  return {
    type: SIGNUP,
    payload: form,
  }
}

export function signupSuccess(response){
  return {
    type: SIGNUP_SUCCESS,
    payload: response,
  }
}