import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(() => ({}), {})

const Component = (props) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {props.children}
      </BrowserRouter>
    </Provider>
  )
}

export default Component
