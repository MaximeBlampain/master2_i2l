import {createStore, applyMiddleware} from "@reduxjs/toolkit"
import { composeWithDevTools } from '@redux-devtools/extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import createSagaMiddleware from "redux-saga"

import reducers from "./reducers"
import sagas from "./sagas"

  
const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
)

const persistor = persistStore(store)

sagaMiddleware.run(sagas)

export default {store, persistor}