import React from 'react'
import { Global, css } from '@emotion/core'
import globals from 'shared/styles/globals'
import Router from 'router'
import store from 'store'
import { Provider } from 'react-redux'
const App = () => {
  return (
    <>
      <Global
        styles={css`
        ${globals}
      `}
      />
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  )
}

export default App
