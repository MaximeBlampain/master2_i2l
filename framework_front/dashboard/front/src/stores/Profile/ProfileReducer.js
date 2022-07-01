/* Constants */
import { LOGOUT, LOGIN_SUCCESS } from "../Login/LoginTypes"
import { SIGNUP_SUCCESS } from "../Signup/SignupTypes"
import { UPDATE_PROFILE_SUCCESS } from "./ProfileTypes"

const INITIAL_STATE = {
  USER_ID: "",
  FIRSTNAME: "",
  LASTNAME: "",
  EMAIL: "",
  LANGUAGE_KEY: "EN",
  token: ""
}

export default function ProfileReducer(
  state = INITIAL_STATE,
  { type, payload },
){
  switch(type){
    case LOGOUT:
      return INITIAL_STATE
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        ...payload,
      }
    default:
      return state
  }
}