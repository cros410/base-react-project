import React from 'react'
import { Global, css } from '@emotion/core'
import globals from '../../shared/styles/globals'
import { Provider } from 'react-redux'
import store from '../../store'
import Router from '../../router'

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
