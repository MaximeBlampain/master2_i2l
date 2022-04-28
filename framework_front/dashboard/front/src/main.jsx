import React from 'react'
import { render } from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'

import App from './containers/App'

import "./styles/main.css"

import store from "./stores/store"
import {BrowserRouter} from "react-router-dom";

render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
