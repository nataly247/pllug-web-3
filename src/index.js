import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import App from './components/App'
// import reducer from './reducers'
import 'todomvc-app-css/index.css'

const initialState = {};
const middleware = createLogger({ diff: true });


render(
  <App />,
  document.getElementById('root')
)
