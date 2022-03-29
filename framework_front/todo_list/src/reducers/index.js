import { applyMiddleware, createStore } from "redux";

import types from "./types.js"
const {
  GET_TASKS,
  CREATE_TASK,
  UPDATE_TASK,
  DELETE_TASK,
} = types

const createStoreMiddleware = applyMiddleware()(createStore)

const initialState = {
  tasks: [],
}

function Reducer(state = initialState, {type, payload}) {
  switch(type){
    case GET_TASKS:
    case CREATE_TASK:
    case UPDATE_TASK:
    case DELETE_TASK:
      return {
        ...state,
        tasks: payload,
      }
    default:
      return state
  }
}

export default createStoreMiddleware(
  Reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)