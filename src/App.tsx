import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import CpnNavBar from 'components/CpnNavBar'
import store from './store'
import RouteWrapperElement from 'router'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CpnNavBar />
        <RouteWrapperElement />
      </BrowserRouter>
    </Provider>
  )
}

export default App
